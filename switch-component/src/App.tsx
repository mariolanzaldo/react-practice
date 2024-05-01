import { createContext, useState } from "react";
import Switch from "./components/Switch"
import DarkMode from "./components/DarkMode";
import "./App.css";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});


function App() {


  
  // const [toggled, setToggled] = useState(false);

  const [theme, setTheme] = useState("light");

  const toggleTheme = function () {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  return (
   <>
   {/* <Container  id={"switch-checkbox"} onChecked={try1} checked={false}/> */}
   {/* <Switch onChange={(event) => setToggled(event.target.checked)} toggled={toggled}/> */}
   <ThemeContext.Provider value={{theme, toggleTheme}}>

   <div
    className="App"
    id={theme}
   >
<Switch 
    id="Switch"
    small
    disabled={false}
    // checked={toggled}
    // onChange={setToggled}
    checked={theme === 'dark'}
    onChange={toggleTheme}
   />
   <label>{theme === 'light' ? "Light mode" : "Dark mode"}</label>
    <DarkMode/>
   </div>
   </ThemeContext.Provider>
   
   {/* <div>The switch is {toggled ? "on": "off"}</div> */}
   </>
  )
}


export default App
