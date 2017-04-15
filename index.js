var osTops = require("./lib/osTops.js");

var platformTops = {
	"darwin": osTops.OsxTop,
	"linux": osTops.LnxTop
};


module.exports = {
	fetch
};


function fetch(){

	return new Promise(function(resolve, fail){
		var Top = platformTops[process.platform];
		if (Top == null){
			fail("Platform " + process.platform + " not supported yet");
			return;
		}

		var top = new Top();
		top.run().then(function(){
			resolve({stats: top.stats(), procs: top.procs()});
		}).catch(function(ex){
			fail(ex);
		});
	});
}





