const express = require('express');
const app = express();


app.use(express.static('pages'));

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')

});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});