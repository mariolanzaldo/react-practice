import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";
import { InitialStateFormInterface } from "../utils/constants";
import { useAppContext } from "../state";
import { usernameExistence } from "../state/actions";
export type GenericObject = { [key: string]: string };

interface useFormProps {
    initialState: InitialStateFormInterface;
    callback: (state: InitialStateFormInterface) => void;
    validator: (state: InitialStateFormInterface , fieldName: keyof InitialStateFormInterface, userExistence: boolean) => unknown;
}

function useForm({ initialState, callback, validator }: useFormProps) {
    const [state, setState] = useState<InitialStateFormInterface>(initialState);
    const [isSubmited, setIsSubmited] = useState(false);

    const [appState, dispatch ] = useAppContext();

    useEffect(() => {
        if(isSubmited) {
            let hasErrors = false;

            for(const key in state) {
                if(state[key as keyof InitialStateFormInterface]!.error) {
                    hasErrors = true;
                    break;
                }
            }

            if(!hasErrors) {
                callback(state);
            }
        }

    }, [isSubmited, state, callback]);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            dispatch(usernameExistence({
                value: state.username.value,
            }))
        }, 400);

        return () => clearTimeout(delayDebounce);
    }, [state.username.value, dispatch]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const { name, value } = event.target;

        setState(() => ({
            ...state,
            [name]: {
                value,
                error: false,
                errorMessage: "",
            }
        }));
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        event.preventDefault();

        const { name: fieldName } = event.target;
        
        const failFields = validator(state, fieldName as keyof InitialStateFormInterface, appState.userExistence);

        return setState((prevState) => ({
            ...prevState,
            ...failFields as object,
        })) 
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        for (const key in state) {
            if (state[key as keyof InitialStateFormInterface]!.value.trim() === "") {
                const emptyFields = validator(state, key as keyof InitialStateFormInterface, appState.userExistence);

                setState((prevState) => ({
                    ...prevState,
                    ...emptyFields as object,
                })) 
            }
        }

        setIsSubmited(true);
    };

    return {
        state,
        handleChange,
        handleSubmit,
        handleBlur,
    }
}

export default useForm;