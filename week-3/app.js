const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send(`<h1>My first server!</h1>`);
});

app.get('/getData', (req, res) => {
    const { number } = req.query;
    let inputNum = Number(number);
    //console.log(inputNum);
    
    if (!number) {
        res.send(`<h1>Lake of Parameter</h1>`)
    } 
    else if (isNaN(inputNum)) {
        res.send(`<h1>Wrong Parameter</h1>`)
    }
    else {
        inputNum = (inputNum + 1)*inputNum/2;
        res.send(`${inputNum}`)
    }
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000.');
});





