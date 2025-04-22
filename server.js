//listens to incoming web requests
const express = require("express");
const path = require('path');
// const HTML = require('./routes/HTML');
const api = require('./routes/api');

//listens at specified PORT
const app = express();
const port = 3001

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//serves up an html file
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//listens on port var
app.listen(port, () => {

    console.log("server is being hosted at http://localhost:" + port);

});


