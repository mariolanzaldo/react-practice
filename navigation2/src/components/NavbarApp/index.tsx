import Navbar from "../Navbar";
import SectionHeader from "../SectionHeader";
import SectionItems from "../SectionItems";
import { sidebarData } from "../../sidebarData";
import { useState } from "react";
import Divider from "../Divider";

function NavbarApp() {

    const [ navbarOpen, setNavbarOpen] = useState(false);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const largeNavbar = sidebarData.map(({ label, items }, index) => (
        <div
          key={index}
        >

          <SectionHeader headline={label} />
          <SectionItems items={items} navbarOpen={navbarOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
          {(sidebarData.length - 1 > index) ? <Divider> </Divider>  : null }          
        </div>
      ));

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