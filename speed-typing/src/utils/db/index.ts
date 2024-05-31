import { 
    User 
} from "../../state/reducers";
import { DB_NAME, DB_VERSION, STORE_CURRUSER, STORE_NAME } from "../constants";

let dbInstance: Promise<IDBDatabase> | null = null;

export function initDB (): Promise<IDBDatabase> {
    if(dbInstance) {
        return dbInstance;
    }

    return new Promise((res, rej) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;

            if(!db.objectStoreNames.contains(STORE_NAME)) {
                const appStore = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true});

                appStore.createIndex('users', 'users', { unique: false});
                appStore.createIndex('currentUser', 'currentUser', { unique: false });
            }

            if(!db.objectStoreNames.contains(STORE_CURRUSER)) {
                db.createObjectStore(STORE_CURRUSER, { keyPath: 'id', autoIncrement: true});
            }
        }

        request.onsuccess = (event) => {
            dbInstance = Promise.resolve((event?.target as IDBOpenDBRequest).result);
            res(dbInstance);
        };

        request.onerror = () => rej(request.error);
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

// export function setCurrentUser(): Promise<User | null> {
//     return new Promise<User | null>((resolve, reject) => {
        
//         try{
            
//             const transaction = dbInstance?.transaction([STORE_CURRUSER], 'readwrite');
//             const store = transaction?.objectStore(STORE_CURRUSER);
    
//             const currentUser = store?.getAll();
//             console.log("")
//         } catch (error) {
//             console.error('Something went wrong', error);
//         }
        
//     })
// }

// export function getCurrentUserFromDB(): Promise<User | undefined> {
//     // eslint-disable-next-line no-async-promise-executor
//     return new Promise<User | undefined>(async (resolve, reject) =>{
//         const request = indexedDB.open(DB_NAME, DB_VERSION);
//         console.error(reject);

//         request.onsuccess = () => {
//             const db = request.result;
//             const tx = db.transaction([STORE_NAME], 'readwrite');
//             const store = tx.objectStore(STORE_NAME);
//             const currentUserIndex = store.index('currentUser');

//             const data = currentUserIndex.getAll();
//             console.log(data);
//             resolve(data.result[0]);
//           };
//     })
// }