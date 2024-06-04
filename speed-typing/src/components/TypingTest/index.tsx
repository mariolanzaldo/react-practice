// import { Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, SelectChangeEvent, TextField } from "@mui/material";
// import wordGenerator from "../../utils/wordGenerator";
// import Timer from "../Timer";
// import RestartButton from "../RestartButton";
// import Results from "../Results";
// import PureContent from "./Content";
// import useTypingTest from "../../hooks/useTypingTest";
// import CustomModal from "../CustomModal";
// import { useAppContext } from "../../state";
// import { PARAGRAPH } from "../../utils/constants";
// import CustomSelect from "../CustomSelect";
// import { useState } from "react";

// function TypingTest() {
//     const text = wordGenerator(PARAGRAPH);
//     const [initialTime, setInitialTime] = useState(10);
//     const [mode, setMode] = useState('fixed');

//     // eslint-disable-next-line
//     const [appState, dispatch] = useAppContext();

//     const handleTimeChange = (event: SelectChangeEvent<number | string>) => {
//         setInitialTime(Number(event.target.value as number));
//     };

//     const handleModeChange = (event: SelectChangeEvent<string | number>) => {
//         setMode(event.target.value as string);
//     };

//    const { isBackspaceEnabled, paragraph, word, charIndex, time, inputRef, handleInput, handleDisableBackspace, handleRestart } = useTypingTest({text, initialTime});
    
//    const ModalContent = (
//     <Grid
//         container
//         direction="column"
//         alignItems="center"
//     >
//         <Grid
//                 item
//                 textAlign="center"
//                 alignItems="center"
//                 xs={9}
//                 >
//                     <Results 
//                         errors={appState.game.mistakes!}
//                         accuracyPercentage={appState.game.accuracy!}
//                         wpm={appState.game.wpm!}
//                         maxWpm = {appState.game.maxWpm!}
//                         handleRestart={handleRestart}
//                     />

//         </Grid>
//     </Grid>
//    );

//     return (
//         <Grid
//             container
//             gap={0}
//             marginTop={2}
//         >
//             <Grid
//                 display="flex"
//                 container
//                 item
//                 alignItems="center"
//                 alignContent="center"
//                 justifyContent="center"
//                 gap={2}
//                 xs={12}
                
//             >
//                 <Grid
//                     item

//                     xs={3}
//                 >
//                     <CustomSelect value={initialTime} title="Timer"  handleChange={handleTimeChange}>
//                         <MenuItem value={10}>10 seconds</MenuItem>
//                         <MenuItem value={60}>1 minute</MenuItem>
//                         <MenuItem value={120}>2 minutes</MenuItem>
//                     </CustomSelect>
                    
//                 </Grid>
//                 <Grid
//                     item
//                     xs={3}
//                 >
//                     <CustomSelect value={mode} title="Mode"  handleChange={handleModeChange}>
//                         <MenuItem value={"fixed"}>Fixed</MenuItem>
//                         <MenuItem value={"indefinite"}>Indefinite</MenuItem>
//                     </CustomSelect>
                    
//                 </Grid>
//                 <Grid
//                     item
//                     xs={2}
//                 >
//                     <FormGroup>
//                         <FormControlLabel 
//                         control={<Checkbox defaultChecked/>} 
//                         label={isBackspaceEnabled ? "Disable backspace" : "Enable backspace"}
//                         onChange={handleDisableBackspace}
//                         color="white" 
//                         />
//                     </FormGroup>
//                 </Grid>
//             </Grid>
//             <Grid
//                 item
//                 xs={12}
//                 display="flex"
//                 flexDirection="row"
//                 marginBottom={-7}
//             >

//                 <Timer time={time} />

//             </Grid>
//             <Grid
//                 item
//                 xs={12}
//             >
//                 <TextField 
//                     inputRef={inputRef}
//                     type="text"
//                     value={word}
//                     autoFocus
//                     onChange={handleInput}
//                     variant="standard"
//                 />

//                 <PureContent 
//                     charIndex={charIndex}
//                     word={word}
//                     paragraph={paragraph}
//                     />
//             </Grid>

//             <Grid
//                 item
//                 xs={12}
//                 display="flex"
//                 alignContent="center"
//                 alignItems="center"
//                 alignSelf="center"
//                 justifyContent="center"
//             >
//                 <RestartButton onRestart={handleRestart} />
//             </Grid>

//             <CustomModal open={appState.game.isGameover!}>
//                 {ModalContent}    
//             </CustomModal> 

//         </Grid>
//     );
// }

// export default TypingTest;

import { Grid, MenuItem, SelectChangeEvent } from "@mui/material";
import wordGenerator from "../../utils/wordGenerator";
// import Results from "../Results";
// import useTypingTest from "../../hooks/useTypingTest";
import { useAppContext } from "../../state";
import { PARAGRAPH } from "../../utils/constants";
import CustomSelect from "../CustomSelect";
import { useState } from "react";
import CountDown from "./CountDown";
import Indefinite from "./Indefinite";

function TypingTest() {
    const text = wordGenerator(PARAGRAPH);
    const [initialTime, setInitialTime] = useState(10);
    const [mode, setMode] = useState('fixed');

    // eslint-disable-next-line
    const [appState, dispatch] = useAppContext();

    const handleTimeChange = (event: SelectChangeEvent<number | string>) => {
        setInitialTime(Number(event.target.value as number));
    };

    const handleModeChange = (event: SelectChangeEvent<string | number>) => {
        setMode(event.target.value as string);
    };

//    const { isBackspaceEnabled, paragraph, word, charIndex, time, inputRef, handleInput, handleDisableBackspace, handleRestart } = useTypingTest({text, initialTime});
    
//    const ModalContent = (
//     <Grid
//         container
//         direction="column"
//         alignItems="center"
//     >
//         <Grid
//                 item
//                 textAlign="center"
//                 alignItems="center"
//                 xs={9}
//                 >
//                     <Results 
//                         errors={appState.game.mistakes!}
//                         accuracyPercentage={appState.game.accuracy!}
//                         wpm={appState.game.wpm!}
//                         maxWpm = {appState.game.maxWpm!}
//                         handleRestart={handleRestart}
//                     />

//         </Grid>
//     </Grid>
//    );

    return (
        <Grid
            container
            gap={0}
            marginTop={2}
        >
            <Grid
                display="flex"
                container
                item
                alignItems="center"
                alignContent="center"
                justifyContent="center"
                gap={2}
                xs={12}
                
            >
                <Grid
                    item

                    xs={3}
                >
                    <CustomSelect 
                        value={initialTime} 
                        title="Timer"  
                        handleChange={handleTimeChange}
                        mode={mode}    
                    >
                        <MenuItem value={10}>10 seconds</MenuItem>
                        <MenuItem value={60}>1 minute</MenuItem>
                        <MenuItem value={120}>2 minutes</MenuItem>
                    </CustomSelect>
                    
                </Grid>
                <Grid
                    item
                    xs={3}
                >
                    <CustomSelect 
                        value={mode} 
                        title="Mode"  
                        handleChange={handleModeChange}
                        mode={mode}    
                    >
                        <MenuItem value={"fixed"}>Fixed</MenuItem>
                        <MenuItem value={"indefinite"}>Indefinite</MenuItem>
                    </CustomSelect>
                    
                </Grid>
            </Grid>

            {
                mode === 'fixed' ? 
                <CountDown text={text} initialTime={initialTime} /> : null
            } 

            {
                mode === 'indefinite' ? 
                <Indefinite text={text} initialTime={initialTime} /> : null
            } 

        </Grid>
    );
}

export default TypingTest;