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
    console.log(event)
    if (event.target.localName === "button" && event.target.innerHTML === "delete") {
        API.API.deleteJournalEntry(event.target.parentNode.id)
        event.target.parentNode.remove()
    }
    if (event.target.localName === "button" && event.target.innerHTML === "edit") {
        console.log(event.target.parentNode.id)
        API.fillForm(event.target.parentNode.id)
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

document.getElementById("searchInput").addEventListener("keypress", () => {
    // event.preventDefault()
    // console.log(event)
    let input = event.target.value;
    if(event.key === "Enter") {
        event.preventDefault()
        console.log("He hit enter")
        API.API.getJournalEntries()
        .then(object => {
            // console.log(object)
            document.getElementById('journalEntries').innerHTML = ""
            for (const values of Object.values(object)) {
                let shouldDisplay = false
                for (const value of Object.values(values)) {
                    let newValue = `${value}`
                    // console.log(value)
                    // console.log(newValue)
                    // console.log(newValue.includes(input))
                    if (newValue.includes(input)) {
                        shouldDisplay = true
                    }
                }
                if (shouldDisplay) {
                    displayJournalEntry.displayJournalEntry(values)
                }
            }

        })
    }

})