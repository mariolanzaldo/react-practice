import { StateInterface, User } from ".";
import { ActionType, ActionTypes } from "../actions";
import bcrypt from "bcryptjs";
import { saveUser, updateUser } from "../../utils/db/asyncHelper";

function usersReducer(state: StateInterface, action: ActionType): StateInterface {
    const { payload: { value }, type } = action;

    switch (type) {
        case ActionTypes.SIGN_UP:
            {
                if (typeof value === "object") {

                            
                            const salt = bcrypt.genSaltSync(10);
                            const hashedPassword = bcrypt.hashSync((value as User).password, salt);
                            saveUser({
                                ...value,
                                password: hashedPassword,
                            });

                    return {
                        ...state,
                        users: [
                            ...state.users,
                            {
                                ...value,
                                password: hashedPassword,
                            }
                        ]
                    }
                }
                break;
            }

            case ActionTypes.UPDATE_USER: 
            {
                if(typeof value === "object") {
                    
                    const salt = bcrypt.genSaltSync(10);
                    const hashedPassword = bcrypt.hashSync((value as User).password, salt);
                    localStorage.removeItem("typing-app");    
    
                    updateUser({
                        ...value,
                        password: hashedPassword,
                    });
    
                    return {
                        ...state,
                        currentUser: {
                            ...value,
                            password: hashedPassword,
                        }, 
                        users: [
                            ...state.users,
                            {
                                ...value,
                                password: hashedPassword,
                            }
                        ]
                    }
                }
    
                break;
            }
        default:
            return state;
    }

    return state;
}

export default usersReducer;