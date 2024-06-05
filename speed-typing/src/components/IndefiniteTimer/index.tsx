import { Grid, Typography } from "@mui/material";
import timeFormatter from "../../utils/timeFormatter";
import Digit from "./Digit";


interface IndefiniteTimerProps {
    time: number;
}
function IndefiniteTimer({ time }: IndefiniteTimerProps
) {

    const { minutes, seconds } = timeFormatter(time);

    return(
        <Grid
            container
            display="flex"
            direction="row"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >  
            <Digit digit={minutes[0]} />
            <Digit digit={minutes[1]} />
            <Typography>:</Typography>
            <Digit digit={seconds[0]}/>
            <Digit digit={seconds[1]}/>

        </Grid>
    );
}

export default IndefiniteTimer;