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
</fieldset>

`
document.getElementById("other-form-to-build").innerHTML = `
<fieldset>
<legend>
Filter Journal Entries By Mood
</legend>
    <input type="radio" id="Happy" name="Mood" class="Mood" value="Happy">
    <label for="Happy">Happy</label>
    <input type="radio" id="Sad" name="Mood" class="Mood" value="Sad">
    <label for="Sad">Sad</label>
    <input type="radio" id="Funny" name="Mood" class="Mood" value="Funny">
    <label for="Funny">Funny</label>
    <input type="radio" id="Bored" name="Mood" class="Mood" value="Bored">
    <label for="Bored">Bored</label>
    <input type="radio" id="Excited" name="Mood" class="Mood" value="Excited">
    <label for="Excited">Excited</label>
    <input type="radio" id="Gloomy" name="Mood" class="Mood" value="Gloomy">
    <label for="Gloomy">Gloomy</label>
</fieldset>
`

}

export default {buildForm}