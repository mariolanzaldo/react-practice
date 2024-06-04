import { Game, StateInterface } from ".";
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
                // console.log("REDUCER",maxWpm);

                const timestamp = Date.now();
                return {
                    ...state,
                    game: {
                        date: timestamp,
                        mistakes,
                        wpm,
                        maxWpm,
                        accuracy,
                        isGameover,
                    }
            }
        }
        // case ActionTypes.SET_MAXWPM:
        //     {   
        //         const {
        //             maxWpm,
        //         } = value as Pick<Game, keyof Game>;
        //         const {date, mistakes, wpm, accuracy, isGameover} = state.game;
        //         console.log("REDUCER", maxWpm);

        //         return {
        //             ...state,
        //             game: {
        //                 date, mistakes, wpm, accuracy, isGameover,
        //                 maxWpm,
        //             }
        //         }
        //     }
        default:
            return state;
    }
}

export default typingTestReducer;