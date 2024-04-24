import React from "react";
import './App.css';
// import Counter from "./components/Counter";
import './scss/custom-bootstrap.scss';
import { Tabs } from "./Tabs";
import { ContactsApp } from './components/Contacts.app.jsx';
import { CounterApp } from "./components/CounterApp.jsx";

class App extends React.Component {
  constructor() {
    super();
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

  setCurrentTab(tab) {
    window.location.hash = "#" + String(tab);
  }

  setTitle(title) {
    document.title = title;
  }

  handleUpdateHasChange() {
    this.setState({ currentTab: this.getCurrentTab() });
  }

  componentDidMount() {
    // const currentTab = this.getCurrentTab();
    // this.setState({ currentTab });
    // this.setCurrentTab(currentTab);
    window.addEventListener('hashchange', this.handleUpdateHasChange);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleUpdateHasChange);
  }

  componentDidUpdate(_, prevState) {
    const { currentTab: prevTab } = prevState;
    const { currentTab } = this.state;


    window.location.hash = this.state.currentTab;

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
          onTabSelect={(selectedTab) => {
            this.setState({ currentTab: selectedTab });
          }}
        // setCurrentTab={this.setCurrentTab}
        />

      </>
    )
  }
}
export default App
