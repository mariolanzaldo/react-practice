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

export interface InitialStateProfileForm {
    firstName:GenericFormField;
    lastName: GenericFormField;
    password: GenericFormField;
    confirmPassword: GenericFormField;
}

export interface InitialLoginFormInterface {
    username: GenericFormField;
    password: GenericFormField;
}

export const INPUT_MAX_LENGTH = 25;

export const PASSWORD_INPUT_MAX_LENGTH = 80;

export const INITIAL_LOGIN_FORM_STATE: InitialLoginFormInterface = {
    username: {
        value: "",
        error: false,
        errorMessage: "",
    },
    password: {
        value: "",
        error: false,
        errorMessage: "",
    }
};

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

export const INITIAL_STATE_PROFILE_FORM: InitialStateProfileForm = {
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


export const DB_NAME = "SpeedTypingAppDB";
export const DB_VERSION = 1;
export const STORE_NAME = "users";
export const STORE_STATS="stats";

//Avatars
export const SEED = [
    "Maggie",
    "Oliver",
    "Molly",
    "Simon",
    "Charlie",
    "Missy",
    "Abby",
    "Tinkerbell",
    "Loki",
    "Ginger",
    "Snickers",
    "Midnight",
    "Sadie",
    "Buddy",
    "Princess",
    "Max",
    "Jack",
    "Shadow",
    "Lilly",
    "Gracie",
    "Felix",
    "Aneka",
];

//Game params
export const PARAGRAPH = 3;
export const TIME = 10;


//Stats

export interface Column {
    id: 'date' | 'mistakes' | 'wpm' | 'maxWpm' | 'accuracy';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }

  export const columns: readonly Column[] = [
    { 
      id: 'date', 
      label: 'Date', 
      minWidth: 80 
  },
    { 
      id: 'mistakes', 
      label: 'Mistakes', 
      minWidth: 80
  },
    {
      id: 'wpm',
      label: 'WPM',
      minWidth: 80,
      align: 'right',
    },
    {
      id: 'maxWpm',
      label: 'maxWPM',
      minWidth: 80,
      align: 'right',
    },
    {
      id: 'accuracy',
      label: 'Accuracy',
      minWidth: 80,
      align: 'right',
    },
  ];