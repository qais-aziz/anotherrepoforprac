let express = require('express');
require('dotenv').config();
const res = require('express/lib/response');
let app = express();
absolutePathCSS = __dirname + '/public';
app.use("/public", express.static(absolutePathCSS));
absolutePath = __dirname + '/views/index.html';
app.get('/json', function(req, res){
    var response = "Hello json";
    MESSAGE_STYLE = process.env.MESSAGE_STYLE;
    if(MESSAGE_STYLE ==="uppercase"){
        res.json({
            "message": "Hello json".toUpperCase
        })
    }
    else{
        res.json({
            "message": "Hello json"
        })
    }
})
app.get('/public', function (req, res) {
    res.sendFile(absolutePath)
})





































 module.exports = app;
