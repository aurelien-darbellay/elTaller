import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext"; // Adjust path as needed

const ClassDescription = ({ textClass, textPrice }) => {
  const { primaryDeep } = useTheme();
  const [isClassOpen, setClassOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <h2
          className="font-header text-4xl py-6"
          style={{ color: primaryDeep }}
        >
          Les Nostres Classes
        </h2>

        <div className="font-info flex flex-col gap-4 p-4">
          {/* Classes */}
          <div className="border rounded-md p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setClassOpen((prev) => !prev)}
            >
              <h3 className="text-xl font-bold">Les Classes</h3>
              <span className="text-xl">{isClassOpen ? "▲" : "▼"}</span>
            </div>
            {isClassOpen && textClass}
          </div>

          {/* Preus */}
          <div className="border rounded-md p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setPriceOpen((prev) => !prev)}
            >
              <h3 className="text-xl font-bold">Els Preus</h3>
              <span className="text-xl">{isPriceOpen ? "▲" : "▼"}</span>
            </div>
            {isPriceOpen && textPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDescription;
