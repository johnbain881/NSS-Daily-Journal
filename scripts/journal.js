entries.push(journalEntry);
entries.push(journalEntry1);
entries.push(journalEntry2);
console.log(entries);



API.getJournalEntries().then(entryArray => {
    entryArray.forEach(entry => {
        entries.push(entry)
        console.log(entry)
    })
    entries.forEach(entry => {
        displayJournalEntry(entry)
    })
    console.log(entries)
    })