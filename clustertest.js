var cluster = require('cluster');
var http = require('http');
var numWorkers = 2;

if(cluster.isMaster) {
	for(var i = 0; i < numWorkers; i++) {
		cluster.fork();
	}

	cluster.on('fork', function(worker) {
		console.log('master: Forking worker: '+worker.id);
	})

	cluster.on('online', function(worker) {
		console.log('master: Worker Online: '+worker.id);
	})

	cluster.on('listening', function(worker, address){
		console.log('master: Worker '+worker.id+' , PID ('+worker.process.pid+') listeing on '+address.address+' and port '+address.port);
	});

	cluster.on('exit', function(worker, code, signal){
		console.log('master: Worker '+worker.id+' exited!');
	});
} else {
	console.log('worker: Worker '+cluster.worker.id+' ready');
	var count = 0;

	http.createServer(function(req, res){
		res.writeHead(200);
		count++;
		console.log('worker: Worker '+cluster.worker.id+' serving request '+count+'');
		res.end('Hello from worker '+cluster.worker.id+' PID : '+cluster.worker.process.pid);
		if(count === 3) {
			cluster.worker.destroy();
		}
	}).listen(8090);
}