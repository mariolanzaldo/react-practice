import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material";
import wordGenerator from "../../utils/wordGenerator";
import Timer from "../Timer";
import RestartButton from "../RestartButton";
import Results from "../Results";
import PureContent from "./Content";
import usetypingTest from "../../hooks/useTypeingTest";
import CustomModal from "../CustomModal";
import { useAppContext } from "../../state";
import { PARAGRAPH } from "../../utils/constants";

function TypingTest() {
    //TODO: Change this
    // const text = wordGenerator(80);
    const text = wordGenerator(PARAGRAPH);

    // eslint-disable-next-line
    const [appState, dispatch] = useAppContext();


   const { paragraph, word, charIndex, time, inputRef, handleInput, handleDisableBackspace, handleRestart } = usetypingTest(text);

   const ModalContent = (
    <Grid
        container
        direction="column"
        alignItems="center"
    >
        <Grid
                item
                textAlign="center"
                alignItems="center"
                xs={9}
                >
                    <Results 
                        errors={appState.game.mistakes}
                        accuracyPercentage={appState.game.accuracy}
                        wpm={appState.game.wpm}
                        handleRestart={handleRestart}
                    />

        </Grid>
    </Grid>
   );
    
    return (
        <Grid
            container
            gap={2}
        >
            <Grid
                container
                item
                xs={12}
                
            >
                <Grid
                xs={3}
                >

                    <Timer timeLeft={time} />

                    <FormGroup>
                        <FormControlLabel 
                        control={<Checkbox defaultChecked/>} 
                        label="Backspace"
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

            <CustomModal open={appState.game.isGameover}>
                {ModalContent}    
            </CustomModal> 

        </Grid>
    );
}

export default TypingTest;