import React from "react";
import ColorModeContextProvider from "./themes/colorModeContext";
import Routes from "./routes";
function App() {
  return (
    <ColorModeContextProvider>
      <Routes />
    </ColorModeContextProvider>
  );
}

export default App;
