//HELP
const path = require('path');
const route = require('express').Router();
const util = require('util');
const fs = require('fs');
const { parse } = require('path');
//use commas in {} to add more 
const readFromFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)



//GET route to retrieve all feedback(route)
route.get('/', (req, res) => {
    console.info(`${req.method} request recieved for feedback`);
    // console.log(readFromFile)
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST route to submit feedback
route.post('/', (req, res) => {
    //log the post was recieved
    console.info(`${req.method} request recieved to submit feedback`);

    let db = readFromFile('db/db.json', 'utf8')
        .then((notes) => {
            let parsedNote;
            parsedNote = [].concat(JSON.parse(notes))
            console.log(parsedNote);
            return parsedNote;
        }).then((parsedNote) => {
            let newNote = {
                title: req.body.title,
                text: req.body.text,
            };
            return [...parsedNote, newNote]
        }).then((updatedNotes) => {
            writeFile('db/db.json', JSON.stringify(updatedNotes))
        })
    window.location.reload();




    console.log(db) //creates a new note


    //writes to .db file//
    // fs.writeFileSync('db/db.json', JSON.stringify(db));
    // db.push(newNote);
});

module.exports = route
