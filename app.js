const express = require('express')
const bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.urlencoded({ extended: true }))
app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    if (req.body.res == '+') {
        var output = n1 + n2;
        res.send('Result:' + output);
    }
    else if (req.body.res == '-') {
        var output = n1 - n2;
        res.send('Result:' + output);
    }
    else if (req.body.res == '*') {
        var output = n1 * n2;
        res.send('Result:' + output);
    }
    else if (req.body.res == '/') {
        var output = n1 / n2;
        res.send('Result:' + output);
    }
    else if (req.body.res == '%') {
        var output = n1 % n2;
        res.send('Result:' + output);
    }
    else {
        res.send(errorMessage);
    }
});


app.listen('3000', (res) => {
    console.log("Connected to port 3000")
})