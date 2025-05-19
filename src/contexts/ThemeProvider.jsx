import ThemeContext from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  // for now just use the defaults
  const theme = {
    primaryDeep: "deepblue",
    primaryMedium: "deepturquoise",
    primaryBright: "turquoise",
    primaryLight: "lightturquoise",
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
