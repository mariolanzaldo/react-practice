import { useEffect, useState } from "react";
import ListElement from "./ListElement";

function List() {

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
            // setLoadingState({
            //     isLoading: Boolean(data),
            //     isError: true,
            // });

            // console.log(data);
        };

        setLoadingState({
            isLoading: true,
            isError: false,
        });

        setTimeout(fetchData, 3000);

    }, []);
    return (
        <ul>
            {
                loadingState.isLoading ? <div>Loading...</div> : (loadingState.isError && !loadingState.isLoading) ? <div>Something went wrong</div> : null
            }
            {
                data.map((element) => <ListElement {...element} key={element.id} />)
            }
        </ul>
    );
}

export default List;

//TODO: Add another jsonList that displays extra information about that item, when the user clicks it should be able to navigate.
//TODO: Add a way to get back. Preserve the state from the context and avoid a new fetch
//TODO: Create a custom hook to fetch the data
//TODO: Make use of suspense to put loading or something went wrong accordingly