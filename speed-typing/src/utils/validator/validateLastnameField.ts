import { GenericObject } from "../../hooks/useForm";

function validateLastNameField(lastName: string, errors: GenericObject): boolean {
    let isValid = true;

    if(!lastName || lastName.trim() === "") {
        isValid = false;
        errors.lastName = "Invalid input";
    }

    return isValid;
}

export default validateLastNameField;