class Diary {
    #diaryEntries = [];
    #lock;
    constructor(lock = 0) {
        this.#lock = lock;
    }
    lock() {
        this.#lock.lock();
    }
    unlock() {
        this.#lock.unlock();
    }
    addEntry(input) {
        try {
            if (this.#lock.getLockStatus() === true) {
                throw new Error(`Diary is locked`)
            }
        }
        catch (error) {
            console.log(error.message);
        }
        if (this.#lock.getLockStatus() === false) {
            this.#diaryEntries.push(input);
        }
    }
    getEntries() {
        try {
            if (this.#lock.getLockStatus() === true) {
                throw new Error(`Diary is locked`)
            }
        }
        catch (error) {
            console.log(error.message);
        }
        if (this.#lock.getLockStatus() === false) {
            return this.#diaryEntries;
        }
    }
}

module.exports = Diary;