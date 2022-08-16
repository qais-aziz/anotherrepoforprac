let express = require('express');
const res = require('express/lib/response');
let app = express();

app.get('/', function (req, res) {
    res.sendFile(views/index.html)
})





































 module.exports = app;
