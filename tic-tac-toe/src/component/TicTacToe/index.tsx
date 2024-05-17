import Board from '../Board';
import Header from '../Header';
import { useAppContext } from '../../state';
import { checkGameover, resetGame, updateBoard, updateTurn } from '../../state/actionTypes';
import { Button} from '@mui/material';
import CustomModal from '../CustomModal';
import TurnCard from '../TurnCard';

function TicTacToe() {
    // eslint-disable-next-line
    const [state, dispatch ] = useAppContext();
    const { game } = state;
    
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

            <CustomModal /> 
        </>

    );
}

export default TicTacToe;