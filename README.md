# pair-programming-secret-diary
Pair programming task 

## Initial domain model - all one class

| Objects | Properties                   | Messages          | Outputs           |
| ------- | ---------------------------- | ----------------- | ----------------- |
| Diary   | #locked @Boolean             | lock()            | @Void             |
|         | #diaryEntries @Array[@String]| unlock()          | @Void             |
|         |                              | addEntry(@String) | @Void             |
|         |                              | getEntries()      | @Array[@String]   |

## Refactored domain model - multiple classes

| Objects | Properties                   | Messages          | Outputs           |
| ------- | ---------------------------- | ----------------- | ----------------- |
| Diary   | #lock @Object                | addEntry(@String) | @Void             |
|         | #diaryEntries @Array[@String]| getEntries()      | @Array[@String]   |
|         |                              | lock()            | @Void             |
|         |                              | unlock()          | @Void             |
| keyLock | #locked @Boolean             | lock()            | @Void             |
|         |                              | unlock()          | @Void             |
|         |                              | getLockStatus()   | @Boolean          |
| fingerprintLock | #locked @Boolean             | lock()            | @Void             |
|         |                              | unlock()          | @Void             |
|         |                              | getLockStatus()   | @Boolean          |
