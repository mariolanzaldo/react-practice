import { Component } from "react";
import styles from "./style.module.css";
import customClsx from "../utility/customClasses";

export class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { infoTabs, currentTab, onTabSelect } = this.props;

        const App = infoTabs[currentTab].component;

        return (

            <>
                <nav
                    // className={`${styles.navigation}`}
                    className={customClsx('navbar', 'bg-info', 'navbar-expand-lg', styles.navigation)}
                >
                    <div className={customClsx('collapse', 'navbar-collapse')}>
                        <ul className={customClsx('navbar-nav', 'navbar-dark', 'mr-auto', 'mt-lg-0', styles.navTabs)}>
                            {
                                infoTabs.map((tab, index) => {
                                    return (
                                        <li
                                            key={tab.title}
                                            className={customClsx(
                                                'nav-item',
                                                {
                                                    [`${styles.activeTab}`]: index === currentTab
                                                },

                                            )}
                                            onClick={() => onTabSelect(index)}
                                        >
                                            <span className={customClsx('nav-link', 'text-white', styles.title)}>
                                                {tab.title}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </nav>
                <App />
            </>
        );
    }
}

//TODO: Create a set on the tabe, change it when update the tab
//TODO: Make the title match the tab(the document title for the html)