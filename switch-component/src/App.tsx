import { createContext, useState } from "react";
// import Switch from "./components/Switch"
// import DarkMode from "./components/DarkMode";
import "./App.css";
// import Switch2 from "./components/Switch2";
import Switch3 from "./components/Switch3";
import  Done from "../public/done.svg?react";
import  Close from "../public/close.svg?react";

// import  Done from "../public/done.svg?react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});


function App() {


  
  const [toggled, setToggled] = useState(false);

  // const [theme, setTheme] = useState("light");

  // const toggleTheme = function () {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  const handleChange = () => {
    // e.preventDefault();
    console.log('Here');
    setToggled(!toggled);
  }


  return (
   <>
   {/* <Container  id={"switch-checkbox"} onChecked={try1} checked={false}/> */}
   {/* <Switch onChange={(event) => setToggled(event.target.checked)} toggled={toggled}/> */}
   {/* <ThemeContext.Provider value={{theme, toggleTheme}}>

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
  </ThemeContext.Provider> */}

  {/* <Switch2 onChange={handleChange} toggled={toggled}/> */}
  <Switch3 onChange={handleChange} toggled={toggled} icon1={Done ? <Done /> : null} icon2={Close ? <Close /> : null}/>
   
   <div>The switch is {toggled ? "on": "off"}</div>

   {/* <Done /> */}
   </>
  )
}


export default App
