import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ClassDescription = ({ textClass, textPrice, textTeachers }) => {
  const { primaryDeep } = useTheme();
  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <h2
          className="font-header text-4xl py-6"
          style={{ color: primaryDeep }}
        >
          Les Nostres Classes
        </h2>
        <div className=" font-info grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* Left column - full height */}
          <div className="border rounded-md p-4 col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Les Classes</h3>
            <div dangerouslySetInnerHTML={{ __html: textClass }} />
          </div>

          {/* Right column - split into two rows */}
          <div className="col-span-1 md:col-span-2 grid grid-rows-2 gap-4">
            <div className="border rounded-md p-4">
              <h3 className="text-xl font-bold mb-2">Els Preus</h3>
              <div dangerouslySetInnerHTML={{ __html: textPrice }} />
            </div>
            <div className="border rounded-md p-4">
              <h3 className="text-xl font-bold mb-2">Les Professores</h3>
              <div dangerouslySetInnerHTML={{ __html: textTeachers }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDescription;
