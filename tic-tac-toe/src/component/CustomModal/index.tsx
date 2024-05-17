import { Box, Button, Card, CardContent, Fade, IconButton, Modal, Typography, styled } from "@mui/material";
import { useAppContext } from "../../state";
import { resetFromGameover, setPage } from "../../state/actionTypes";
import RefreshIcon from '@mui/icons-material/Refresh';
import HistoryIcon from '@mui/icons-material/History';
import { Page } from "../../state/reducer";

const StyledCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    position: 'absolute',
    top: '35%',
    left: '35%',
    width: 400,
    p: 4,
}));

function CustomModal() {

    const [state, dispatch ] = useAppContext();
    const { game } = state;



    const handleReset = function () {
        dispatch(resetFromGameover());
    };

    const handleHistory = function () {
        console.log("Go to history!");
        dispatch(setPage({
            currentPage: Page.stats,
        }))
    };

    return(
        <Modal
                open={game.isGameover}
            >
                <StyledCard>
                    <CardContent>
                        <Fade
                            in={game.isGameover}
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Typography 
                                    variant="h4"
                                    marginBottom={5}
                                >
                                    GAME OVER
                                </Typography>

                                {
                                    game.winner && 
                                    <Box>
                                        <Typography 
                                            variant='h4'
                                            marginBottom={5}
                                        >
                                            {
                                                `${game.winner.name} wins!`
                                            }
                                        </Typography>
                                    </Box>
                                }

                                {
                                    (!game.winner && game.isGameover) && 
                                    <Box>
                                        <Typography 
                                            variant='h4'
                                            marginBottom={5}
                                        >
                                            {
                                        `Draw!`
                                            }
                                        </Typography>
                                    </Box>
                                }

                                <Box
                                    display="flex"
                                    gap={3}
                                >

                                    <Button
                                        onClick={handleReset}
                                        variant='contained'
                                    >
                                        <IconButton>
                                            <RefreshIcon
                                            sx={{
                                                fontSize: 35
                                            }}
                                            />
                                        </IconButton>
                                    </Button>

                                    <Button
                                        onClick={handleHistory}
                                        variant='contained'
                                        color="secondary"
                                    >
                                        <IconButton>
                                            <HistoryIcon
                                            sx={{
                                                fontSize: 35
                                            }}
                                            />
                                        </IconButton>
                                    </Button>
                                </Box>
                            </Box>
                        </Fade>
                    </CardContent>
                </StyledCard>
            </Modal>
    )
}

export default CustomModal;