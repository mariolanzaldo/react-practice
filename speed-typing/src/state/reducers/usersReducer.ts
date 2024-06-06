import { StateInterface, User } from ".";
import { ActionType, ActionTypes } from "../actions";
// import { createAvatar } from "@dicebear/core";
// import { openPeeps } from "@dicebear/collection";
import bcrypt from "bcryptjs";
import { saveUser } from "../../utils/db/asyncHelper";

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
        default:
            return state;
    }

    return state;
}

export default usersReducer;