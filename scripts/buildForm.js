import API from "./data.js"

function buildForm() {
    let htmlString1 = `        <fieldset>
    <input type="text" name="idValue" id="idValue" class="hidden">
    <label for="journalDate">Date of entry</label>
    <input type="date" name="journalDate" id="journalDate">
</fieldset>
<fieldset>
<label for="journalEntryTitle">Concepts covered</label>
<input type="text" name="entryTitle" id="entryTitle">
</fieldset>
<fieldset>
<label for="journalEntry">Journal Entry</label>
<textarea name="journalEntry" id="journalEntry" cols="30" rows="3"></textarea>
</fieldset>
<fieldset>
<label for="journalMood">Mood for the day</label>
<select name="journalMood" id="journalMood">`
API.API.getJournalMoods()
.then(moodObject => {
    for (const object of Object.values(moodObject)) {
        htmlString1 += `<option value=${object.id}>${object.mood}</option>`
    }
    htmlString1 += ` </select>
    </fieldset>`
    document.getElementById("form-to-build").innerHTML = htmlString1
})


{/* <div id="entriesSort">
<fieldset id="moodFilter">
<legend>
Filter Journal Entries By Mood
</legend> */}

let htmlString2 = `<div id="entriesSort">
<fieldset id="moodFilter">
<legend>
Filter Journal Entries By Mood
</legend>`

API.API.getJournalMoods()
.then(moodObject => {
    for (const object of Object.values(moodObject)) {
        htmlString2 += `
        <input type="radio" id="${object.mood}" name="Mood" class="Mood" value=${object.id}>
        <label for="${object.mood}">${object.mood}</label>`
    }
    htmlString2 +=`</fieldset>
    <fieldset>
    <legend>
        Search Journal Entries
    </legend>
        <input type="text" name="searchInput" id="searchInput">
    </fieldset>
    </div>`
    document.getElementById("other-form-to-build").innerHTML = htmlString2
    API.addSearchEventListener()
    API.addMoodSortEventListener()
})



}

export default {buildForm}