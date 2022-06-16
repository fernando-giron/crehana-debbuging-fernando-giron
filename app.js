const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

var quotes = [
    {
        'text': 'Cruz azul juega en:',
        'author': 'Ciudad de México',
    },
    {
        'text': 'Guadalajara juega en:',
        'author': 'Jalisco',
    },
    {
        'text': 'Toluca juega en:',
        'author': 'Estado de México',
    },
    {
        'text': 'Pachuca juega en:',
        'author': 'Hidalgo',
    }
];

app.get('/random-quote', function (req, res) {
    var randomQuote = getRandomQuote();
    res.send(randomQuote);
});

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}