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
        this.numberOfQuestions = numberOfQuestions;
    }

    setQuizTheme(quizTheme: string[]) {
        this.quizTheme = quizTheme;
    }

    setCountry(country: string) {
        this.country = country;
    }

    setFormat(format: string[]) {
        this.format = format;
    }

    setDifficulty(difficulty: string) {
        this.difficulty = difficulty;
    }

    setVibe(vibe: string) {
        this.vibe = vibe;
    }

    setSpecificRequest(specificRequest: string) {
        this.specificRequest = specificRequest;
    }
}