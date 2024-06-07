import { GenericObject } from '../../hooks/useForm';
import { InitialStateFormInterface, InitialStateProfileForm } from '../constants';
import validateNameField from './validateNameField';
import validatePassword from './validatePassword';
import validateUsername from './validateUsername';

export  function validator (state: InitialStateFormInterface | InitialStateProfileForm , fieldName: keyof InitialStateFormInterface, userExistence: boolean) {
    const errors: GenericObject = {};

    switch(fieldName) {
        case "username": {
            const newState = validateUsername((state as InitialStateFormInterface)[fieldName], userExistence);

            return {
                [fieldName]: {...newState}
            }
        }
        case "firstName":
            {
                const newState = validateNameField(state[fieldName]);
                
                return {
                    [fieldName]: {...newState},
                };  
            }

        case "lastName": {

                const newState = validateNameField(state[fieldName]);
                
                return {
                    [fieldName]: {...newState},
                };  

        }

        case "password": {
            const newState = validatePassword(state[fieldName], state["confirmPassword"]);
            
            return {
                ...newState
            };
        }

        case "confirmPassword": {
            const newState = validatePassword(state["password"], state[fieldName]);

            return {
                ...newState
            };
        }
        default: 
            return errors;
    }

}