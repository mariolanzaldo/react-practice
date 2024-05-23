import { GenericFormField } from "../constants";


function validateUsername(field: GenericFormField, userExistence: boolean) {

    if(!field.value || field.value.trim() === "") {
        return {
            ...field,
            error: true,
            errorMessage: "Username is required",
        }
    }

    if(field.value[0] === " ") {
        return {
            ...field,
            error: true,
            errorMessage: "Cannot start with spaces"
        }
    }

    if(userExistence) {
        return {
            ...field,
            error: true,
            errorMessage: "Username already exists",
        }
    }

    return {
        ...field,
    }

}

export default validateUsername;