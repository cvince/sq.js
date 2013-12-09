//original function structure


function firstFunction(){
	var d = $.Deferred();
		// some very time consuming asynchronous code...
		$('#ani1').animate({top: 200}, 5000, function(){ d.resolve(); });
	 	return d.promise();
}

function thirdFunction(){
  var d = $.Deferred();
  // definitely dont wanna do this until secondFunction is finished
	setTimeout(function() {
		console.log('3');
		d.resolve();
		}, 1000);
	return d.promise();
}

function secondFunction(){
	var d = $.Deferred();
		setTimeout(function() {
		console.log('2');
		d.resolve();
		}, 1000);
	return d.promise();
}

function fourthFunction(){
	var d = $.Deferred();
	// last function, not executed until the other 3 are done.
	setTimeout(function() {
		console.log('4');
		d.resolve();
		}, 1000);
	return d.promise();
}

firstFunction().pipe(secondFunction).pipe(thirdFunction).pipe(fourthFunction);