/**
 * Created by Kosine on 5/11/2017.
 */
var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index',{});
});

app.listen(80, function(){
    console.log("mc_server is now online and listening on port 80");
});