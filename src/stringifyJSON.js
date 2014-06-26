// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var stringResult = "";

  var typeFinder = function(obj) {
  	// for null
  	if (obj === null) {
  		stringResult += "null";
	// for undefined
  	} else if (obj === undefined) {
  		stringResult += "";
  	// for strings
  	} else  if (typeof obj === 'string') {
  		stringResult += '"' + obj + '"';
  	// for functions
  	} else if (typeof obj === 'function') {
  		stringResult += obj();
  	// for arrays
  	} else if (typeof obj === 'object' && Array.isArray(obj)) {
  		stringResult += "[";
  		for (var i = 0; i < obj.length; i++) {
  			typeFinder(obj[i]);
  			stringResult += ",";
  		}
  		trimmer(obj);
  		stringResult += "]";
  	// for other objects
  	} else if (typeof obj === 'object') {
  		stringResult += "{";
  		for (var key in obj) {
  			if (typeof obj[key] !== "undefined" && typeof obj[key] !== "function") {
  				stringResult += '"' + key + '":';
  				typeFinder(obj[key]);
  				stringResult += ",";
  			}
  		}
  		trimmer(obj);
  		stringResult += "}";
  	// for everything else
  	} else {
  		stringResult += obj;
  	}
  }

  // removes excess commas
  var trimmer = function(obj) {
  	var keyCount = 0;
  	for (var key in obj) {
  		if (typeof obj[key] !== "undefined" && typeof obj[key] !== "function")
  			keyCount++;
  	}
  	if (keyCount > 0)
  		stringResult = stringResult.slice(0, -1);
  }

  typeFinder(obj);
  return stringResult;
};