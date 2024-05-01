/* 
<NavDrawer>
  <NavSection>
    <SectionHeader />
    <Destination>
      <SubDestination>
        <SubDestination />
      </SubDestination>
    </Destination>
    <Destination>
      <SubDestination />
    </Destination>
    <Destination />
  </NavSection>
  <NavSection>
    <SectionHeader />
    <Destination />
    <Destination />
    <Destination />
  </NavSection>
</NavDrawer>;
*/

// import Drawer from "../Drawer";
import Header from "../Header";
import MenuItem from "../MenuItem";
import NavigationDrawer from "../NavDrawer";
import NavScrim from "../NavScrim";

export default function SampleMenu() {

    
    return (
       <NavScrim>
        <NavigationDrawer>
            <>
                <Header value={"Mail"}></Header>
                <MenuItem 
                    title={"Drawer 1"}
                    badge={"Badge 1"}
                />
                <MenuItem 
                    title={"Drawer 2"}
                    badge={"Badge 2"}
                />

            </>
        </NavigationDrawer>
       </NavScrim>
    );
}