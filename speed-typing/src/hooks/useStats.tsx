import { useEffect, useMemo, useState } from "react";
import { getStatsFromDB } from "../utils/db";
import { GameStat } from "../state/reducers";
import { useAppContext } from "../state";
import { setUserStats } from "../state/actions";

function useStats() {

    const [appState, dispatch] = useAppContext();
    const [stats, setStats] = useState<GameStat[]>([]);
    const { currentUser } = appState;


    useEffect(() => {
        const initializeStats = async () => {
            try {
                const statsDB = await getStatsFromDB();

                const userStats = statsDB.filter((stat) => stat.username ===  currentUser?.username);
                
                setStats(userStats ?? []);
            } catch(error) {
                console.error("Failed to  from DB", error);
            }
        }

        initializeStats();
    }, [currentUser?.username]);

    useEffect(() => {
        dispatch(setUserStats({ value: stats }));
    }, [stats, dispatch]);

    const data = useMemo(() => {

              const accArray: number[] = [];
              const dateArray: Date[] = [];
            const mistakesArray: number[] = [];
            const  wpmArray: number[] = [];
            const maxWpmArray: number[] = [];
        
            stats.forEach((element) => {
                accArray.push(element.accuracy);
                dateArray.push(new Date(element.date));
                mistakesArray.push(element.mistakes);
                wpmArray.push(element.wpm);
                maxWpmArray.push(element.maxWpm);
            });
        
            return {
                date: dateArray,
                accuracy: accArray,
                mistakes: mistakesArray,
                wpm: wpmArray,
                maxWpm: maxWpmArray,
        
            }
          }, [stats]);

    return {
        data,
    };
}

export default useStats;