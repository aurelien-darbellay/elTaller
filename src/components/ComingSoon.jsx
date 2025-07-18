import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ComingSoon = () => {
  const { primaryDeep } = useTheme();
  return (
    <div
      className="container mx-auto font-header text-4xl mt-40"
      style={{ color: primaryDeep }}
    >
      Hi estem treballant...
    </div>
  );
};

export default ComingSoon;
