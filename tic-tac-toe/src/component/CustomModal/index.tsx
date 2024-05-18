import { Box, 
    // Button, 
    Card, 
    CardContent, 
    Fade, 
    // IconButton, 
    Modal, 
    // Typography, 
    styled } from "@mui/material";
// import { useAppContext } from "../../state";
// import { resetFromGameover, setPage } from "../../state/actionTypes";
// import RefreshIcon from '@mui/icons-material/Refresh';
// import HistoryIcon from '@mui/icons-material/History';
// import { Page } from "../../state/reducer";
import { PropsWithChildren } from "react";

const StyledCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    position: 'absolute',
    top: '35%',
    left: '35%',
    width: 400,
    p: 4,
    wordBreak: "break-word",
}));

interface CustomModalProps {
    open: boolean;
    primaryHandler?: () => void;
    secondaryHandler?: () => void;
}

function CustomModal({ children, open }: PropsWithChildren<CustomModalProps>) {

    return(
        <Modal
                open={open}
            >
                <StyledCard>
                    <CardContent>
                        <Fade
                            in={open}
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                            {children}
                            </Box>
                        </Fade>
                    </CardContent>
                </StyledCard>
            </Modal>
    )
}

export default CustomModal;