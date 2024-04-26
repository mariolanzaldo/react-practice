import { ReactElement } from "react";
import List from "./List";

function ExternalDataApp(): ReactElement {

    // function childFunction() {
    //     console.log("Child Fn");
    // }
    return (
        // <CustomQuery>
        // {/* {() => console.log("Child Fn")} */}
        // {/* </CustomQuery> */}
        <List />
    );
}

export default ExternalDataApp;