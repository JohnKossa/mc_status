/**
 * Created by Kosine on 5/11/2017.
 */
var checkServerStatus = require("./checkServerStatus");
var path = require("path");
var async = require("async");
var express = require('express');
var app = express();
app.use(require('less-middleware')(path.join(__dirname, 'public/styles')));
app.use(express.static(path.join(__dirname, 'public/styles')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './public/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
	var pageContext = {};
	async.parallel([
		function(callback){
			checkServerStatus.vanilla(function(err, isUp){
				if(err){
					pageContext["vanilla_status"] = false;
				}else{
					pageContext["vanilla_status"] = isUp;
				}
				callback()
			})
		},
		function (callback) {
			checkServerStatus.direwolf20(function(err, isUp){
				if(err){
					pageContext["direwolf20_status"] = false;
				}else{
					pageContext["direwolf20_status"] = isUp;
				}
				callback()
			})
		}
	], function(){
		res.render('index', pageContext);
	});
});

app.listen(5000, function(){
	console.log("mc_server is now online and listening on port 5000");
});