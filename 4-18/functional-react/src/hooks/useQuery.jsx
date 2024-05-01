import { useEffect, useState } from "react";

export function useQuery(initialData, url) {
    const initialState = { isLoding: false, isError: false, data: initialData };
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {


            const response = await fetch(url);

            if (response.ok) {
                const json = await response.json();
                setState({
                    ...state,
                    isLoading: false,
                    data: json,
                })
            } else {
                setState({
                    ...state,
                    isLoading: false,
                    isError: true,
                })
            }
        }
        fetchData();

    }, [])
    return [state, setState];
}