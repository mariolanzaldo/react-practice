export interface GenericFormField {
    value: string;
    error: boolean;
    errorMessage: string;
}

export interface InitialStateFormInterface {
    username: GenericFormField;
    firstName:GenericFormField;
    lastName: GenericFormField;
    password: GenericFormField;
    confirmPassword: GenericFormField;
}

export const INPUT_MAX_LENGTH = 25;

export const PASSWORD_INPUT_MAX_LENGTH = 80;

export const INITIAL_FORM_STATE: InitialStateFormInterface = {
    username: {
        value: "",
        error: false,
        errorMessage: "",
    },
    firstName: {
        value: "",
        error: false,
        errorMessage: "",
    },
    lastName: {
        value: "",
        error: false,
        errorMessage: "",
    },
    password: {
        value: "",
        error: false,
        errorMessage: "",
    },
    confirmPassword: {
        value: "",
        error: false,
        errorMessage: "",
    }
};
