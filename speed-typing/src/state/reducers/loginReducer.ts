import { StateInterface, User } from ".";
import { ActionType, ActionTypes } from "../actions";
import bcrypt from "bcryptjs";

function loginReducer(state: StateInterface, action: ActionType) {
    const { payload: { value }, type } = action;
    // console.log(id);

    switch(type) {
            case ActionTypes.LOGIN: {
                let isLoggedIn = false;
                const foundUser = state.users.find((user) => user.username === (value as User).username);
                if(foundUser) {
                    isLoggedIn = bcrypt.compareSync((value as User).password, foundUser!.password);


                    if(isLoggedIn) {
                        return {
                            ...state,
                            currentUser: foundUser,
                            globalError: {
                                error: false,
                                errorMessage: "",
                            }
                        }
                    }
                    
                }
                
                return {
                    ...state,
                    currentUser: null,
                    globalError: {
                        error: true,
                        errorMessage: "Invalid username and/or password",
                    }
                }
            }

            case ActionTypes.LOGOUT: {
                localStorage.removeItem("typing-app");
                return {
                    ...state,
                    currentUser: null,
                }
            }

            case ActionTypes.CLEAN_NOTIFICATION: {
                return {
                    ...state,
                    globalError: {
                        error: false,
                        errorMessage: "",
                    }
                }
            }
        
        default:
            return state;
    }
}

export default loginReducer;