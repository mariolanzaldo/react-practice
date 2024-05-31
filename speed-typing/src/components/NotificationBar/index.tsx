import { Alert, Zoom } from "@mui/material";
import { useAppContext } from "../../state";
import { cleanNotification } from "../../state/actions/cleanNotification";
import { SyntheticEvent } from "react";


function NotificationBar () {

    const [appState, dispatch ] = useAppContext();
    const { globalError } = appState;

    const handleClose = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(cleanNotification());
    };

    return(
        <Zoom in={globalError.error}>
            <Alert
                variant="filled"
                severity="error"
                onClose={handleClose}
            >
                {globalError.errorMessage}
            </Alert>

        </Zoom>
    );
}

export default NotificationBar;