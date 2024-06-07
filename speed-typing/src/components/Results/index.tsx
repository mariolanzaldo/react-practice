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
                width={400}
            >
                <Grid 
                    container
                    item
                    justifyContent="center"
                    alignSelf="center"
                    xs={12}
                >
                    <Typography variant="h5" component="div" textAlign="center" color="primary">
                        Results
                    </Typography>
                </Grid>
                <Grid 
                    container 
                    item 
                    xs={12}
                    gap={20}    
                >   
                    <Grid
                        container
                        item
                        xs={4}
                    >
                        <motion.div initial={initial} animate={animate} transition={{...duration, delay: 0.5}}>
                            <Typography variant="body1" component="div" textAlign="center" color="primary">
                                Accuracy
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                    >
                        <motion.div initial={initial} animate={animate} transition={{...duration, delay: 0.5}}>
                            <Typography variant="body1" component="div" textAlign="center" color="primary">
                                {accuracyPercentage}%
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid 
                     container
                     item 
                     xs={12}
                     gap={20}   
                >
                    <Grid
                        container
                        item
                        xs={4}
                    >
                        <motion.div initial={initial} animate={animate} transition={{...duration, delay: 0.7}}>
                            <Typography variant="body1" component="div" textAlign="center" color="primary">
                                Mistakes
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid
                        item
                        xs={2}

                    >
                        <motion.div initial={initial} animate={animate} transition={{...duration, delay: 0.7}}>
                            <Typography variant="body1" component="div" textAlign="center" color="primary">
                                {errors}
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid 
                     container 
                     item 
                     xs={12}
                     gap={20} 
                >
                    <Grid
                        container
                        item
                        xs={4} 
                    >
                        <motion.div initial={initial} animate={animate} transition={{...duration, delay: 0.9}}>
                            <Typography variant="body1" component="div" textAlign="center" color="primary">
                                WPM
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                    >
                        <motion.div initial={initial} animate={animate} transition={{...duration, delay: 0.9}}>
                            <Typography variant="body1" component="div" textAlign="center" color="primary">
                                {wpm}
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid 
                     container 
                     item 
                     xs={12}
                     gap={20}   
                >
                        <Grid
                            container
                            item
                            xs={4}
                        >
                            <motion.div initial={initial} animate={animate} transition={{...duration, delay: 1.1}}>
                                <Typography variant="body1" component="div" textAlign="center" color="primary">
                                    Max WPM
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                        >   
                            <motion.div initial={initial} animate={animate} transition={{...duration, delay: 1.1}}>
                                <Typography variant="body1" component="div" textAlign="center" color="primary">
                                    {maxWpm}
                                </Typography>
                            </motion.div>
                        </Grid>
                </Grid>
                <Grid item xs={12}>
                    <motion.div initial={initial} animate={animate} transition={{...duration, delay: 1.2}}>
                        <RestartButton onRestart={handleRestart} />
                    </motion.div>

                </Grid>
            </Grid>  
        </motion.div>
             
    );
}

export default Results;