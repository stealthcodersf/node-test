var evenDoubler = function(number, callback) {
	if(number && number % 2 === 0){
		callback(null, number*2);
	} else {
		callback(new Error('Odd number!'), null);
	}
}

exports.evenDoubler = evenDoubler;