import { useEffect, useState } from "react";
// import { Page, StateInterface, initialState } from "../state/reducers";
import { getUsersFromDB } from "../utils/db";
import { Page, StateInterface, initialState } from "../state/reducers";

function useInitializeState () {

    const [state, setState] = useState<StateInterface | null> (null);
    const [isDBInitialized, setDBInitialized] = useState(false);
    // let value;
    useEffect(() => {

    const currentUser = JSON.parse(localStorage.getItem("typing-app")!);

        const initializeState = async () => {
            try {
                // await initDB();
                const usersDB = await getUsersFromDB();
                const stateFromDB: StateInterface = {
                    users: usersDB ?? [],
                    game: {
                        date: null,
                        mistakes: 0,
                        wpm: 0,
                        maxWpm: 0,
                        accuracy: 0,
                        isGameover: false,
                    },
                    userExistence: false,
                    currentUser,
                    currentPage: Page.login,
                    globalError: {
                        error: false,
                        errorMessage: "",
                    },
                };

                // console.log("HOOK", usersDB)
                setState(stateFromDB.users.length > 0 ? stateFromDB : initialState);
                setDBInitialized(true);
            } catch (error) {
                console.error("Failed to initialize state from DB", error);
                // setState(initialState);
                setDBInitialized(false);
            }
        };

        initializeState();
    }, []);

    return  { state, isDBInitialized };
}

export default useInitializeState;