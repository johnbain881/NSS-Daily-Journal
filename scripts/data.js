import displayJournalEntry from "./entriesDOM.js";

function getJournalEntry() {
    let newJournalEntry = createJournalEntry(document.getElementById('journalDate').value, document.getElementById('entryTitle').value, document.getElementById('journalEntry').value, document.getElementById('journalMood').value);
    console.log(newJournalEntry)
    if (isValidInput(newJournalEntry)) {
        console.log(isValidInput(newJournalEntry))
        displayJournalEntry.displayJournalEntry(newJournalEntry)
        API.postJournalEntries(newJournalEntry)
    } else {
        alert("Please fill in all of the forms, or stop using illegal characters")
    }
}

function createJournalEntry (date, entryTitle, entry, mood) {
    return {
        date: date,
        entryTitle: entryTitle,
        entry : entry,
        mood: mood
    }
}

function isValidInput(object) {
    let regex = /^[\w(){}\-:;\s]+$/;
    if (regex.test(object.entryTitle)) {
        if (regex.test(object.entry)) {
            return regex.test(object.date)
        }
    }
    return false
}

document.getElementById("get-journal-entry").addEventListener("click", () => {
    getJournalEntry();
})

let entries = [];

const journalEntry = {
    date: "4/17/20",
    entryTitle: "JavaScript",
    entry: "We have officially started JavaScript!",
    mood: "Happy"
}

const journalEntry1 = {
    date: "4/17/20",
    entryTitle: "Finally!",
    entry: "I have been anticipating starting JavaScript, because it is so much fun!",
    mood: "Motivated"
}

const journalEntry2 = {
    date: "4/17/20",
    entryTitle: "Long Day",
    entry: "I woke up pretty early this morning, and I'm pretty tired.",
    mood: "Tired"
}

// fetch("http://localhost:3000/entries")
// .then(object => object.json())
// .then(entryArray => {
//     entryArray.forEach(entry => {entries.push(entry)})
//     })

const API = {
    getJournalEntries: function () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    postJournalEntries: function (newJournalEntry) {
        fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
})
    }
}


export default {API, entries, journalEntry, journalEntry1, journalEntry2}