import { ActionType, ActionTypes } from "./actionTypes";
import { StateInterface } from "./index";

// eslint-disable-next-line 
export enum Turn {
    X = '❌',
    O = '⚪'
}

export enum Page {
    newGame = "newGame",
    board = "board",
    stats = "stats",
}

export const initialState: StateInterface = {
    settings: {
        player1: {
            name: "",
            symbol: Turn.O,
            moves: 0,
        },
    
        player2: {
            name: "",
            symbol: Turn.X,
            moves: 0,
        },
    },
    board: Array(9).fill(null),
    stats: [],
    currentPage: Page.newGame,
};

function appReducer(state: StateInterface, action: ActionType) {
    const { payload, type } = action;

    switch(type) {
        case ActionTypes.START_GAME: {
            const { players, currentPage } = payload;

            const newPlayer1 = {
                player1: {...players![0]}
            };

            const newPlayer2 = {
                player2: {...players![1]}
            };

            return {
                ...state,
                player1: {...newPlayer1},
                player2: {...newPlayer2},
                currentPage: currentPage,
            };
        }

        default:
            return state;
    }
}

export default appReducer;