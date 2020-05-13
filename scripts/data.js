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

function createJournalEntry (date, entryTitle, entry, moodId, id=undefined) {
    return {
        date: date,
        entryTitle: entryTitle,
        entry : entry,
        moodId: parseInt(moodId),
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
    console.log(parseInt(document.getElementById('journalMood').value))
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
        document.getElementById('journalMood').value = object.moodId;
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
        return fetch(`http://localhost:3000/entries/${id}?_expand=mood`)
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
    getJournalEntriesByMood: function (moodId) {
        return fetch(`http://localhost:3000/moods/${moodId}?_embed=entries`)
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
    },
    getJournalMoods: function () {
        return fetch(`http://localhost:3000/moods`)
            .then(response => response.json())
    }

}



document.getElementById("journalEntries").addEventListener("click", () => {
    // console.log(event)
    if (event.target.localName === "button" && event.target.innerHTML === "delete") {
        API.deleteJournalEntry(event.target.parentNode.id)
        event.target.parentNode.remove()
    }
    if (event.target.localName === "button" && event.target.innerHTML === "edit") {
        // console.log(event.target.parentNode.id)
        fillForm(event.target.parentNode.id)
        event.target.parentNode.remove()
        
    }
})

function addMoodSortEventListener(){
    document.getElementsByName("Mood").forEach(element => {
        element.addEventListener("click", () => {
            document.getElementById('journalEntries').innerHTML = ""
            API.getJournalEntriesByMood(element.value)
            .then(entryArray => {
                console.log(entryArray)
                entries = [];
                entryArray.entries.forEach(entry => {
                    entries.push(entry)
                    displayJournalEntry.displayJournalEntry(entry)
                })
            })
        })
    })
}

function addSearchEventListener() {
        document.getElementById("searchInput").addEventListener("keypress", () => {
        // event.preventDefault()
        // console.log(event)
        let input = event.target.value;
        if(event.key === "Enter") {
            event.preventDefault()
            // console.log("He hit enter")
            API.getJournalEntries()
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
}

export default {API, entries, journalEntry, journalEntry1, journalEntry2, fillForm, addSearchEventListener, addMoodSortEventListener}