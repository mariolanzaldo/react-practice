import { ReactElement} from "react";
import styles from "./styles.module.css";
import useAnimatedCounter from "../../hooks/useAnimatedCounter";

interface AnimatedCounterProps {
    value: number;
}

function AnimatedCounter({ value }: AnimatedCounterProps): ReactElement {
    const [displayValue] = useAnimatedCounter(value);

    
    // const [displayValue, setDisplayValue] = useState<number>(value);
    // const [animationQueue, setAnimationQueue] = useState<number[]>([]);
    // const display = useRef<HTMLDivElement>(null);
    // const timeoutRef = useRef<number | null>(null);
  

    // useEffect(() => {
    //     if(value !== animationQueue[0]) {
    //         setAnimationQueue((prevQueue) => [...prevQueue, value]);
    //     }
    // }, [value]);

    // useEffect(() => {
    //     if(displayValue !== value) {
    //         display.current?.classList.add(styles.slidein);
    //     }

    //     let nextValue: number;
    //     if(animationQueue.length > 0) {
    //         nextValue = animationQueue[0];

    //         setDisplayValue(nextValue);
    //     }

    //     timeoutRef.current = setTimeout(() =>{
    //         setAnimationQueue([...animationQueue.slice(1)])
    //         display.current?.classList.remove(styles.slidein);
    //         display.current?.classList.add(styles.slidein);
    //     }, 1000 );

    //     if(animationQueue.length < 1) clearTimeout(timeoutRef.current);

    //     return () => {
    //         if(timeoutRef.current) {
    //             clearTimeout(timeoutRef.current);
    //         }
    //     }

        
    // }, [ animationQueue])
    // useEffect(() => {
    //     if (animationQueue.length === 0) {
    //         return;
    //     }

    //     const nextValue = animationQueue[0];
    //     const animationDuration = 500; 
    
    //     setDisplayValue(nextValue);
    //     timeoutRef.current = window.setTimeout(() => {
    //         setAnimationQueue(prevQueue => prevQueue.slice(1));
    //     }, animationDuration);
    
    //     return () => {
    //         if (timeoutRef.current !== null) {
    //             clearTimeout(timeoutRef.current as number);
    //         }
    //     };
    // }, [animationQueue]);

    // useEffect(() => {
    //     setAnimationQueue(prevQueue => [...prevQueue, value]);
    // }, [value]);

    // console.log(animationQueue.length);
    return (
        <>
            <div
                // ref={display}
                // className={styles.animatedDisplay}
                className={`${styles.animatedDisplay} ${displayValue.animationQueue.length > 0 ? styles.slidein : ""}`}
                // className={`${styles.animatedDisplay} ${isAnimating ? styles.slidein : ""}`}
            >

                {displayValue.displayValue}

            </div>
        </>
    )
}

export default AnimatedCounter;

//TODO: Improve the animation
//TODO: If the button is clicked several times it should be able to see all the intermediate values/animations