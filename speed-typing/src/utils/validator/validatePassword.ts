import validate from 'validator';
// import { GenericObject } from '../../hooks/useForm';
import { GenericFormField } from '../constants';

// function validateConfirmPassword(password: string, confirmPassword: string, errors: GenericObject) {
//     let isValid = true;
//     if(!confirmPassword) {
//         isValid = false;

//         errors.confirmPassword = "Confirm password required";
//     } else if (password !== confirmPassword) {
//         isValid = false;

//         errors.confirmPassword = "Password and confirm password are different";
//         errors.password = "Password and confirm password are different";

//     }
//     return isValid;
// }

// function validatePassword(password: string, confirmPassword: string, errors: GenericObject): boolean {
//     let isValid = false;

//     console.log(confirmPassword.trim() === "");
//     const valid = validate.isStrongPassword(password, {
//         minLength: 8,
//         minLowercase: 1,
//         minUppercase: 1,
//         minNumbers: 1,
//         minSymbols: 1,
//         returnScore: true,
//         pointsPerUnique: 1,
//         pointsPerRepeat: 0.5,
//         pointsForContainingLower: 10,
//         pointsForContainingUpper: 10,
//         pointsForContainingNumber: 10,
//         pointsForContainingSymbol: 10,
//     });

//     if(!password) {
//         isValid = false;

//         errors.password = "Password required";
//     } else if (valid < 50) {
//         isValid = false;

//         errors.password = "Password must contain at least a number, a capital letter, and special character";
//     }
//     // else if (password && valid > 50 && confirmPassword.trim() !== "") {
//         else if (password && valid > 50) {
//         validateConfirmPassword(password, confirmPassword, errors);
//     }

//     return isValid;
// }

// export default validatePassword;

function validateConfirmPassword(passwordfield: GenericFormField, confirmPasswordfield: GenericFormField) {
    if(confirmPasswordfield.value.trim() === "" || !confirmPasswordfield.value) {

        return {
            confirmPassword: {
                ...confirmPasswordfield,
                error: true,
                errorMessage: "Confirm password is required",

            }
        }
    } else if (passwordfield.value !== confirmPasswordfield.value) {


        return {
            password: {
                ...passwordfield,
                error: true,
                errorMessage: "Password and confirm password are different",
            }, 
            confirmPassword: {
                ...confirmPasswordfield,
                error: true,
                errorMessage: "Password and confirm password are different",
            },
            
        }
    }

    return {
        password: {
            ...passwordfield,
            error: false,
            errorMessage: "",

        },
        confirmPassword: {
            ...confirmPasswordfield,
            error: false,
            errorMessage: "",
        }
    }
}

function validatePassword(passwordfield: GenericFormField, confirmPasswordfield: GenericFormField) {
    // const { password, confirmPassword } = state;
    
    const valid = validate.isStrongPassword(passwordfield.value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: true,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
    });

    if(!passwordfield.value && !confirmPasswordfield.value) {
        let errors = {};
        if(!passwordfield.value) {
            errors = {
                ...errors,
                password: {
                    ...passwordfield,
                    error: true,
                    errorMessage: "Password is required",
    
                }
            }
        }

        if(!confirmPasswordfield.value) {
            errors = {
                ...errors,
                confirmPassword: {
                    ...confirmPasswordfield,
                    error: true,
                    errorMessage: "Confirm password is required",
    
                }
            }
        }

        return errors;
    } if (valid < 50) {
        // isValid = false;

        return {
            password: {
                ...passwordfield,
                error: true,
                errorMessage:"Password must contain at least a number, a capital letter, and special character",
            }
        }
    }
        else if (passwordfield.value && valid > 50 && passwordfield.value.trim() !== "") {
        const output = validateConfirmPassword(passwordfield, confirmPasswordfield);
        return {
            ...output
        }
    }

}

export default validatePassword;