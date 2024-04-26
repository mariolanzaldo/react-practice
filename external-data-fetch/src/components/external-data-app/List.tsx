import { ReactElement, useEffect, useState } from "react";
import ListElement from "./ListElement";

export  interface MainDataInterface {
    id: string;
    title: string;
    content: string;
}

function List(): ReactElement {

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
                data.map((element: MainDataInterface) => <ListElement {...element} key={element.id} />)
            }
        </ul>
    );
}

export default List;