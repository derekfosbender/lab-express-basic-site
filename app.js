const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/aboutme', (request, response) => {
    response.sendFile(__dirname + '/views/about-me.html')
});

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
});








app.listen(3000, () => console.log ('running'));