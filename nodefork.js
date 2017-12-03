var fork = require('child_process').fork;

var child = fork(__dirname + '/doublerprocess.js');

child.on('message', function(m){
	console.log('Answer = '+m.answer);
	child.send({cmd:'done'});
});

child.send({cmd:'double', number: 10});
