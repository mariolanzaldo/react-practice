// import SectionElement from "../SectionItem";
import SectionElement from "../SectionItem";
import Navbar from "../Navbar";
// import SectionHeader from "../SectionHeader";
import SectionItems, { Item } from "../SectionItems";
import { sidebarData } from "../../sidebarData";
import { useState } from "react";
import SectionHeader from "../SectionHeader";
import Divider from "../Divider";
import Collapse from "../Collapse";
// import Divider from "../Divider";
// import MultiLevel from "../MultiLevel";

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
                    multilevel={false}
                />
                <SectionElement item={mailLabel[1]}
                    navbarOpen={navbarOpen}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                    multilevel={false}
                />
                <SectionElement item={mailLabel[2]}
                    navbarOpen={navbarOpen}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                    multilevel={false}
                />
                <SectionElement item={mailLabel[3]}
                    navbarOpen={navbarOpen}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                    multilevel={false}
                />
            <Divider />
            </SectionItems>

            <SectionItems navbarOpen={navbarOpen}>
                <SectionHeader children={sidebarData[1].label}/>
                <SectionElement 
                    item={labelsLabel[0]} 
                    navbarOpen={navbarOpen} 
                    activeIndex={activeIndex} 
                    handleClick={handleClick}
                    multilevel={false}
                    />
                <SectionElement 
                    item={labelsLabel[1]} 
                    navbarOpen={navbarOpen} 
                    activeIndex={activeIndex} 
                    multilevel={true}
                    handleClick={handleClick} 
                    subNavOpen={subNavOpen} 
                    handleToggleMenu={handleToggleMenu} 
                    />

                <Collapse /*handleToggleMenu={handleToggleMenu}*/ subNavOpen={subNavOpen}>
                    {
                        <>
                            <SectionElement 
                                item={labelsLabel[1].items![0]} 
                                navbarOpen={navbarOpen} 
                                activeIndex={activeIndex} 
                                handleClick={handleClick}
                                multilevel={false}    
                            />
                        </>

                    }
                </Collapse>
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

//TODO: Fix padding when the bar is collapsed, add the badges