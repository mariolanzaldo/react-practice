import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";
import { InitialStateProfileForm } from "../utils/constants";
import { useAppContext } from "../state";
export type GenericObject = { [key: string]: string };

interface useFormProps {
    initialState: InitialStateProfileForm;
    callback: (state: InitialStateProfileForm) => void;
    validator: (state: InitialStateProfileForm , fieldName: keyof InitialStateProfileForm, userExistence: boolean) => unknown;
}

function useProfileForm({ initialState, callback, validator }: useFormProps) {
    const [state, setState] = useState<InitialStateProfileForm>(initialState);
    const [isSubmited, setIsSubmited] = useState(false);

    const [appState ] = useAppContext();

    useEffect(() => {
        if(isSubmited) {
            let hasErrors = false;

            for(const key in state) {
                if(state[key as keyof InitialStateProfileForm]!.error) {
                    hasErrors = true;
                    break;
                }
            }

            if(!hasErrors) {
                callback(state);
            }
        }

    }, [isSubmited, state, callback]);

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
        
        const failFields = validator(state, fieldName as keyof InitialStateProfileForm, appState.userExistence);

        return setState((prevState) => ({
            ...prevState,
            ...failFields as object,
        })) 
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        for (const key in state) {
            if (state[key as keyof InitialStateProfileForm]!.value.trim() === "") {
                const emptyFields = validator(state, key as keyof InitialStateProfileForm, appState.userExistence);

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

export default useProfileForm;