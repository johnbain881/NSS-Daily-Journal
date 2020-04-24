
function getJournalEntry(){
    let newJournalEntry = {
        date: "",
        entryTitle: "",
        entry : "",
        mood: ""
    };
    newJournalEntry.date = document.getElementById('journalDate').value;
    newJournalEntry.entryTitle = document.getElementById('entryTitle').value;
    newJournalEntry.entry = document.getElementById('journalEntry').value;
    newJournalEntry.mood = document.getElementById('journalMood').value;

    displayJournalEntry(newJournalEntry)
}

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
    }
}