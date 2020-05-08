import displayJournalEntry from "./entriesDOM.js";
import API from "./data.js"
import buildForm from "./buildForm.js"

buildForm.buildForm()

API.entries.push(API.journalEntry);
API.entries.push(API.journalEntry1);
API.entries.push(API.journalEntry2);



API.API.getJournalEntries().then(entryArray => {
    entryArray.forEach(entry => {
        API.entries.push(entry)
    })
    API.entries.forEach(entry => {
        displayJournalEntry.displayJournalEntry(entry)
    })
    })
document.getElementById("journalEntries").addEventListener("click", () => {
    console.log("clicked")
    console.log(event)
    if (event.target.localName === "button") {
        API.API.deleteJournalEntry(event.target.parentNode.id)
        event.target.parentNode.remove()
    }
})
document.getElementsByName("Mood").forEach(element => {
    element.addEventListener("click", () => {
        document.getElementById('journalEntries').innerHTML = ""
        API.API.getJournalEntriesByMood(element.value)
        .then(entryArray => {
            API.entries = [];
            entryArray.forEach(entry => {
                API.entries.push(entry)
                displayJournalEntry.displayJournalEntry(entry)
            })
        })
    })
})