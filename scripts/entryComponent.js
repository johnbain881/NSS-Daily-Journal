function makeJournalEntryElement(object) {
    return `<div id="${object.id}"><h1>${object.entryTitle}</h1><p>${object.entry}</p><p>${object.date}</p><br><button>delete</button><button>edit</button></div>`;
}

export default {makeJournalEntryElement}