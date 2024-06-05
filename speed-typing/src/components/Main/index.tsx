import { Grid } from "@mui/material";
import { useAppContext } from "../../state";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar";


function Main() {
    //eslint-disable-next-line
    const [appState ] = useAppContext();
    
    if(!appState.currentUser) {
        return (
            <Navigate to='/login' />
        );
    }

    return (
        <Grid
            container
            marginTop={-1}
            padding={0}
        >
            <Navbar />

            <Outlet />

        </Grid>
    );
}

export default Main;