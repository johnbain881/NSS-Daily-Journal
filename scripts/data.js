import displayJournalEntry from "./entriesDOM.js";

function getJournalEntry() {
    let newJournalEntry = createJournalEntry(document.getElementById('journalDate').value, document.getElementById('entryTitle').value, document.getElementById('journalEntry').value, document.getElementById('journalMood').value);
    console.log(newJournalEntry)
    if (isValidInput(newJournalEntry)) {
        console.log(isValidInput(newJournalEntry))
        displayJournalEntry.displayJournalEntry(newJournalEntry)
        API.postJournalEntries(newJournalEntry)
    } else {
        alert("Please fill in all of the forms, or stop using illegal characters \nInput must be under 140 characters \nBe sure to watch your language")
    }
}

function createJournalEntry (date, entryTitle, entry, mood, id=undefined) {
    return {
        date: date,
        entryTitle: entryTitle,
        entry : entry,
        mood: mood,
        id: id
    }
}

function isValidInput(object) {
    let regex = /^[\w(){}\-:;\s]{1,140}$/;
    let cussRegex = /(fuck|shit|bitch|ass)/;
    if (!cussRegex.test(object.entryTitle)) {
        if (!cussRegex.test(object.entry)) {
            if (regex.test(object.entryTitle)) {
                if (regex.test(object.entry)) {
                    return regex.test(object.date)
                }
            }
        }
    }
    return false
}

function putJournalEntry(id) {
    let newJournalEntry = createJournalEntry(document.getElementById('journalDate').value, document.getElementById('entryTitle').value, document.getElementById('journalEntry').value, document.getElementById('journalMood').value, document.getElementById('idValue').value);
    console.log(newJournalEntry)
    if (isValidInput(newJournalEntry)) {
        displayJournalEntry.displayJournalEntry(newJournalEntry)
        API.putJournalEntries(newJournalEntry, id)
            document.getElementById('journalDate').value = "";
            document.getElementById('entryTitle').value = "";
            document.getElementById('journalEntry').value = "";
            document.getElementById('journalMood').value = "Happy";
            document.getElementById('idValue').value = "";
    } else {
        alert("Please fill in all of the forms, or stop using illegal characters \nInput must be under 140 characters \nBe sure to watch your language")
    }
}

function fillForm(id) {
    API.getJournalEntries(id)
    .then(object => {
        document.getElementById('journalDate').value = object.date;
        document.getElementById('entryTitle').value = object.entryTitle;
        document.getElementById('journalEntry').value = object.entry;
        document.getElementById('journalMood').value = object.mood;
        document.getElementById('idValue').value = id;
    })
}

document.getElementById("get-journal-entry").addEventListener("click", () => {
    if (document.getElementById("idValue").value === ""){
    getJournalEntry();
    } else {
        putJournalEntry(document.getElementById("idValue").value);
    } 
})

let entries = [];

const journalEntry = {
    date: "4-17-20",
    entryTitle: "JavaScript",
    entry: "We have officially started JavaScript!",
    mood: "Happy"
}

const journalEntry1 = {
    date: "4-17-20",
    entryTitle: "Finally!",
    entry: "I have been anticipating starting JavaScript, because it is so much fun!",
    mood: "Motivated"
}

const journalEntry2 = {
    date: "4-17-20",
    entryTitle: "Long Day",
    entry: "I woke up pretty early this morning, and I'm pretty tired.",
    mood: "Tired"
}


const API = {
    getJournalEntries: function (id="") {
        return fetch(`http://localhost:3000/entries/${id}`)
            .then(response => response.json())
    },
    postJournalEntries: function (newJournalEntry) {
        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
})
    },
    getJournalEntriesByMood: function (mood) {
        return fetch(`http://localhost:3000/entries?mood=${mood}`)
            .then(response => response.json())
    },
    deleteJournalEntry: function (id) {
        fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: ""
})
    },
    putJournalEntries: function (newJournalEntry, id) {
        fetch(`http://localhost:3000/entries/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
})
    }

}


export default {API, entries, journalEntry, journalEntry1, journalEntry2, fillForm}