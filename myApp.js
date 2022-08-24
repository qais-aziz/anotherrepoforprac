let express = require('express');
require('dotenv').config();
const res = require('express/lib/response');
let app = express();
absolutePathCSS = __dirname + '/public';
app.use("/public", express.static(absolutePathCSS));
absolutePath = __dirname + '/views/index.html';

app.get('/json', function(req, res){
    if(process.env.MESSAGE_STYLE === "uppercase")
    var response = {"message": "HELLO JSON"};
    else
    var response = {"message": "Hello json"}
  
    
        res.json(
            response
        )
})
app.get('/public', function (req, res) {
    res.sendFile(absolutePath)
})





































 module.exports = app;
