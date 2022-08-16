let express = require('express');
const res = require('express/lib/response');
let app = express();
absolutePathCSS = __dirname + '/public';
app.use("/public", express.static(absolutePathCSS));
absolutePath = __dirname + '/views/index.html';
app.get('/public', function (req, res) {
    res.sendFile(absolutePath)
})





































 module.exports = app;
