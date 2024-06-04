import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";

interface OdoMeterProps {
    value: number;
    duration?: number;
    size?: string;
    color?: string;
    fontFamily?: string;
}


function OdoMeter({
    value,
    duration = 1000,
    size = "3rem",
    color = "white",
    fontFamily = "sans-serif"
  }: OdoMeterProps) {

    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <Box
        className={`${styles.odoWrap}`}
        style={{ height: size, 
          fontSize: size,
           lineHeight: size }}
      >
        {(value + "").split("").map((val, idx) => (
          <Box
            key={idx}
            className={`${styles.odoDigits}`}
            style={{
              marginTop: `calc( -${val}em `,
              transition: `${duration}ms all`,
              transitionDelay: `${((value + "").split("").length - idx) * 20}ms`
            }}
          >
            {digits.map((digit) => (
                        <Box
                            key={digit}
                            className={styles.odoDigit}
                            data-val={`${digit}`}
                            height={size}
                            width={size}
                        >
                            <Typography 
                              variant="h4"
                              color={color}
                              fontFamily={fontFamily}
                            >{digit}</Typography>
                        </Box>
                    ))}
          </Box>
        ))}
      </Box>
    );
  }

export default OdoMeter;

  