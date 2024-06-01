function testCalculator(originalValue: string, typedValue: string, timeElapsed: number) {

    let maxWpm = 1;
    const mistakes = typedValue.split('').reduce((acc, typedChar, index) => {
        return  typedChar !== originalValue[index] ? acc + 1 : acc;
    }, 0);

    const wpm = typedValue.length - mistakes / 5;

    if(timeElapsed > 0) {
        
        maxWpm = Math.round(wpm / (timeElapsed / 60));
    }

    return { mistakes , wpm, maxWpm};
}

export default testCalculator;