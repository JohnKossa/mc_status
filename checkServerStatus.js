/**
 * Created by Kosine on 5/11/2017.
 */
var bashExec = require('child_process').exec;
module.exports = {
	vanilla: function(next){
		bashExec("ps aux | grep mc_vanilla/start_server.sh | wc -l", function(err, stdout, stderr){
			console.log("err "+JSON.stringify(err));
			console.log("stdout "+JSON.stringify(stdout));
			console.log("stderr "+JSON.stringify(stderr));
			if(err){
				next(err, false);
			}else{
				next(null, stdout == "4\n");//2 for running processes, 1 for the grep command, 1 for child_process command
			}
		});
	},
	direwolf20: function(next){
		bashExec("ps aux | grep mc_dw20/ServerStart.sh | wc -l", function(err, stdout, stderr){
			console.log("err "+JSON.stringify(err));
			console.log("stdout "+JSON.stringify(stdout));
			console.log("stderr "+JSON.stringify(stderr));
			if(err){
				next(err, false);
			}else{
				next(null, stdout == "3\n");//1 for running process, 1 for the grep command, 1 for child_process command
			}
		});
	}
};