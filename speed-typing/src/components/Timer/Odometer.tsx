import styles from "./styles.module.css";

interface SpeedoMeterProps {
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
  }: SpeedoMeterProps) {
    return (
      <div
        className={`${styles.speedoWrap}`}
        style={{ height: size, fontSize: size, lineHeight: size }}
      >
        {(value + "").split("").map((val, idx) => (
          <div
            className={`${styles.speedoDigits}`}
            style={{
              color: color,
              fontFamily: fontFamily,
              marginTop: `calc( -${val}em `,
              transition: `${duration}ms all`,
              transitionDelay: `${((value + "").split("").length - idx) * 20}ms`
            }}
          >
            <div className={`${styles.speedoDigit}`} data-val="0">
              0
            </div>
            <div className={`${styles.speedoDigit}`} data-val="1">
              1
            </div>
            <div className={`${styles.speedoDigit}`} data-val="2">
              2
            </div>
            <div className={`${styles.speedoDigit}`} data-val="3">
              3
            </div>
            <div className={`${styles.speedoDigit}`} data-val="4">
              4
            </div>
            <div className={`${styles.speedoDigit}`} data-val="5">
              5
            </div>
            <div className={`${styles.speedoDigit}`} data-val="6">
              6
            </div>
            <div className={`${styles.speedoDigit}`} data-val="7">
              7
            </div>
            <div className={`${styles.speedoDigit}`} data-val="8">
              8
            </div>
            <div className={`${styles.speedoDigit}`} data-val="9">
              9
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default OdoMeter;
  