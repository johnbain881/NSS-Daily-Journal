const journalEntry = {
    date: "4/17/20",
    entryTitle: "JavaScript",
    entry: "We have officially started JavaScript!",
    mood: "Happy"
}

let entries = [];
entries.push(journalEntry);

const journalEntry1 = {
    date: "4/17/20",
    entryTitle: "Finally!",
    entry: "I have been anticipating starting JavaScript, because it is so much fun!",
    mood: "Motivated"
}

entries.push(journalEntry1);


const journalEntry2 = {
    date: "4/17/20",
    entryTitle: "Long Day",
    entry: "I woke up pretty early this morning, and I'm pretty tired.",
    mood: "Tired"
}

entries.push(journalEntry2);
console.log(entries)


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

function displayJournalEntry(object){
    document.getElementById('journalEntries').innerHTML += `<h1>${object.entryTitle}</h1><p>${object.entry}</p><p>${object.date}</p>`
}




fetch("http://localhost:3000/entries")
.then(object => object.json())
.then(entryArray => {
    entryArray.forEach(entry => {displayJournalEntry(entry)})
    })