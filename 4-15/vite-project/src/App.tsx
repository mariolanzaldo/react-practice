import React, { ComponentType } from "react";
import './App.css';
// import Counter from "./components/Counter";
// import './scss/custom-bootstrap.scss';
import { Tabs } from "./components/Tabs/index.js";
import { ContactsApp } from './components/Contacts.app.jsx';
import { CounterApp } from "./components/CounterApp.jsx";

export interface TabInfo {
  title: string;
  component: ComponentType;
}

interface AppState {
  currentTab: number;
}

class App extends React.Component<unknown, AppState> {
  private infoTabs: TabInfo[];

  constructor(props: unknown) {
    super(props);
    this.state = {
      // currentTab: this.getCurrentTab(),
      currentTab: 0,
    };

    this.infoTabs = [{ title: "contacts", component: ContactsApp }, { title: "counters", component: CounterApp }];

    this.handleUpdateHasChange = this.handleUpdateHasChange.bind(this);
  }

  // componentDidMount() {
  //   this.setState({ currentTab: this.getCurrentTab() })
  // }

  getCurrentTab() {
    const currentLocation = window.location.hash;
    const tabIndex = currentLocation[currentLocation.length - 1];

    if (tabIndex) {
      return +tabIndex;
    }

    return 0;
  }

  setCurrentTab(tab: string): void {
    window.location.hash = "#" + String(tab);
  }

  setTitle(title: string): void {
    document.title = title;
  }

  handleUpdateHasChange(): void {
    this.setState({ currentTab: this.getCurrentTab() });
  }

  componentDidMount(): void {
    // const currentTab = this.getCurrentTab();
    // this.setState({ currentTab });
    // this.setCurrentTab(currentTab);
    window.addEventListener('hashchange', this.handleUpdateHasChange);
  }

  componentWillUnmount(): void {
    window.removeEventListener("hashchange", this.handleUpdateHasChange);
  }

  componentDidUpdate(_: unknown, prevState: AppState) {
    const { currentTab: prevTab } = prevState;
    const { currentTab } = this.state;


    window.location.hash = String(this.state.currentTab);

    if (prevTab !== currentTab) {
      this.setTitle(this.infoTabs[currentTab].title);
    }
  }

  // componentDidUpdate(_, prevState) {
  //   const { currentTab: prevTab } = prevState;
  //   const { currentTab } = this.state;

  //   if (prevTab !== currentTab) {
  //     this.setTitle(this.infoTabs[currentTab].title);
  //   }
  // }

  render() {

    const { infoTabs, state } = this;

    return (
      <>
        <Tabs
          infoTabs={infoTabs}
          currentTab={state.currentTab}
          onTabSelect={(selectedTab: number) => {
            this.setState({ currentTab: selectedTab });
          }}
        // setCurrentTab={this.setCurrentTab}
        />

      </>
    )
  }
}
export default App;

