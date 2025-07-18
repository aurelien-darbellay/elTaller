import ThemeContext from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  // for now just use the defaults
  const theme = {
    primaryDeep: "#da75daff",
    primaryMedium: "#da75daff",
    primaryBright: "#e662b3ff",
    primaryLight: "#eb99c6ff",
    creme: "creme",
    pink: "pink",
    deeppink: "deeppink",
    grey: "grey",
    gold: "gold",
    turquoise: "#70f5e3ff",
    initiation: "#b5ff55ff",
    soloJazz: "hsla(0, 100%, 90%, 1.00)",
    lindyHop: "#fcf2f1ff",
    team: "#f3c954ff",
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
