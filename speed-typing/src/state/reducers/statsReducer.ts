import { Game, GameStat, StateInterface } from ".";
import { saveStat } from "../../utils/db/asyncHelper";
import { ActionType, ActionTypes } from "../actions";

function statsReducer(state: StateInterface, action: ActionType) {
    const { payload: { value }, type } = action;

    switch(type) {
            case ActionTypes.SAVE_STATS: {
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

                if(isGameover) {
                    saveStat(currentGame as GameStat);

                    return {
                        ...state,
                        game: {
                            ...currentGame,
                            isGameover,
                        },
                        stats: [...state.stats, currentGame],
                    }
                }

                return {
                    ...state,
                }
            }

        case ActionTypes.SET_USER_STATS: {
            if(Array.isArray(value) ) {
                
                return {
                    ...state,
                    stats: [...value],
                }
            }
            
            return {
                ...state,
            }
        }
        
        default:
            return state;
    }
}

export default statsReducer;