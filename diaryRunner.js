const Diary = require(`./Diary`);

const myDiary = new Diary();
myDiary.getEntries();
myDiary.unlock();
console.log(myDiary.getEntries());
myDiary.addEntry(`my first entry`);
console.log(myDiary.getEntries());
myDiary.lock();
myDiary.getEntries();
myDiary.addEntry(`my second entry`);