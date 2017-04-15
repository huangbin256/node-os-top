const tableParser = require("table-parser");
const utils = require("./utils.js");

class BaseTop{

	run(){
		var self = this;
		return utils.exec(self.cmd).then(function(data){
			self.extractContent(data.stdout.toString());
		});		
	}

	extractContent(content){
		var self = this;

		// get the second page context (the first page do not have the cpu)
		var tableHeadRgx = /\n\s*PID/i;
		var tableHeadIdx = content.match(tableHeadRgx).index;

		self.head = content.substring(0, tableHeadIdx);
		self.content = content.substring(tableHeadIdx);			
	}

	stats(){
		var head = this.head;

		var stats = {
			mem: {},
			cpu: {}
		};

		// get the cpu info
		var cpuMatch = head.match(this.cpuRgx);
		if (cpuMatch){
			stats.cpu.user = parseFloat(cpuMatch[1]);
			stats.cpu.sys = parseFloat(cpuMatch[2]);
			stats.cpu.idle = parseFloat(cpuMatch[3]);		
		}	

		var memMatch = head.match(this.memRgx);
		if (memMatch){
			let i = 1;
			for (let memName of this.memMatchNames){
				stats.mem[memName] = utils.numInMega(memMatch[i]);
				i++;
			}
		}
		return stats;		
	}

	procs(){
		var tableData = tableParser.parse(this.content);
		var dataCfg = this.dataCfg;
		
		var procs = tableData.map(function(topItem){
			var item = {};


			for (let name in dataCfg){
				let cfg = dataCfg[name];
				let colName = (typeof cfg === "string")?cfg:cfg.colName;
				let colVal = topItem[colName][0];
				item[name] = (cfg.fn)?cfg.fn(colVal):colVal;
			}

			return item;
		});

		return procs;		
	}
}



module.exports = BaseTop;