import { Box, 
    Card, 
    CardContent, 
    Fade, 
    Modal, 
    styled } from "@mui/material";
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