import { Box, Button, FormControlLabel, FormGroup, Paper, Switch, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { Page, Turn } from "../../state/reducer";
import { useAppContext } from "../../state";
import { startGame } from "../../state/actionTypes";

function Settings() {

    // eslint-disable-next-line
    const [state, dispatch ] = useAppContext();
    const [inputFields, setInputfields] = useState({
        player1: "",
        player2: "",
    });

    const [switchChecked, setSwitchChecked] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputfields((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSwitchChange = () => {
        setSwitchChecked(!switchChecked);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(startGame({
            players: [
                {
                    name: inputFields.player1,
                    symbol: switchChecked ? Turn.X : Turn.O,
                    moves: 0,
                },
                {
                    name: inputFields.player2,
                    symbol: !switchChecked ? Turn.X : Turn.O,
                    moves: 0,
        
                },
            ],
            currentPage: Page.board,
        }));
    };

    return (
        <Paper>
            <Typography component="h2">
                Create new game
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    name="player1"
                    type="text"
                    placeholder="Player 1"
                    onChange={handleChange}
                />
                <TextField 
                    name="player2"
                    type="text"
                    placeholder="Player 2"
                    onChange={handleChange}
                />

                <Box>
                    <FormGroup>
                        <FormControlLabel
                            control = {
                                <Switch 
                                    checked={switchChecked}
                                    onChange={handleSwitchChange}
                                    inputProps={{ "aria-label": "controlled-switch"}}
                                    name="Switch"
                                    color={ switchChecked? "secondary" : "default"}
                                    size="medium"
                                />
                            }
                            label={switchChecked ? Turn.X : Turn.O}
                        />
                    </FormGroup>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                >
                    New Game
                </Button>
            </Box>
        </Paper>
    );
}

export default Settings;