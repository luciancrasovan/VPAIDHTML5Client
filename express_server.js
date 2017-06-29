'use strict';

var express = require('express');
var app = express();

var router = express.Router();// get an instance of the express Router

app.use(function(req,res,next){setTimeout(next, 4000)});
// app.use('/demo', router);
app.use('/demo', express.static('demo'));

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Magic happens on port ' + port);

router.get('/', function(req, res) {
    res.status(206).send();
});
