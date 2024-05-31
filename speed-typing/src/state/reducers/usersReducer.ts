import { StateInterface } from ".";
import { ActionType, ActionTypes } from "../actions";
import { createAvatar } from "@dicebear/core";
import { openPeeps } from "@dicebear/collection";
import bcrypt from "bcryptjs";
import { saveUser } from "../../utils/db/asyncHelper";

function usersReducer(state: StateInterface, action: ActionType): StateInterface {
    const { payload: { value }, type } = action;

    switch (type) {
        case ActionTypes.SIGN_UP:
            {
                if (typeof value === "object") {

                    const avatar = createAvatar(openPeeps, {
                                size: 1280,
                                flip: false,
                                accessoriesProbability: 20,
                                facialHairProbability: 30,
                                maskProbability: 2,
                            });

                            
                            const salt = bcrypt.genSaltSync(10);
                            const hashedPassword = bcrypt.hashSync(value.password, salt);
                            const svg = avatar.toDataUriSync();
                            saveUser({
                                ...value,
                                password: hashedPassword,
                                avatar: svg,
                            });

                    return {
                        ...state,
                        users: [
                            ...state.users,
                            {
                                ...value,
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

    return state;
}

export default usersReducer;
// export default usersReducer;