var fun = require('./mathFun');

process.on('message', function(m) {
	if(m.cmd === 'double') {
		console.log('In the child process doubling : '+m.number);
		fun.evenDoubler(m.number, function(err, result) {
			if(err) {
				process.send({answer: 'Error occured!'});
			} else {
				process.send({answer: result});	
			}	
		});
	} else if(m.cmd === 'done'){
		process.exit();
	}
});