import './App.css'
import CounterApp from './components/CounterApp'

function App() {

  return (
    <>
      <CounterApp init={"planet"} />
    </>
  )
}

export default App;

//TODO: Recreate this with class components
//TODO: Optimize the rendering in  both (Multiple Counters done)
//TODO: Improve the API (setCount, count) for only one value. The idea is just to only render the component that changes
//TODO: Migrate the old code to functional components
