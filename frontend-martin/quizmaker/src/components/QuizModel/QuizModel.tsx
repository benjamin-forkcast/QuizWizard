export class QuizModel {
    numberOfQuestions: number;
    quizTheme: string[];
    country: string;
    format: string[];
    difficulty: string;
    vibe: string;
    specificRequest: string;

    constructor(numberOfQuestions: number = 1, quizTheme: string[] = [], country: string = "", format: string[] = [], difficulty: string = "", vibe: string = "", specificRequest: string = "") {
        this.numberOfQuestions = numberOfQuestions;
        this.quizTheme = quizTheme;
        this.country = country;
        this.format = format;
        this.difficulty = difficulty;
        this.vibe = vibe;
        this.specificRequest = specificRequest;
    }

    // You can add methods here to manipulate the data of the quiz, for example:

    setNumberOfQuestions(numberOfQuestions: number) {
        console.log("setNumberOfQuestions: " + numberOfQuestions);
        this.numberOfQuestions = numberOfQuestions;
    }

    setQuizTheme(quizTheme: string[]) {
        console.log("setQuizTheme: " + quizTheme);
        this.quizTheme = quizTheme;
    }

    setCountry(country: string) {
        console.log("setCountry: " + country);
        this.country = country;
    }

    setFormat(format: string[]) {
        console.log("setFormat: " + format);
        this.format = format;
    }

    setDifficulty(difficulty: string) {
        console.log("setDifficulty: " + difficulty);
        this.difficulty = difficulty;
    }

    setVibe(vibe: string) {
        console.log("setVibe: " + vibe);
        this.vibe = vibe;
    }

    setSpecificRequest(specificRequest: string) {
        console.log("setSpecificRequest: " + specificRequest);
        this.specificRequest = specificRequest;
    }
}