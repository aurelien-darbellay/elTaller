import React from "react";
import { useTheme } from "../contexts/ThemeContext"; // Adjust path if needed
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

  return (
    <div
      className="w-full"
      style={
        {
          //backgroundImage: `linear-gradient(135deg, creme 0%, #ffffff 100%)`,
        }
      }
    >
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="font-header text-4xl p-4" style={{ color: primaryDeep }}>
          Horaris
        </h2>

        {/* Schedule Grid */}
        <div
          className="grid gap-2 p-4 rounded-md font-info"
          style={{
            gridTemplateColumns: `repeat(${sortedWithClasses.length}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${maxRows}, minmax(0, auto))`,
          }}
        >
          {/* Day headers */}
          {sortedWithClasses.map((day) => (
            <div
              key={`header-${day.day}`}
              className="font-bold text-center border-b pb-1"
            >
              {day.day.toUpperCase()}
            </div>
          ))}

          {/* Class cells */}
          {Array.from({ length: maxRows - 1 }).map((_, rowIdx) =>
            sortedWithClasses.map((day) => {
              const classObj = day.classes[rowIdx];

              if (!classObj) {
                return <div key={`${day.day}-${rowIdx}`} />;
              }

              const { dance, starttime, level, sala } = classObj;

              let bgColor = turquoise;
              let textColor = "text-black";

              if (dance.toLowerCase() === "lindy hop") {
                bgColor = lindyHop;
                //textColor = "text-white";
                if (level.toLowerCase() === "iniciació") {
                  bgColor = initiation;
                  //textColor = "text-black";
                }
                if (level.toLowerCase() == "team") {
                  bgColor = team;
                }
              } else if (dance.toLowerCase() === "solo jazz") {
                bgColor = soloJazz;
                //textColor = "text-black";
              }

              return (
                <div
                  key={`${day.day}-${rowIdx}`}
                  className={`rounded p-2 text-sm text-center hover:shadow-custom ${textColor}`}
                  style={{ backgroundColor: bgColor }}
                >
                  <div>{starttime}</div>
                  <div className="font-bold">{dance.toUpperCase()}</div>
                  <div className="italic">{level}</div>

                  {sala?.name && sala?.url && (
                    <a
                      href={sala.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1 mt-1 text-xs no-underline hover:underline hover:text-blue-200 ${
                        textColor === "text-white" ? "text-white" : "text-black"
                      }`}
                    >
                      <MapPin size={14} className="inline-block" />
                      {sala.name}
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
