


function timeFormatter(timeLeft: number): { minutes: string, seconds: string}  {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');

    return {
        minutes,
        seconds
    }
}

export default timeFormatter;