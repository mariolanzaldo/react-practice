import './App.css'
// import CounterApp from './components/CounterApp'
import ExternalDataApp from './components/ExternalDataApp';

function App() {

  return (
    <>
      {/* <CounterApp init={"planet"} /> */}
      {/* <CustomQuery> */}
      <ExternalDataApp />
      {/* </CustomQuery> */}
    </>
  )
}

export default App;

//TODO: Recreate this with class components
//TODO: Optimize the rendering in  both (Multiple Counters done)
//TODO: Improve the API (setCount, count) for only one value. The idea is just to only render the component that changes
//TODO: Migrate the old code to functional components

// import { Suspense, useState, useEffect } from 'react';

// const fetchData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Some data fetched!");
//     }, 2000);
//   });
// };

// const DataComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData().then((result) => {
//       setData(result);
//     });
//   }, []);

//   return (
//     <div>
//       <Suspense fallback={<LoadingSpinner />}>
//         {data && <DataDisplay data={data} />}
//       </Suspense>
//     </div>
//   );
// };

// const DataDisplay = ({ data }) => {
//   return <div>{data}</div>;
// };

// const LoadingSpinner = () => {
//   return <div>Loading...</div>;
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Suspense Example</h1>
//       <DataComponent />
//     </div>
//   );
// };

// export default App;
