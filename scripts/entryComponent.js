function makeJournalEntryElement(object) {
    return `<h1>${object.entryTitle}</h1><p>${object.entry}</p><p>${object.date}</p>`;
}

export default {makeJournalEntryElement}