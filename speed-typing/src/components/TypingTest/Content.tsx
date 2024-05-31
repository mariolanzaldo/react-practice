import { Box, Paper, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { memo } from "react";

interface ContentProps {
    charIndex: number;
    word: string;
    paragraph: string;
}

function Content ({ charIndex, word, paragraph }: ContentProps) {

    return(
        <Paper
            elevation={5}
            variant="elevation"
            sx={{
                width: '80%',
            }}
        >

        <Box
            className={styles.content}
        >
                {
                    paragraph.split('').map((char, index) => (          
                        <Typography
                            key={index}
                            component="span"
                            fontSize="1.2em"
                            className={`
                                ${styles.char}
                                ${index === charIndex ? styles.active : null }             
                                ${word[index] === char ? styles.correct : index < charIndex ? styles.incorrect : null}`}
                        > 
                        {char}
                        </Typography>
                    ))
                }
        </Box>
        </Paper>
    );
}

const PureContent = memo(Content)

export default PureContent;