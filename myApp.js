let express = require('express');
require('dotenv').config();
const res = require('express/lib/response');
let app = express();
absolutePathCSS = __dirname + '/public';
app.use("/public", express.static(absolutePathCSS));
absolutePath = __dirname + '/views/index.html';

app.get('/json', function(req, res){
    var response = {"message": "Hello json"};
    if(process.env.MESSAGE_STYLE === "uppercase")
    response = "Hello json".toUpperCase();
    else
    response = "Hello json"
  
    
        res.send(response)
})
app.get('/public', function (req, res) {
    res.sendFile(absolutePath)
})





































 module.exports = app;
