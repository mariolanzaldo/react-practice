import { Typography } from "@mui/material";

function Timer({ timeLeft }: { timeLeft: number }) {

    return(
        <Typography
            color="yellow"
        >
            {timeLeft}
        </Typography>
    );
}

export default Timer;