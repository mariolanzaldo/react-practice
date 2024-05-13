import SectionElement from "../SectionItem";
import Navbar from "../Navbar";
import SectionItems, { Item } from "../SectionItems";
import { sidebarData } from "../../sidebarData";
import { useState } from "react";
import SectionHeader from "../SectionHeader";
import Divider from "../Divider";
import Collapse from "../Collapse";


interface Data {
    label: string;
    items: Item[];
}

function NavbarApp() {

    const [ navbarOpen, setNavbarOpen] = useState(false);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const  [subNavOpen, setSubNavOpen] = useState(false);

    const handleToggleMenu = () => {
        setSubNavOpen(!subNavOpen);
    };

    const handleClick = (id: number | null) => {
      setActiveIndex(id);

    }

    const itemElements = sidebarData.map((element: Data) => element.items);
    const [mailLabel, labelsLabel] = itemElements;

    const largeNavbar = (
        <> 
            <SectionItems navbarOpen={navbarOpen}>
                <SectionHeader children={sidebarData[0].label}/>
                <SectionElement item={mailLabel[0]}
                    navbarOpen={navbarOpen}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                    // multilevel={false}
                />
                <SectionElement item={mailLabel[1]}
                    navbarOpen={navbarOpen}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                    // multilevel={false}
                />
                <SectionElement item={mailLabel[2]}
                    navbarOpen={navbarOpen}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                    // multilevel={false}
                />
                <SectionElement item={mailLabel[3]}
                    navbarOpen={navbarOpen}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                    // multilevel={false}
                />
            <Divider />
            </SectionItems>

            <SectionItems navbarOpen={navbarOpen}>
                <SectionHeader children={sidebarData[1].label}/>
                {/* <SectionElement 
                    item={labelsLabel[0]} 
                    navbarOpen={navbarOpen} 
                    activeIndex={activeIndex} 
                    handleClick={handleClick}
                    multilevel={false}
                    /> */}
                <SectionElement 
                    item={labelsLabel[1]} 
                    navbarOpen={navbarOpen} 
                    activeIndex={activeIndex} 
                    multilevel
                    handleClick={handleClick} 
                    subNavOpen={subNavOpen} 
                    handleToggleMenu={handleToggleMenu} 
                    />

                <Collapse 
                    subNavOpen={subNavOpen}
                >
                    {
                        <>
                            <SectionElement 
                                item={labelsLabel[1].items![0]} 
                                navbarOpen={navbarOpen} 
                                activeIndex={activeIndex} 
                                handleClick={handleClick}
                                // multilevel={false}    
                            />
                        </>

                    }
                </Collapse>
                <SectionElement 
                    item={labelsLabel[0]} 
                    navbarOpen={navbarOpen} 
                    activeIndex={activeIndex} 
                    handleClick={handleClick}
                    // multilevel={false}
                    />
            </SectionItems>
        </>
    );

    const smallNavbar = (
        <>
            <SectionItems navbarOpen={navbarOpen}>
                <SectionElement 
                    item={mailLabel[0]} 
                    navbarOpen={navbarOpen} 
                    activeIndex={activeIndex} 
                    handleClick={handleClick} 
                    multilevel={false}
                />
                <SectionElement 
                    item={mailLabel[1]} 
                    navbarOpen={navbarOpen} 
                    activeIndex={activeIndex} 
                    handleClick={handleClick} 
                    multilevel={false}
                />
                <SectionElement 
                    item={mailLabel[2]} 
                    navbarOpen={navbarOpen} 
                    activeIndex={activeIndex} 
                    handleClick={handleClick} 
                    multilevel={false}
                />
                <SectionElement 
                    item={mailLabel[3]} 
                    navbarOpen={navbarOpen} 
                    activeIndex={activeIndex} 
                    handleClick={handleClick} 
                    multilevel={false}
                />
            </SectionItems>
        </>
    )

    return(
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}>
            {
                navbarOpen ? largeNavbar : smallNavbar
            }
        </Navbar>
    );
}

export default NavbarApp;