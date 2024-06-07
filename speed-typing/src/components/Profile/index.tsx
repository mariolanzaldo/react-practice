import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { INITIAL_STATE_PROFILE_FORM, INPUT_MAX_LENGTH, InitialStateProfileForm, PASSWORD_INPUT_MAX_LENGTH } from "../../utils/constants";
import { useAppContext } from "../../state";
import useRandomAvatar from "../../hooks/useRandomAvatar";
import { useNavigate } from "react-router-dom";
import { validator } from "../../utils/validator";
import useProfileForm from "../../hooks/useProfileForm";
import { updateUser } from "../../state/actions";
import { useCallback, useMemo } from "react";



function Profile() {

    const [appState, dispatch ] = useAppContext();
    const { currentUser } = appState;

    const navigate = useNavigate();
    const { avatar, handleRandomizeAvatar } = useRandomAvatar({ currentAvatar: currentUser?.avatar });

    const initialFormState = useMemo(() => ({
        ...INITIAL_STATE_PROFILE_FORM,
        firstName: {
            value: currentUser?.firstName as string,
            error: false,
            errorMessage: "",
        },
        lastName:  {
            value: currentUser?.lastName as string,
            error: false,
            errorMessage: "",
        },
    }), [currentUser]);

    const submitForm = useCallback((state: InitialStateProfileForm) => {
        const { password, firstName, lastName } = state;

        if(currentUser?.stats) {
            dispatch(updateUser({
                value: {
                    id: currentUser?.id,
                    username: currentUser?.username,
                    firstName: firstName.value,
                    lastName: lastName.value,
                    password: password.value,
                    avatar,
                    stats: [...currentUser.stats],
                }
            }));

            navigate('/test');
        }

        return;
    }, [dispatch, avatar, currentUser]);

    const {
        state,
        handleChange,
        handleSubmit,
        handleBlur,
    } = useProfileForm({
        initialState: initialFormState,
        callback: submitForm,
        validator,
    });

    return (
        <Grid
            container
            justifyContent="center"
                component="main"
                maxWidth="xs"
                marginBottom={2}
                // marginTop={2}
            >
                <Grid
                    container
                    item
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    // wrap="wrap"
                    
                    marginBottom={2}
                    marginTop={3}
                >
                     <Typography 
                        // component="h1"
                        variant="h3"
                    >
                        Profile
                    </Typography>
                </Grid>
                <Grid
                    container
                    item
                    component="form"
                    flexDirection="row"
                    justifyContent="center"
                    wrap="wrap"
                    gap={2}
                    xs={12}
                    onSubmit={handleSubmit}
                >
                    <Grid
                        container
                        item
                        xs={4}
                        justifyContent="center"
                        flexDirection="column"
                    >

                        <Grid
                            container
                            item
                            justifyContent="center"
                            alignContent="center"
                            alignItems="center"
                            marginBottom={2}
                        >
                            <Avatar 
                                src={`${avatar}`}
                                sx={{ width: 170, height: 170, background: "grey" }}
                            />
                        </Grid>

                        <Grid
                            container
                            item
                            justifyContent="center"
                        >       
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    onClick={handleRandomizeAvatar}
                                >
                                    Randomize Avatar
                                </Button>

                        </Grid>    
                    </Grid>
                    <Grid
                        container
                        item
                        spacing={2}
                        marginBottom={2}
                        marginRight={2}

                        // margin={1}
                        xs={6}

                    >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                // required
                                label="First name"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={currentUser?.firstName}
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
                                defaultValue={currentUser?.lastName}
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
                    <Grid
                        container
                        item
                        marginTop={5}
                        xs={3}
                    >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Save
                        </Button>

                    </Grid>
                </Grid>
            </Grid>
    ); 
}

export default Profile;

