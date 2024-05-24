import { StateInterface } from ".";
import { ActionType, ActionTypes } from "../actions";
import { createAvatar } from "@dicebear/core";
import { openPeeps } from "@dicebear/collection";
import bcrypt from "bcryptjs";

function usersReducer(state: StateInterface, action: ActionType) {
    const { payload: { value }, type } = action;
    // console.log(id);

    switch(type) {
        case ActionTypes.SIGN_UP:
            {
                const avatar = createAvatar(openPeeps, {
                    
                    size: 1280,
                    flip: false,
                    accessoriesProbability: 20,
                    facialHairProbability: 30,
                    maskProbability: 2,

                });

                if(typeof value === "object") {
                    const salt = bcrypt.genSaltSync(10);

                    const hashedPassword = bcrypt.hashSync(value.password, salt);
    
                    const svg = avatar.toDataUriSync();
    
                    return{
                        ...state,
                        users: [
                            ...state.users,
                            {
                                ...value as object,
                                password: hashedPassword,
                                avatar: svg,
                                
                            }
                        ]
                    }
                }
                break;
            }
        default:
            return state;
    }
}

export default usersReducer;