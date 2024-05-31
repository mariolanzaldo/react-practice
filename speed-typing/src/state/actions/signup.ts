import { ActionType, ActionTypes, Value } from "../actions";


export const signup = ({ value }: { value: Value }): ActionType => ({
    type: ActionTypes.SIGN_UP,
    payload: { value },
});

// import { createAvatar } from "@dicebear/core";
// import { openPeeps } from "@dicebear/collection";
// import bcrypt from "bcryptjs";
// import { Dispatch } from "redux";
// import { ActionType, ActionTypes, Value } from "../actions";

// export const signup = ({ value }: { value: Value }) => async (dispatch: Dispatch<ActionType>) => {
//     const avatar = createAvatar(openPeeps, {
//         size: 1280,
//         flip: false,
//         accessoriesProbability: 20,
//         facialHairProbability: 30,
//         maskProbability: 2,
//     });

//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(value.password, salt);
//     const svg = avatar.toDataUriSync();

//     const newUser = {
//         ...value,
//         password: hashedPassword,
//         avatar: svg,
//     };

//     dispatch({
//         type: ActionTypes.SIGN_UP,
//         payload: { value: newUser }
//     });
// };