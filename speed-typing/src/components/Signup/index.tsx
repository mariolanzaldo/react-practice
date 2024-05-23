import { Avatar, Box, Button, Container, CssBaseline, Grid, Paper, TextField, Typography, Link } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useEffect } from "react";
import { INITIAL_FORM_STATE, INPUT_MAX_LENGTH, InitialStateFormInterface, PASSWORD_INPUT_MAX_LENGTH } from "../../utils/constants";
import useForm from "../../hooks/useForm";
import { validator } from "../../utils/validator";

function Signup () {

    const submitForm = (userInput: InitialStateFormInterface) => {
        // event.preventDefault();
        // handleSubmit(event);
        console.log('Submitted!', userInput);
    };

    const {
        state,
        handleChange,
        handleSubmit,
        handleBlur,
        // errors,
    } = useForm({
        initialState: INITIAL_FORM_STATE,
        callback: submitForm,
        validator,
    });

    // console.log("FINAL", errors);
    // console.log("FINAL", state);

    useEffect(() => {

    }, [state]);

    return(

        <Paper
            elevation={5}
        >
            <Container
                component="main"
                maxWidth="xs"
            >
                <CssBaseline />
                <Grid
                    container
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                    marginBottom={3}
                >
                    <Avatar
                        sx={{
                            bgcolor: "secondary.main"
                        }}                    >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h2">
                        Signup
                    </Typography>
                </Grid>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <Grid
                        container
                        spacing={2}
                        marginBottom={3}

                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField 
                                fullWidth
                                // required
                                name="username"
                                label="Username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={state.username.value}
                                error={state.username.error ?? false}
                                helperText={state.username.errorMessage}
                                inputProps={{
                                    maxLength: INPUT_MAX_LENGTH,
                                }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                // required
                                label="First name"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={state.firstName.value}
                                // error={!!(errors as GenericObject).firstName }
                                // helperText={(errors as GenericObject).firstName}
                                error={state.firstName.error ?? false}
                                helperText={state.firstName.errorMessage}
                                inputProps={{
                                    maxLength: INPUT_MAX_LENGTH,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                // required
                                label="Last name"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={state.lastName.value}
                                // error={!!(errors as GenericObject).lastName}
                                // helperText={(errors as GenericObject).lastName}
                                error={state.lastName.error ?? false}
                                helperText={state.lastName.errorMessage}
                                inputProps={{
                                    maxLength: INPUT_MAX_LENGTH,
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField 
                                fullWidth
                                // required
                                name="password"
                                label="Password"
                                type="password"
                                defaultValue={state.password.value}
                                // error={!!(errors as GenericObject).password}
                                // helperText={(errors as GenericObject).password}
                                error={state.password.error ?? false}
                                helperText={state.password.errorMessage}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    maxLength: PASSWORD_INPUT_MAX_LENGTH,
                                }}
                            
                            />

                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >

                            <TextField 
                                fullWidth
                                // required
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                defaultValue={state.confirmPassword.value}
                                // error={!!(errors as GenericObject).confirmPassword}
                                // helperText={(errors as GenericObject).confirmPassword}
                                error={state.confirmPassword.error ?? false}
                                helperText={state.confirmPassword.errorMessage}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    maxLength: PASSWORD_INPUT_MAX_LENGTH,
                                }}
                            
                            />

                        </Grid>

                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Signup
                    </Button>

                </Box>
                <Grid
                    container
                    marginTop={2}
                >
                    <Grid
                        // display="flex"
                        item
                    >
                        Already have an account?&nbsp;
                        <Link href="login">
                            Login
                            {/* <Link to="/login">
                            Login
                            </Link> */}
                        
                        </Link>

                    </Grid>

                </Grid>

            </Container>
        </Paper>
    );
}

export default Signup;