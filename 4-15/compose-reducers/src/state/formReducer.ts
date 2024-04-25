import { FormActionType, FormActionTypes } from "./actions/actionTypes";

interface FormStateInterface {
    name: string;
    phone: string;
    isValidName: boolean;
    isValidPhone: boolean;
}

export const initialFormState: FormStateInterface = {
    name: "",
    phone: "",
    isValidName: false,
    isValidPhone: false,
}

function formReducer(state: FormStateInterface, action: FormActionType): FormStateInterface {
    switch(action.type) {
        case FormActionTypes.SET_NAME:
            return { 
                ...state, 
                name: action.payload as string,
                isValidName: validateName(action.payload!),
             };
        case FormActionTypes.SET_PHONE:
            return { 
                ...state, 
                phone: action.payload  as string,
                isValidPhone: validatePhone(action.payload!),

            };
        case FormActionTypes.RESET_FORM:
            return initialFormState;
        default: 
            return state;
    }

}

const validateName = (name: string): boolean => {
    const nameRegex = /^[A-Za-z\s\-']+$/;
    const isValid = nameRegex.test(name);
    // setIsNameValid(isValid);
    return isValid;
};

const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{8}$/;
    const isValid = phoneRegex.test(phone);
    // setIsPhoneValid(isValid);
    return isValid;
};

export default formReducer;