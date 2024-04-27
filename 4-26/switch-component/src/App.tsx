import { ChangeEvent, useState } from "react";
import Switch from "./components/Switch"

function App() {


  
  const [toggled, setToggled] = useState(false);
  return (
   <>
   {/* <Container  id={"switch-checkbox"} onChecked={try1} checked={false}/> */}
   <Switch onChange={(event: ChangeEvent<HTMLInputElement>) => setToggled(event.target.checked)}/>
   <div>The switch is {toggled ? "on": "off"}</div>
   </>
  )
}


export default App
