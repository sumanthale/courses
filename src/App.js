import React from "react";
import ColorModeContextProvider from "./themes/colorModeContext";
import Routes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import NavigationScroll from "./Helpers/NavigationScroll";
function App() {
  return (
    <ColorModeContextProvider>
      <AuthProvider>
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </AuthProvider>
    </ColorModeContextProvider>
  );
}

export default App;
