import makeJournalEntryElement from "./entryComponent.js"


function displayJournalEntry(object){
    document.getElementById('journalEntries').innerHTML += makeJournalEntryElement.makeJournalEntryElement(object)
}


export default {displayJournalEntry}