class keyLock {
    #locked = true;

    lock() {
        this.#locked = true;
    }
    unlock() {
        this.#locked = false;
    }
    getLockStatus() {
        return this.#locked;
    }
}

module.exports = keyLock;