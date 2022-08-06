class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min + 1;
        this.max = max;
    }

    guess() {
        this.lastGuess = Math.floor((this.min + this.max) / 2);
        return this.lastGuess;
    }

    lower() {
        this.max = this.lastGuess;
    }

    greater() {
        this.min = this.lastGuess + 1;
    }
}

module.exports = GuessingGame;
