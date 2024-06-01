import {Grid, Typography } from "@mui/material";
import {motion} from "framer-motion";
import RestartButton from "../RestartButton";

interface ResultsProps {
    errors: number;
    accuracyPercentage: number;
    wpm: number;
    maxWpm: number;
    handleRestart: () => void;
}

function Results ({
    errors, 
    accuracyPercentage, 
    wpm, 
    maxWpm, 
    handleRestart
    }: ResultsProps) {
    const initial = { opacity: 0};
    const animate = { opacity: 1};
    const duration = { duration: 0.3};

    return (
        <motion.div initial={initial} animate={animate} transition={duration}>
             <Grid 
                container 
                spacing={2} 
                display="flex"
                justifyContent="center" alignItems="center" 
                direction="column"
            >
                <Grid item xs={12}>
                    <Typography variant="h5" component="div" textAlign="center" color="primary">
                        Results
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <motion.div initial={initial} animate={animate} transition={{ ...duration, delay: 0.5 }}>
                        <Typography variant="body1" component="div" textAlign="center" color="primary">
                            Accuracy: {accuracyPercentage}%
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div initial={initial} animate={animate} transition={{ ...duration, delay: 1 }}>
                        <Typography variant="body1" component="div" textAlign="center" color="error">
                            Errors: {errors}
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div initial={initial} animate={animate} transition={{ ...duration, delay: 1.2 }}>
                        <Typography variant="body1" component="div" textAlign="center" color="primary">
                            WPM: {wpm}
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div initial={initial} animate={animate} transition={{ ...duration, delay: 1.5 }}>
                        <Typography variant="body1" component="div" textAlign="center" color="primary">
                            Max WPM: {maxWpm}
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div initial={initial} animate={animate} transition={{ ...duration, delay: 1.7 }}>
                        <RestartButton onRestart={handleRestart} />
                    </motion.div>

                </Grid>
            </Grid>
        </motion.div>
        
        

    );
}

export default Results;