import Navbar from "../Navbar";
import SectionHeader from "../SectionHeader";
import SectionItems from "../SectionItems";
import { sidebarData } from "../../sidebarData";
import { useState } from "react";
import Divider from "../Divider";
// import MultiLevel from "../MultiLevel";

function NavbarApp() {

    const [ navbarOpen, setNavbarOpen] = useState(false);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const largeNavbar = sidebarData.map(({ label, items }, index) => (
        <div
          key={index}
        >

          <SectionHeader headline={label} />
          <SectionItems items={items} navbarOpen={navbarOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
          {(sidebarData.length - 1 > index) ? <Divider></Divider>  : null }          
        </div>
      ));

      // const {id, icon, items: nestedItems, title } = sidebarData[1].items[1]!.items

      // console.log(sidebarData[1].items[1].items);

      // largeNavbar.push(<MultiLevel items={nestedItems} icon={icon} id={id} title={title} activeIndex={activeIndex} setActiveIndex={setActiveIndex} navbarOpen={navbarOpen} />)

      const smallNavbar = <SectionItems items={sidebarData[0].items} navbarOpen={navbarOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
    return(
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}>
            {
                navbarOpen ? largeNavbar : smallNavbar
            }
        </Navbar>
    );
}

export default NavbarApp;