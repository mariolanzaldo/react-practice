import { Box, Button, Card, CardContent, FormControlLabel, FormGroup, Switch, TextField, Typography, styled } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { Page, Turn } from "../../state/reducer";
import { useAppContext } from "../../state";
import { setPage, startGame } from "../../state/actionTypes";

type PlayerInput = {
    value: string;
    error: boolean;
    errorMessage: string;
}

type InputFields = {
    player1: PlayerInput;
    player2: PlayerInput;
}

const StyledCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
}));

function Main() {
    // eslint-disable-next-line
    const [_, dispatch ] = useAppContext();
    const [inputFields, setInputfields] = useState<InputFields>({
        player1: {
            value: "",
            error: false,
            errorMessage: "Enter a valid player",
        },
        player2: {
            value: "",
            error: false,
            errorMessage: "Enter a valid player",
        }
    });
    // console.log(state);

    const [switchChecked, setSwitchChecked] = useState(false);

    const isFormValid = () => Object.values(inputFields).every((field) => field.value.trim() !== "");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setInputfields((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name as keyof InputFields],
                value,
                error: value.trim() === "",
            },
        }));
    };

    const handleSwitchChange = () => {
        setSwitchChecked(!switchChecked);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formFields = Object.keys(inputFields) as (keyof InputFields)[];
        let isValid = true;
        let newFormValues = { ...inputFields };

        formFields.forEach((field) => {
            const value = inputFields[field].value.trim();
            if (value === "") {
                isValid = false;
                newFormValues = {
                    ...newFormValues,
                    [field]: {
                        ...newFormValues[field],
                        error: true,
                    },
                };
            }
        });

        setInputfields(newFormValues);

        if (!isValid) return;

        dispatch(startGame({
            players: [
                {
                    name: inputFields.player1.value,
                    symbol: switchChecked ? Turn.X : Turn.O,
                    moves: 0,
                },
                {
                    name: inputFields.player2.value,
                    symbol: !switchChecked ? Turn.X : Turn.O,
                    moves: 0,
                },
            ],
            currentPage: Page.board,
        }));
    };

    const handleHistoryClick = () => {
        dispatch(setPage({
            currentPage: Page.stats,
        }));
    };

    return (
        <>
           <StyledCard
        >   
            <CardContent>
            <Typography component="h2">
                Create new game
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
            >   

                <Box>
                    <TextField 
                        name="player1"
                        type="text"
                        placeholder="Player 1"
                        onChange={handleChange}
                        margin="normal"
                        error={inputFields.player1.error}
                        helperText={inputFields.player1.error ? inputFields.player1.errorMessage : ""}
                        inputProps={{
                            maxLength: 25
                        }}
                    />
                </Box>

                <Box>
                    <TextField 
                        name="player2"
                        type="text"
                        placeholder="Player 2"
                        onChange={handleChange}
                        margin="normal"
                        error={inputFields.player2.error}
                        helperText={inputFields.player2.error ? inputFields.player2.errorMessage : ""}
                        inputProps={{
                            maxLength: 25
                        }}
                    />
                </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    mt={5}
                    mb={3}
                >
                    <Typography
                        component="h3"
                    >
                        Choose the icon for player 1
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            control = {
                                <Switch 
                                    checked={switchChecked}
                                    onChange={handleSwitchChange}
                                    inputProps={{ "aria-label": "controlled-switch"}}
                                    name="Switch"
                                    color={ switchChecked? "primary" : "default"}
                                    size="medium"
                                />
                            }
                            label={switchChecked ? Turn.X : Turn.O}
                        />
                    </FormGroup>
                </Box>

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={!isFormValid()}
                >
                    New Game
                </Button>

                
            </Box>
            </CardContent>
            
        </StyledCard>
        <Button
            variant="outlined"
            color="secondary"
            onClick={handleHistoryClick}
        >

            Go to history

          {/* <CustomLink href="stats">
            Go to history

          </CustomLink> */}
        </Button>
        </>
    );
}

export default Main;