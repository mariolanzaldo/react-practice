import { createContext, useContext, useReducer } from "react";

const counterContext = createContext(null);

export function useCounterContext() {
    return useContext(counterContext);
}

//It will  return the new state
function counterReducer(state, { payload: { id, value } }) {

    if (state.length && id < state.length) {
        const newState = [...state];
        newState[id] = value;
        return newState;
    }

    return state;

}

export function CounterProvider({ children }) {


    const [providerState, dispatchState] = useReducer(counterReducer, [1, 2, 3]);


    //TODO: Add validation to this function
    const setIndexedState = function (id, value) {
        // const newState = [...providerState];
        // newState[index] = value;

        // setProviderState(newState);
        dispatchState({ type: 'increment', payload: { id, value } });

    }

    return (
        <counterContext.Provider value={[providerState, setIndexedState]}>
            {children}
        </counterContext.Provider>
    );
}