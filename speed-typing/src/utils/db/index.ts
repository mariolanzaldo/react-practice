import { 
    GameStat,
    User 
} from "../../state/reducers";
import { DB_NAME, DB_VERSION, STORE_STATS, STORE_NAME } from "../constants";

let dbInstance: Promise<IDBDatabase> | null = null;

export function initDB (): Promise<IDBDatabase> {
    if(dbInstance) {
        return dbInstance;
    }

    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;

            if(!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true});
            }

            if(!db.objectStoreNames.contains(STORE_STATS)) {
                db.createObjectStore(STORE_STATS, { keyPath: 'id', autoIncrement: true});
            }
        }

        request.onsuccess = (event) => {
            dbInstance = Promise.resolve((event?.target as IDBOpenDBRequest).result);
            resolve(dbInstance);
        };

        request.onerror = () => reject(request.error);
    });
}

export function getDBInstance() {
    return dbInstance ? Promise.resolve(dbInstance) : initDB();
}

export  function saveUserToDB(user: User) {
    return  new Promise<void>((resolve, reject) => {
        getDBInstance().then(db => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);

            const request = store.add(user);

            request.onsuccess = () => {
                console.log("User saved successfully", user);
                resolve();
            };

            request.onerror = () => {
                console.error("Error saving user", request.error);
                reject(request.error);
            };
        }).catch(error => {
            console.error("Error in saveUserToDB", error);
            reject(error);
        });
    })
}

export function getUsersFromDB(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
        getDBInstance().then((db) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const userRequest = store.getAll();

            userRequest.onsuccess = () => {
                resolve(userRequest.result);
            };

            userRequest.onerror = () => {
                reject(userRequest.error);
            }

        }). catch(reject);
    })
}

export function updateUserInDB(user: User): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
        getDBInstance().then((db) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);

            const getRequest = store.get(user.id!);

            getRequest.onsuccess = () => {
                const existingUser = getRequest.result;

                if(existingUser) {
                    const updateRequest = store.put({
                        ...existingUser, ...user
                    });

                    updateRequest.onsuccess = () => {
                        console.log("User updated successfully", user);
                        resolve(existingUser.result);
                    };

                    updateRequest.onerror = () => {
                        console.error("Error updating user", updateRequest.error);
                        reject(updateRequest.error);
                    };
                } else {
                    reject(new Error("User not found"));
                }
            };

            getRequest.onerror = () => {
                console.error("Error fetching user", getRequest.error);
                reject(getRequest.error);
            };
        }).catch(error => {
            console.error("Error in updateUserInDB", error);
            reject(error);
        });
    });
}


export  function saveStatsToDB(stat: GameStat) {
    return  new Promise<void>((resolve, reject) => {
        getDBInstance().then(db => {
            const transaction = db.transaction([STORE_STATS], 'readwrite');
            const store = transaction.objectStore(STORE_STATS);

            const request = store.add(stat);

            request.onsuccess = () => {
                console.log("Stat saved successfully", stat);
                resolve();
            };

            request.onerror = () => {
                console.error("Error saving stat", request.error);
                reject(request.error);
            };
        }).catch(error => {
            console.error("Error in saveStatsToDB", error);
            reject(error);
        });
    })
}


export function getStatsFromDB(): Promise<GameStat[]> {
    return new Promise<GameStat[]>((resolve, reject) => {
        getDBInstance().then((db) => {
            const transaction = db.transaction([STORE_STATS], 'readonly');
            const store = transaction.objectStore(STORE_STATS);
            const userRequest = store.getAll();

            userRequest.onsuccess = () => {
                resolve(userRequest.result);
            };

            userRequest.onerror = () => {
                reject(userRequest.error);
            }

        }). catch(reject);
    })
}