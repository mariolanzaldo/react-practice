function testCalculator(originalValue: string, typedValue: string) {
    const mistakes = typedValue.split('').reduce((acc, typedChar, index) => {
        return  typedChar !== originalValue[index] ? acc + 1 : acc;
    }, 0);

    const wpm = typedValue.length - mistakes / 5;
    return { mistakes , wpm};
}

export default testCalculator;