const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
var mongoose = require('mongoose');
mongoose.set('strictQuery', false);

app.use(express.static(__dirname));

mongoose.connect('mongodb://localhost:27017/Banners', function(req, res) {
    if(mongoose){
        console.log('Database successfully connected!!');
    } else{
        console.log('Unable to connect to the database');
    }
})

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/pages/index.html'));
})

app.listen(port, function(req, res) {
    console.log('Listening on port ' + port);
})