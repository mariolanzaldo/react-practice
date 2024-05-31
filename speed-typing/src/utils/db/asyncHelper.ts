import { saveUserToDB } from ".";
import { User } from "../../state/reducers";


export async function saveUser(user: User) {
    await saveUserToDB(user);
}