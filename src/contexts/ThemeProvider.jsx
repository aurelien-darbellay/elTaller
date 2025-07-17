import ThemeContext from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  // for now just use the defaults
  const theme = {
    primaryDeep: "#771677ff",
    primaryMedium: "#920c87ff",
    primaryBright: "#f1189eff",
    primaryLight: "#c95896ff",
    creme: "creme",
    pink: "pink",
    deeppink: "deeppink",
    grey: "grey",
    gold: "gold",
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
