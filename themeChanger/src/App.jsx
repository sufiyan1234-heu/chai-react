import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode,setThemeMode] = useState("light")
  return (
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* themeBtn */}
        </div>

        <div className="w-full max-w-sm mx-auto">{/* card Ui */}</div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
