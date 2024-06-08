import { Game, StateInterface } from ".";
// import { saveStat } from "../../utils/db/asyncHelper";
// import { updateUser } from "../../utils/db/asyncHelper";
import { ActionType, ActionTypes } from "../actions";

function typingTestReducer(state: StateInterface, action: ActionType) {
    const { payload: { value }, type } = action;

    switch(type) {
        case ActionTypes.SET_CURRENT_STATS:
            {
                const { 
                    mistakes,
                    wpm,
                    maxWpm,
                    accuracy,
                    isGameover,
                } = value as Pick<Game, keyof Game>;
                const timestamp = Date.now();


                const currentGame = {
                    date: timestamp,
                    mistakes,
                    wpm,
                    maxWpm,
                    accuracy,
                };

                // if(isGameover) {
                // //     saveStat(currentGame as GameStat);

                //     return {
                //         ...state,
                //         game: {
                //             ...currentGame,
                //             isGameover,
                //         },
                //         stats: [...state.stats, currentGame],
                //     }
                // }

                return {
                    ...state,
                    game: {
                        ...currentGame,
                        isGameover,
                    },
            }
        }
        
        default:
            return state;
    }
}

export default typingTestReducer;