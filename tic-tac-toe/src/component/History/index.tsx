import { Box, Button, IconButton, Stack, Typography, styled } from "@mui/material";
import { useAppContext } from "../../state";
import { clearHistory, setPage } from "../../state/actionTypes";
import { Page } from "../../state/reducer";
import HistoryTable from "./HistoryTable";
import CustomModal from "../CustomModal";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

const StyledButton = styled(Button)(() => ({
    width: "100px",
    height: "50px",
    lineBreak: "auto",
}))

function History() {

    // eslint-disable-next-line
    const [state, dispatch ] = useAppContext();
    const [openModal, setOpenModal] = useState(false);
    
    const { stats } = state;
    // console.log(state);

    const handleDelete = () => {
        dispatch(clearHistory());
        setOpenModal(false);

    };

    const handleCancel = () => {
        setOpenModal(false);
    };

    const ModalContent = (
        <>
            <Typography
                variant="h5"
            >
                Are you sure to delete the game history?
            </Typography>
            <Box
                display="flex"
                gap={3}
                mt={2}
            >
    
                <Button
                    onClick={handleDelete}
                    variant='contained'
                    color="error"
                >
                    <IconButton>
                        <DeleteIcon 
                            sx={{
                                fontSize: 35
                            }}
                        />
                    </IconButton>
                </Button>
    
                <Button
                    onClick={handleCancel}
                    variant='contained'
                    color="primary"
                >
                    <IconButton>
                        <CancelIcon
                        sx={{
                            fontSize: 35
                        }}
                        />
                    </IconButton>
                </Button>
            </Box>
        </>
    );

    const handleClick = () => {
        dispatch(setPage({
            currentPage: Page.main,
        }))
    };

    const handleClearHistory = () => {
        // dispatch(clearHistory());
        setOpenModal(!openModal);
    };

    return (
        <Stack
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
        >
            <Stack
                display="flex"
                gap={2}
            >
                <HistoryTable />
                <StyledButton
                    variant="outlined"
                    color="error"
                    onClick={handleClearHistory}
                    disabled={stats.length === 0}
                >
                    Clear history
                </StyledButton>
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
            <CustomModal open={openModal}>
                {ModalContent}
            </CustomModal>
        </Stack>
    )
}

export default History;