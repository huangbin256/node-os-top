const utils = require("./utils.js");
const BaseTop = require("./BaseTop.js");



class OsxTop extends BaseTop{

	constructor(){
		super();
		this.cmd = "top -l 2";
		this.cpuRgx = /\nCPU usage:.*?([0-9\.]*)% user.*?([0-9\.]*)% sys.*?([0-9\.]*)% idle/i;
		
		this.memRgx = /\nPhysMem:.*?([0-9]*.) used.*?([0-9]*.) wired.*?([0-9]*.) unused/i;
		this.memMatchNames = ["used", "wired", "unused"];

		this.dataCfg = {
			name: "COMMAND",
			pid: "PID", 
			cpu: {
				colName: "%CPU", 
				fn: parseFloat
			}, 
			mem: {
				colName: "MEM", 
				fn: utils.numInMega
			}
		};
	}

	// need to override extract on osx because, we need to take the second page (-l 2, as the first page will have cpu 0.0)
	extractContent(content){
		// get the second page context (the first page do not have the cpu)
		var pageIdx = content.indexOf("\nProcesses:", 100) + 1;
		content = content.substring(pageIdx);

		super.extractContent(content);		
	}
}

class LnxTop extends BaseTop{

	constructor(){
		super();
		this.cmd = "top -b -n 1";
		this.cpuRgx = /\nCpu.*?([0-9\.]*)%us.*?([0-9\.]*)%sy.*?([0-9\.]*)%id/i;
		
		this.memRgx = /\nMem:.*?([0-9]*.) used.*?([0-9]*.) free.*?([0-9]*.) buffers/i;
		this.memMatchNames = ["used", "unused", "buffers"];

		this.dataCfg = {
			name: "COMMAND",
			pid: "PID", 
			cpu: {
				colName: "%CPU",
				fn: parseFloat
			}, 
			mem: {
				colName: "RES",
				fn: utils.numInMega
			}
		};
	}
}

class WinsTop extends BaseTop{

	constructor(){
		super();
		this.cmd = "top -b -n 1";
		this.cpuRgx = /\nCpu.*?([0-9\.]*)%us.*?([0-9\.]*)%sy.*?([0-9\.]*)%id/i;
		
		this.memRgx = /\nMem:.*?([0-9]*.) used.*?([0-9]*.) free.*?([0-9]*.) buffers/i;
		this.memMatchNames = ["used", "unused", "buffers"];

		this.dataCfg = {
			name: "COMMAND",
			pid: "PID", 
			cpu: {
				colName: "%CPU",
				fn: parseFloat
			}, 
			mem: {
				colName: "RES",
				fn: utils.numInMega
			}
		};
	}
}

module.exports = {
	OsxTop, LnxTop
};

