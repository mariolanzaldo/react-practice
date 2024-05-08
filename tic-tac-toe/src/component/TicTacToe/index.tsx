import { useState } from 'react';
import Board from '../Board';
import Header from '../Header';


function TicTacToe() {
    const PLAYER_X = 'X';
    const PLAYER_O = 'O';
    
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    
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

        // const winningPositions = [
        //   [0, 1, 2], [3, 4, 5], [6, 7, 8],
        //   [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        //   [0, 4, 8], [2, 4, 6]             
        // ];
    
    return(
        <>
            <Header />
            <Board tiles={tiles} onTileClick={handleTileClick}/>
        </>

    );
}

export default TicTacToe;