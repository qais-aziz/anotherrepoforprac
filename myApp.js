let express = require('express');
const res = require('express/lib/response');
let app = express();
absolutePath = __dirname + '/views/index.html';
app.get('/', function (req, res) {
    res.sendFile(absolutePath)
})





































 module.exports = app;
