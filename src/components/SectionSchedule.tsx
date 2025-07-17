import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { MapPin } from "lucide-react";

const SectionSchedule = ({ scheduleData }) => {
  const { primaryDeep, soloJazz, turquoise, lindyHop, initiation, team } =
    useTheme();

  if (!scheduleData || scheduleData.length === 0) return null;

  const filteredSchedule = scheduleData.filter((day) => day.classes.length > 0);
  const sortedSchedule = [...filteredSchedule].sort(
    (a, b) => a.order - b.order
  );
  const sortedWithClasses = sortedSchedule.map((day) => ({
    ...day,
    classes: [...day.classes].sort((a, b) =>
      a.starttime.localeCompare(b.starttime)
    ),
  }));
  const maxRows =
    Math.max(...sortedWithClasses.map((d) => d.classes.length)) + 1;

  const getColor = ({ dance, level }) => {
    const d = dance.toLowerCase();
    const l = level.toLowerCase();
    if (d === "lindy hop") {
      if (l === "iniciació") return initiation;
      if (l === "team") return team;
      return lindyHop;
    }
    if (d === "solo jazz") return soloJazz;
    return turquoise;
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <h2
          className="font-header text-4xl py-6"
          style={{ color: primaryDeep }}
        >
          Horaris
        </h2>

        {/* Mobile layout */}
        <div className="block md:hidden space-y-6">
          {sortedWithClasses.map((day) => (
            <div key={day.day} className="border rounded-md p-4 shadow">
              <h3 className="text-xl font-bold text-center mb-3">
                {day.day.toUpperCase()}
              </h3>
              {day.classes.map((classObj, idx) => (
                <div
                  key={idx}
                  className="mb-3 rounded p-3 text-sm text-black"
                  style={{ backgroundColor: getColor(classObj) }}
                >
                  <div className="font-semibold">{classObj.starttime}</div>
                  <div className="uppercase font-bold">{classObj.dance}</div>
                  <div className="italic">{classObj.level}</div>
                  {classObj.sala?.name && classObj.sala?.url && (
                    <a
                      href={classObj.sala.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 mt-1 text-xs underline"
                    >
                      <MapPin size={14} /> {classObj.sala.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop layout */}
        <div
          className="hidden md:grid gap-2 p-4 rounded-md font-info"
          style={{
            gridTemplateColumns: `repeat(${sortedWithClasses.length}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${maxRows}, minmax(0, auto))`,
          }}
        >
          {sortedWithClasses.map((day) => (
            <div
              key={`header-${day.day}`}
              className="font-bold text-center border-b pb-1"
            >
              {day.day.toUpperCase()}
            </div>
          ))}

          {Array.from({ length: maxRows - 1 }).map((_, rowIdx) =>
            sortedWithClasses.map((day) => {
              const classObj = day.classes[rowIdx];
              if (!classObj) return <div key={`${day.day}-${rowIdx}`} />;
              const bgColor = getColor(classObj);
              return (
                <div
                  key={`${day.day}-${rowIdx}`}
                  className="rounded p-2 text-sm text-center hover:shadow-custom text-black"
                  style={{ backgroundColor: bgColor }}
                >
                  <div>{classObj.starttime}</div>
                  <div className="font-bold uppercase">{classObj.dance}</div>
                  <div className="italic">{classObj.level}</div>
                  {classObj.sala?.name && classObj.sala?.url && (
                    <a
                      href={classObj.sala.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 mt-1 text-xs underline"
                    >
                      <MapPin size={14} /> {classObj.sala.name}
                    </a>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionSchedule;
