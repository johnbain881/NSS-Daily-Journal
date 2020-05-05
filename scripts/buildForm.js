function buildForm() {
    document.getElementById("form-to-build").innerHTML = 
    `<fieldset>
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
    <select name="journalMood" id="journalMood">
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Funny">Funny</option>
        <option value="Bored">Bored</option>
        <option value="Excited">Excited</option>
        <option value="Gloomy">Gloomy</option>
    </select>
</fieldset>`
}

export default {buildForm}