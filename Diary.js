class Diary {

    #locked = true;
    #diaryEntries = [];

    lock() {
        this.#locked = true;
    }
    unlock() {
        this.#locked = false;
    }
    addEntry(input) {
        try {
            if (this.#locked === true) {
                throw new Error(`Diary is locked`)
            }
        }
        catch (error) {
            console.log(error.message);
        }
        this.#diaryEntries.push(input);
    }
    getEntries() {
        try {
            if (this.#locked === true) {
                throw new Error(`Diary is locked`)
            }
        }
        catch (error) {
            console.log(error.message);
        }
        return this.#diaryEntries;
    }
}

module.exports = Diary;