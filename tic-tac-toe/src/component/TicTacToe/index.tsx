import Board from '../Board';
import Header from '../Header';
import { useAppContext } from '../../state';
import { checkGameover, resetFromGameover, resetGame, setPage, updateBoard, updateTurn } from '../../state/actionTypes';
import { Button, Box, Typography, IconButton } from '@mui/material';
import CustomModal from '../CustomModal';
import TurnCard from '../TurnCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import HistoryIcon from '@mui/icons-material/History';
import { Page } from '../../state/reducer';

function TicTacToe() {
    // eslint-disable-next-line
    const [state, dispatch ] = useAppContext();
    const { game } = state;

    const handleResetFromModal = function () {
        dispatch(resetFromGameover());
    };

    const handleHistory = function () {
        dispatch(setPage({
            currentPage: Page.stats,
        }))
    };

    const ModalContent =  (
        <>
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
                    onClick={handleResetFromModal}
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
        </>
    );
    
    const handleTileClick = function (index: number) {

        dispatch(updateBoard({
            turn: {
                ...game.turn!
            }, 
            boardIndex: index,
        }));

        dispatch(updateTurn({
            turn: {
                ...game.turn!,
            }
        }));

        dispatch(checkGameover());
    };

    const handleReset = function () {
        dispatch(resetGame());
    }
    
    return(
        <>
            <Header />
            <TurnCard turn={game.turn}></TurnCard>
            < Board
                tiles={game.board}
                onTileClick={handleTileClick}
            />
            <br />
            <Button
                onClick={handleReset}
            >
                Reset game
            </Button>

            <CustomModal open={game.isGameover}>
                {ModalContent}    
            </CustomModal> 
        </>

    );
}

export default TicTacToe;