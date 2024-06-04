function testCalculator(originalValue: string, typedValue: string, timeElapsed: number, totalTime: number) {

    // console.log("TIME ELAPSED", timeElapsed);
    let maxWpm = 1;
    const mistakes = typedValue.split('').reduce((acc, typedChar, index) => {
        return  typedChar !== originalValue[index] ? acc + 1 : acc;
    }, 0);

    const wpm = Math.floor((typedValue.length - mistakes / 5) / (totalTime / 60));

    if(timeElapsed > 0) {
        
        maxWpm = Math.floor((typedValue.length - mistakes / 5) / (timeElapsed / 60));
    }

    return { mistakes , wpm, maxWpm};
}

export default testCalculator;