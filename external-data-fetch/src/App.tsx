import { ComponentType, useEffect, useState } from 'react';
// import './App.css';
import CounterApp from './components/counter-app/CounterApp';
import ExternalDataApp from './components/external-data-app/ExternalData';
import Tabs from './components/Tabs';

export interface TabInfo {
  title: string;
  component: ComponentType;
}

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //   <ExternalDataApp />
  //   <CounterApp />
  //   </>
  // )

  const [currentTab, setCurrentTab] = useState(0);
  const infoTabs: TabInfo[] = [
    {
        title: "Counter",
        // component: Counter
        component: CounterApp
    },
      {
          title: "Data",
          component: ExternalDataApp
      },
  ];

  const onTabSelect = (selectedTab: number) => {
    setCurrentTab(selectedTab);
  };

  const getCurrentTab = (): number => {
    const currentLocation = window.location.hash;
    const tabIndex = currentLocation[currentLocation.length - 1];
    return tabIndex ? +tabIndex : 0;
  }

  const handleUpdateHasChange = (): void => {
    setCurrentTab(getCurrentTab());
  }

  useEffect(() => {
    window.addEventListener('hashchange', handleUpdateHasChange);
    return () => {
      window.removeEventListener("hashchange", handleUpdateHasChange);
    }
  }, []);

  useEffect(() => {
    window.location.hash = String(currentTab);
    document.title = infoTabs[currentTab].title;
  }, [currentTab]);


  return (
    <>
      <Tabs 
      infoTabs={infoTabs}
      currentTab={currentTab}
      onTabSelect={onTabSelect}
      />
    </>
  )
}

export default App
