import { isGameEnded } from "../utils/checkEndGame";
import { checkWinner } from "../utils/checkWinner";
import { ActionType, ActionTypes } from "./actionTypes";
import { StateInterface } from "./index";

// eslint-disable-next-line 
export enum Turn {
    X = '❌',
    O = '⚪'
}

export enum Page {
    main = "main",
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
    game: {
        board: Array(9).fill(null),
        turn: null,
        winner: null,
        isGameover: false,
        gameStart: null,
        gameEnd: null,
    },
    stats: [],
    currentPage: Page.main,
};

function appReducer(state: StateInterface, action: ActionType) {
    const { payload, type } = action;

    switch(type) {
        case ActionTypes.START_GAME: {
            const { players, currentPage } = payload!;
            const { game } = state;
            const timestamp = Date.now();
            console.log(game);

            return {
                ...state,
                game: {
                    board: [...game.board],
                    turn: {
                        ...players![0],
                    },
                    winner: null,
                    isGameover: false,
                    gameStart: timestamp,
                    gameEnd: null,
                },
                settings: {
                    player1: {...players![0]},
                    player2: {...players![1]},

                },
                currentPage: currentPage,
            };
        }

        case ActionTypes.UPDATE_BOARD: {
            const { boardIndex, turn } = payload!;
            const { game } = state;

            if(game.board[boardIndex! - 1] !== null) {
                return { ...state };
            }

            const newTiles = [...game.board];

            newTiles[boardIndex! - 1] = turn!.symbol;

            return {
                ...state,
                game: {
                    board: [...newTiles],
                    turn: {...state.game.turn},
                    winner: null,
                    isGameover: false,
                    gameStart: game.gameStart,
                    gameEnd: null,
                }

            }
        }

        case ActionTypes.UPDATE_TURN: {
            const { turn } = payload!;
            const { game } = state;
            const player1Ref = {...state.settings.player1}; 
            const player2Ref = {...state.settings.player2};

            let newTurn;

            if(turn?.name === player1Ref.name) {
                player1Ref.moves += 1;
                newTurn = {...player2Ref}
            }

            if(turn?.name === player2Ref.name) {
                player2Ref.moves += 1;

                newTurn = {...player1Ref}
            }

            return {
                ...state,
                settings: {
                    player1: {...player1Ref},
                    player2: {...player2Ref},
                },
                game: {
                    board: [...game.board],
                    turn: newTurn,
                    winner: null,
                    isGameover: false,
                    gameStart: game.gameStart,
                    gameEnd: null,
                },
            }
        }

        case ActionTypes.CHECK_GAMEOVER: {
            const { game, settings, stats } = state;

            const tiles = [...game.board];
            const gameEnd = Date.now();

            const timeDifference = Math.abs(gameEnd - game.gameStart!);

            const minutesDiff = Math.ceil(timeDifference / (1000 * 60));

            const winner = checkWinner([...tiles]);
            const endGame = isGameEnded([...tiles]);
            if(winner) {

                const players = Object.values(settings);

                let playerWinner; 
                for(const player of players) {
                    if(player.symbol === winner) {
                        playerWinner = {...player};
                    }
                }

                return {
                    ...state,
                    game: {
                        board: { ...game.board },
                        turn: {...game.turn},
                        winner: {...playerWinner},
                        isGameover: true,
                        gameStart: game.gameStart,
                        gameEnd,
                    },
                    stats: [
                        ...stats,
                        {
                            winner: {...playerWinner},
                            duration: minutesDiff,
                        }
                    ]
                }
            } else if (endGame) {

                return {
                    ...state,
                    game: {
                        board: { ...game.board },
                        turn: {...game.turn},
                        winner: null,
                        isGameover: true,
                        gameStart: game.gameStart,
                        gameEnd,
                    },
                    stats: [
                        ...stats,
                        {
                            winner: null,
                            duration: minutesDiff,
                        }
                    ]
                }
            }
            return {
                ...state,
            }
        }

        case ActionTypes.RESET_FROM_GAMEOVER: {
            const { stats } = state;

            return {
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
                game: {
                    board: Array(9).fill(null),
                    turn: null,
                    winner: null,
                    isGameover: false,
                },
                stats: [...stats],
                currentPage: Page.main,
            }
        }

        case ActionTypes.RESET_GAME: {
            return {
                ...state,
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
                game: {
                    board: Array(9).fill(null),
                    turn: null,
                    winner: null,
                    isGameover: false,
                    gameStart: null,
                    gameEnd: null,
                },
                currentPage: Page.main,
            }
        }

        case ActionTypes.SET_PAGE: {
            const { currentPage } = payload!; 
            return {
                ...state,
                currentPage,
            }
        }

        default:
            return state;
    }
}

export default appReducer;