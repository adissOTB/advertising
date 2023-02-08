const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static(__dirname));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + 'index.js'));
})

app.listen(port, function(req, res) {
    console.log('Listening on port ' + port);
})