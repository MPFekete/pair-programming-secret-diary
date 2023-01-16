const Diary = require(`./Diary`);
const keyLock = require(`./keyLock`);

const myDiary = new Diary(new keyLock());
myDiary.getEntries();
myDiary.getEntries();
myDiary.addEntry(`my first entry`);
myDiary.getEntries();
myDiary.unlock();
console.log(myDiary.getEntries());
myDiary.addEntry(`my second entry`);
console.log(myDiary.getEntries());