function testAccuracy(value: string, paragraph: string, charIndex: number, totalChars: React.MutableRefObject<number>, totalCorrectChars: React.MutableRefObject<number>): number {
    if (value.length > charIndex) {
      totalChars.current += 1;
      if (value[charIndex] === paragraph[charIndex]) {
        totalCorrectChars.current += 1;
      }
      
      return Math.round(totalCorrectChars.current / totalChars.current * 100);
    }
    return 0;
  }

  export default testAccuracy;