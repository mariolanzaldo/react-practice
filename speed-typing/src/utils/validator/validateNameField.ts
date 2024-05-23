
import { GenericFormField } from "../constants";

function validateNameField(field: GenericFormField) {

    if(!field.value || field.value.trim() === "") {

        return {
            ...field,
            error: true,
            errorMessage: "Name required",
        }
    }
    return {...field};
}

export default validateNameField;