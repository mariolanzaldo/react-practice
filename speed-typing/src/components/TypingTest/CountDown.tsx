import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material";
import Timer from "../Timer";
import RestartButton from "../RestartButton";
import Results from "../Results";
import PureContent from "./Content";
import useTypingTest from "../../hooks/useTypingTest";
import CustomModal from "../CustomModal";
import { useAppContext } from "../../state";
import { memo } from "react";

interface CountDownProps {
    text: string;
    initialTime: number;
}

function CountDownC({ text, initialTime }: CountDownProps) {
    
        const [appState] = useAppContext();
       const { isBackspaceEnabled, paragraph, word, charIndex, time, inputRef, handleInput, handleDisableBackspace, handleRestart } = useTypingTest({text, initialTime});
        
       const ModalContent = (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <Grid
                    item
                    xs={12}
                    >
                        <Results 
                            errors={appState.game.mistakes!}
                            accuracyPercentage={appState.game.accuracy!}
                            wpm={appState.game.wpm!}
                            maxWpm = {appState.game.maxWpm!}
                            handleRestart={handleRestart}
                        />
    
            </Grid>
        </Grid>
       );

   return (
            <Grid
                container
                gap={0}
                marginTop={2}
            >
                <Grid
                    container
                    item
                    xs={12}
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                    marginBottom={-5}
                >
                    <Grid
                        item
                        xs={4}
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Timer time={time} />
                    </Grid>
    

                    <Grid
                        item
                        xs={4}
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FormGroup>
                            <FormControlLabel 
                            control={<Checkbox defaultChecked/>} 
                            // label={"Enable backspace"}
                            label={isBackspaceEnabled ? "Disable backspace" : "Enable backspace"}
                            onChange={handleDisableBackspace}
                            color="white" 
                            />
                        </FormGroup>
                    </Grid>
    
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField 
                        inputRef={inputRef}
                        type="text"
                        value={word}
                        autoFocus
                        onChange={handleInput}
                        variant="standard"
                    />
    
                    <PureContent 
                        charIndex={charIndex}
                        word={word}
                        paragraph={paragraph}
                        />
                </Grid>
    
                <Grid
                    item
                    xs={12}
                    display="flex"
                    alignContent="center"
                    alignItems="center"
                    alignSelf="center"
                    justifyContent="center"
                >
                    <RestartButton onRestart={handleRestart} />
                </Grid>
    
                <CustomModal open={appState.game.isGameover!}>
                    {ModalContent}    
                </CustomModal> 
    
            </Grid>
        );
}

const CountDown = memo(CountDownC)

export default CountDown;