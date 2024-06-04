import { useState } from "react";
import wordGenerator from "../utils/wordGenerator";
import { PARAGRAPH } from "../utils/constants";


interface UseParagraph {
    text: string;
}

function useParagraph({ text }: UseParagraph) {
    const [paragraph, setParagraph] = useState(text);

    const regenerateParagraph = () => {
        setParagraph(wordGenerator(PARAGRAPH));
    };

    return { paragraph, regenerateParagraph };
}

export default useParagraph;