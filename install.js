var fs = require("fs");
	exec = require('child_process').exec,
	simpleporaldir = __dirname + "/../node_modules/simpleportal";

console.log("*********** [START] Installing the simpleportal dependent modules [START] ***********");
if(!fs.existsSync(simpleporaldir + "/connect")){
	installNpmModule(simpleporaldir, "", function(error, data){
		if(error)
			console.trace(error);
		else{
			console.log("*********** [NPM install] finished [NPM install] ***********");
			console.log(data);
			console.log("*********** [NPM install] finished [NPM install] ***********");
		}
	});
}

function installNpmModule(simpleporaldir, module, callback){
	var cmd_to_execute = 'cd ' + simpleporaldir;
	
	var nodepath = (process.argv[0]);
	var npmpath = nodepath.replace("/nodejs", "/npm");
		npmpath = npmpath.replace("/node", "/npm");
		
	cmd_to_execute += " && " + npmpath +" install " + (module ? module : "");
	
	console.log("executing -- " + cmd_to_execute);
	
	exec(cmd_to_execute, callback);
}

console.log("***********  [END] Installing the simpleportal dependent modules   [END]  ***********");