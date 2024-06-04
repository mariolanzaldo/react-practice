import { Box, Paper } from "@mui/material";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import OdoMeter from "./Odometer";

interface DigitProps {
    digit: string;
    animate: boolean;
}

function Digit({ digit, animate }: DigitProps ){

    const [ prevDigit, setPrevDigit] = useState(digit);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        if(prevDigit !== digit) {
            setFlip(true);
            setPrevDigit(digit);

            setTimeout(() => {
                setPrevDigit(digit);
                setFlip(false);
            }, 200);
        }
    }, [digit, prevDigit]);


    return (
        <Box
            className={`${styles.digit} 
            ${flip ? styles.flip : ""}
            `}
        >   
            <Paper
                variant="outlined"
                className={styles.digitInner}
            >
                <OdoMeter value={parseInt(digit)}/>

            </Paper>
        </Box>
    );
}

export default Digit;