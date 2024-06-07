import { Grid, MenuItem, SelectChangeEvent } from "@mui/material";
import wordGenerator from "../../utils/wordGenerator";
// import { useAppContext } from "../../state";
import { PARAGRAPH } from "../../utils/constants";
import CustomSelect from "../CustomSelect";
import { useState } from "react";
import CountDown from "./CountDown";
import Indefinite from "./Indefinite";

function TypingTest() {
    const text = wordGenerator(PARAGRAPH);
    const [initialTime, setInitialTime] = useState(10);
    const [mode, setMode] = useState('fixed');

    // const [appState, dispatch] = useAppContext();

    const handleTimeChange = (event: SelectChangeEvent<number | string>) => {
        setInitialTime(Number(event.target.value as number));
    };

    const handleModeChange = (event: SelectChangeEvent<string | number>) => {
        setMode(event.target.value as string);
    };

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
                <Indefinite text={text} /> : null
            } 

        </Grid>
    );
}

export default TypingTest;