import CustomQuery from "./CustomQuery";
// import List from "./List";

function ExternalDataApp() {

    // function childFunction() {
    //     console.log("Child Fn");
    // }
    return (
        <CustomQuery>
            {() => console.log("Child Fn")}
            {/* <List />
            <List />
            <List /> */}
        </CustomQuery>
    );
}

export default ExternalDataApp;