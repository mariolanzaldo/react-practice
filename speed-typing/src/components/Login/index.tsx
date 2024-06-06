import { Avatar, Button, Container, CssBaseline, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { INITIAL_LOGIN_FORM_STATE } from "../../utils/constants";
import { useAppContext } from "../../state";
import { ChangeEvent, useState, FocusEvent, FormEvent } from "react";
import { login } from "../../state/actions";

function Login() {
    const [state, setState] = useState(INITIAL_LOGIN_FORM_STATE);
    // eslint-disable-next-line
    const [appState, dispatch ] = useAppContext();
    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setState((prevState) => ({
            ...prevState,
            [event.target.name]: {
                value: event.target.value,
                error: false,
                errorMessage: "",
            }
        }));
    };

    const validateForm = () => {
        const { username, password } = state;

        if(username.value.trim() === "" && password.value.trim() === "") {
            setState((prevState) => (
                {
                        username: {
                            value: prevState.username.value,
                            error: true,
                            errorMessage: "Username field is empty",
                        },
                        password: {
                            value: prevState.password.value,
                            error: true,
                            errorMessage: "Password field is empty",
                        }
                }
            ));
        } else if(username.value.trim() === "" && password.value.trim() !== "") {
            setState((prevState) => (
                {
                    ...prevState,
                        username: {
                            value: prevState.username.value,
                            error: true,
                            errorMessage: "Username field is empty",
                        }
                }
            ));
        } else if(username.value.trim() !== "" && password.value.trim() === "") {
            setState((prevState) => (
                {
                    ...prevState,
                        password: {
                            value: prevState.password.value,
                            error: true,
                            errorMessage: "Password field is empty",
                        }
                }
            ));
        }
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        event.preventDefault();

        validateForm();
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        
        if(!state.username.error && !state.password.error && state.username.value !== "" && state.password.value !== "") {
            const {username, password } = state;
            
            dispatch(login({
                value:{
                    username: username.value,
                    password: password.value,
                }
            }));
            
        }
    };

    if(appState.currentUser ) navigate('/test');

    return (
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
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Avatar
                            sx={{
                                bgcolor: "secondary.main"
                            }}                    
                        >
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography
                            component="h1"
                            variant="h5"
                        >
                            Sign in
                        </Typography>

                    </Grid>

                    <Grid
                        container 
                        item
                        component="form"
                        onSubmit={handleSubmit}
                    >
                        <Grid
                            item
                            xs={12}
                            marginBottom={3}
                        >
                            <TextField 
                                fullWidth
                                name="username"
                                type="text"
                                placeholder="username123"
                                label="Username"
                                defaultValue={state.username.value}
                                error={state.username.error ?? false}
                                helperText={state.username.errorMessage}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    maxLength: 25
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            marginBottom={3}

                        >
                            <TextField 
                                fullWidth
                                name="password"
                                type="password"
                                placeholder="Password"
                                label="Password"
                                defaultValue={state.password.value}
                                error={state.password.error ?? false}
                                helperText={state.password.errorMessage}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    maxLength: 25
                                }}
                            />
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                        >
                            Login
                        </Button>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        marginTop={3}
                    >

                        <Typography
                            fontSize="sm"
                        >
                            Don't have an account?&nbsp; 
                            <Link component={RouterLink} to="/signup">
                                Sign up
                            </Link>
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
            
        </Paper>
    );
}

export default Login;