//use path and fs
const path = require('path');
const fs = require('fs');

//create a new note
function noteCreate(destination, notes) {
    const noteResult = destination;
    notes.push(noteResult);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )
    return noteResult;
};

module.exports = { noteCreate };
