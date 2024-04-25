import { ReactElement } from "react";
import { TabInfo } from "../../App";
import customClsx from "../../utility/customClasses";
import styles from "./style.module.css";

interface TabProps {
    infoTabs: TabInfo[];
    currentTab: number;
    onTabSelect: (index: number) => void;
}

function Tabs({  infoTabs, currentTab, onTabSelect }: TabProps): ReactElement {

    const App= infoTabs[currentTab].component;
    return(
        <>
                <nav
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

export default Tabs;