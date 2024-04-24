import { ReactElement } from "react";
import React from "react";
import { RomanConverter } from "../utility/romanConverter.js";

//class way
// export class DisplayCounter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.converter = new RomanConverter();
//     }

//     render() {
//         const { num, className } = this.props;
//         let value = this.converter.convertToRoman(Math.abs(num));

//         if (num < 0) {
//             value = `-${value}`;
//         }

//         // console.log(roman);

//         return React.createElement("p", { className }, `${value}`);
//     }
// };


//Function way
export function DisplayCounter({ num, className }: {num: number, className: string}): ReactElement {

    let value = new RomanConverter().convertToRoman(Math.abs(num));

    if (num < 0) {
        value = `-${value}`;
    }
    return React.createElement("p", { className }, `${value}`);;
};
