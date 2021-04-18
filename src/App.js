import React, { useState } from "react";
import "./App.css";
import OCARoutes from "./components/OCARoutes/OCARoutes";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./OCA-configs/themeConfig";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const curThemeName = localStorage.getItem("appTheme") || "light";

  const [themeType, setThemeType] = useState(curThemeName);

  const setThemeName = themeName => {
    localStorage.setItem("appTheme", themeName);
    setThemeType(themeName);
  };

  const theme = getTheme({
    paletteType: themeType
  });

  return (
    <ThemeContext.Provider value={{ setThemeName, curThemeName }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <OCARoutes />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
