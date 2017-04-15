const cp = require('child_process');

// Some simple module utils. 

module.exports = {
	numInMega, 
	exec
};




var numExtRgx = /([0-9\.]*)(\D?)/;

// Returns the megabyte version of a number with unit like:
// 218M returns 218
// 16G returns 16000
// 123K or 123 returns 0.123
function numInMega(numStr){

	var m = numStr.match(numExtRgx);
	
	if (m != null){
		let v = parseFloat(m[1]);
		let unit = m[2].toUpperCase();

		if (unit.startsWith("G")){
			v *= 1000;
		}else if (unit.startsWith("K") || unit.length === 0){
			v /= 1000;
		}
		return v;
	}
	return null;
}


// Simple Promise wrapper on top of 
function exec(cmd, ignoreError){
	var p = new Promise(function(resolve, reject){
		cp.exec(cmd,{maxBuffer: 1024 * 500},  (error, stdout, stderr) => {
			if (error && !ignoreError) {
				console.log(error);
				reject({stdout, stderr, error});	
			}else{

				resolve({stdout, stderr, error});	
			}
		});		
	});
	return p;
}