import { ComponentType, useEffect, useState } from "react";
import Tabs from "./componets/Tabs";
// import Counter from "./componets/Counter";
import CounterApp from "./componets/CounterApp";
import ContactsApp from "./componets/ContactsApp";

export interface TabInfo {
  title: string;
  component: ComponentType;
}

function App() {

  const [currentTab, setCurrentTab] = useState(0);
  const infoTabs: TabInfo[] = [
      {
          title: "contacts",
          component: ContactsApp
      },
      {
          title: "counters",
          // component: Counter
          component: CounterApp
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

