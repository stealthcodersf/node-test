var Resource = require('./resource');

var r = new Resource(10);

r.on('start', function() {
	console.log('I\'ve started');
});

r.on('data', function(data) {
	console.log('Recieved '+data);
});

r.on('done', function(count) {
	console.log('All done processing '+count+' events!');
});
