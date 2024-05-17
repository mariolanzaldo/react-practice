import { Box, Button, Card, CardContent, FormControlLabel, FormGroup, Switch, TextField, Typography, styled } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { Page, Turn } from "../../state/reducer";
import { useAppContext } from "../../state";
import { setPage, startGame } from "../../state/actionTypes";


const StyledCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
}));

function Main() {
    // eslint-disable-next-line
    const [_, dispatch ] = useAppContext();
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
        </Button>
        </>
    );
}

export default Main;