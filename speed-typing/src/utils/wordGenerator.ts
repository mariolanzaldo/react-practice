import { faker } from "@faker-js/faker";


function wordGenerator(wordCount: number): string {

    let paragraph = '';

    for(let i = 0; i < wordCount; i++) {
        paragraph += faker.word.words() + ' ';
    }

    return paragraph
}

export default wordGenerator;