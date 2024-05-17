import { Button, Stack } from "@mui/material";
import { useAppContext } from "../../state";
import { setPage } from "../../state/actionTypes";
import { Page } from "../../state/reducer";

function History() {

    const [state, dispatch ] = useAppContext();
    console.log(state);

    const handleClick = () => {
        dispatch(setPage({
            currentPage: Page.main,
        }))
    }

    return (
        <Stack
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
        >
            <Stack>
                The history goes here!

            </Stack>
            <Stack>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClick}
                >
                    Back to main
                </Button>

            </Stack>
        </Stack>
    )
}

export default History;