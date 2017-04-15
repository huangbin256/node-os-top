var top = require("../index.js");
var data = require("./mock-data.js");
var osTops = require("../lib/osTops.js");


// FIXME: Need to implement proper tests. For now, just console.log base testing. 


console.log(">>>>> OsxTop mock test");
var osxTop = new osTops.OsxTop();
osxTop.extractContent(data.mac);
console.log(osxTop.stats());
console.log(osxTop.procs());


console.log("\n\n>>>>> LnxTop mock test");
var lnxTop = new osTops.LnxTop();
lnxTop.extractContent(data.lnx);
console.log(lnxTop.stats());
console.log(lnxTop.procs());



console.log("\n\n>>>>> top.fetch live test");
top.fetch().then(function(data){
	console.log(data);
});


