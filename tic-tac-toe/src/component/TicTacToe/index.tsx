import { useState } from 'react';
import Board from '../Board';
import Header from '../Header';
import { useAppContext } from '../../state';

//TODO: Put  different routes to select the player, another for the player and another one to the history game
function TicTacToe() {
    const PLAYER_X = 'X';
    const PLAYER_O = 'O';
    
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

    // const [turn, setTurn] = useState(() => {
    //     const turnFromStorage = window.localStorage.getItem('turn');

    //     return turnFromStorage ?? TURNS.X;
    // });
    // eslint-disable-next-line
    const [state, dispatch ] = useAppContext();
    console.log(state);
    
    const handleTileClick = function (index: number) {
        if(tiles[index - 1] !== null) {
            return;
        }

        const newTiles = [...tiles];
        newTiles[index - 1] = playerTurn;

        setTiles(newTiles);
        if(playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        }  else {
            setPlayerTurn(PLAYER_X);
        }
    };
    
    return(
        <>
            <Header />
            <Board tiles={tiles} onTileClick={handleTileClick}/>
        </>

    );
}

export default TicTacToe;