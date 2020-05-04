import displayJournalEntry from "./entriesDOM.js";
import API from "./data.js"


API.entries.push(API.journalEntry);
API.entries.push(API.journalEntry1);
API.entries.push(API.journalEntry2);
console.log(API.entries);



API.API.getJournalEntries().then(entryArray => {
    entryArray.forEach(entry => {
        API.entries.push(entry)
        console.log(entry)
    })
    API.entries.forEach(entry => {
        displayJournalEntry.displayJournalEntry(entry)
    })
    console.log(API.entries)
    })