import { getStatsFromDB, saveStatsToDB, saveUserToDB, updateUserInDB } from ".";
import { GameStat, User } from "../../state/reducers";


export async function saveUser(user: User) {
    await saveUserToDB(user);
}

export async function updateUser(user: User) {
    await updateUserInDB(user);
}

export async function saveStat(stat: GameStat) {
    await saveStatsToDB(stat);
} 

export async function getStats() {
    const stats = await getStatsFromDB();
    return stats;
} 