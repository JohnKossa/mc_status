/**
 * Created by Kosine on 5/11/2017.
 */
var bashExec = require('child_process').exec;
var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
    //ps aux | grep mc_vanilla/start_server.sh | wc -l
    bashExec("ps aux | grep mc_vanilla/start_server.sh | wc -l", function(err, stdout, stderr){
       if(err){
           res.render('index',{});
       }else{
           res.render('index',{"vanilla_status": stdout == "3"});
       }
    });

});

app.listen(80, function(){
    console.log("mc_server is now online and listening on port 80");
});