import { useEffect, useState, lazy } from "react";
// import ListElement from "./ListElement";
import { Suspense } from "react";
// import { useQuery } from "../hooks/useQuery";
import delay from "../utils/delayFn";
import * as styles from "./styles.module.css";


//"vite-plugin-sass-dts"
// if (true) {
//This is the way of triggering suspense
const ListElement = lazy(async () => {
    await delay(2000);
    return import("./ListElement")
});

// }

function List() {

    // const URL = "/data.son";
    // const [state] = useQuery([], URL);
    // const { isLoading, data } = state;
    const [data, setData] = useState([]);
    const [loadingState, setLoadingState] = useState({
        isLoading: false,
        isError: false,
    });

    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch('/data.json');

            if (response.ok) {
                const data = await response.json();
                setLoadingState({
                    isLoading: false,
                    isError: false,
                });
                setData(data);

            } else {
                setLoadingState({
                    isLoading: false,
                    isError: true,
                });
            }
        };

        setLoadingState({
            isLoading: true,
            isError: false,
        });

        setTimeout(fetchData, 3000);

    }, []);
    return (
        <ul
            className={styles.list}
        >
            <Suspense fallback={<h3>Waiting...</h3>}>
                {/* {
                loadingState.isLoading ? <div>Loading...</div> : (loadingState.isError && !loadingState.isLoading) ? <div>Something went wrong</div> : null
            } */}
                {
                    !loadingState.isLoading ?
                        data.map((element) => <ListElement {...element} key={element.id} />) :
                        <h3>Loading...</h3>
                }
            </Suspense>
        </ul>
    );
}

export default List;

//TODO: Add another jsonList that displays extra information about that item, when the user clicks it should be able to navigate.
//TODO: Add a way to get back. Preserve the state from the context and avoid a new fetch
//TODO: Create a custom hook to fetch the data
//TODO: Make use of suspense to put loading or something went wrong accordingly