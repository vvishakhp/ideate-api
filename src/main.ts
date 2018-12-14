import express = require('express');

var app = express();
app.use('/', function(req:express.Request, res){
    res.send('Hello World');
})

app.listen(3000, ()=>{
    console.log('Server started');
});