import { saveUserToDB, updateUserInDB } from ".";
import { User } from "../../state/reducers";


export async function saveUser(user: User) {
    await saveUserToDB(user);
}

export async function updateUser(user: User) {
    await updateUserInDB(user);
}