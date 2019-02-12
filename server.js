require('newrelic');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

const PORT = process.env.PORT||3001;
app.listen(PORT, () => {
    console.log(`Connected to ${PORT}!`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('*',(req,res) => {
    res.status(400).json({
        message:'Not found!',
    });
});