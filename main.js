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
		console.debug("err "+JSON.stringify(err));
		console.debug("stdout "+JSON.stringify(stdout));
		console.debug("stderr "+JSON.stringify(stderr));
		if(err){
			res.render('index',{});
		}else{
			res.render('index',{"vanilla_status": stdout == "4\n"}); //2 for running processes, 1 for the grep command, 1 for child_process command
		}
	});

});

app.listen(5000, function(){
	console.log("mc_server is now online and listening on port 5000");
});