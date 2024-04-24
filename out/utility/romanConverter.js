export class RomanConverter {
    #romanNumerals;
    constructor() {
        this.#romanNumerals = new Map([
            [1000, 'M'],
            [900, 'CM'],
            [500, 'D'],
            [400, 'CD'],
            [100, 'C'],
            [90, 'XC'],
            [50, 'L'],
            [40, 'XL'],
            [10, 'X'],
            [9, 'IX'],
            [5, 'V'],
            [4, 'IV'],
            [1, 'I'],
        ]);
    }
    convertToRoman(number) {
        let result = '';
        for (const [value, symbol] of this.#romanNumerals) {
            while (number >= value) {
                result += symbol;
                number -= value;
            }
        }
        return result;
    }
}
;
