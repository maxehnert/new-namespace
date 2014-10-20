
// FUNCTION OBJECT

var arr1 = [];
var arr2 = [];
max.object = function( arr1, arr2) {
    if (arr1 == null) return {};
    var result = {};

    for (var i = 0, length = arr1.length; i < length; i++) {
      if (arr2) {

        result[arr1[i]] = arr2[i];
      }


      else {
        result[arr1[i][0]] = arr1[i][3];
      }
    }
    return result;
  };


// FUNCTION RANGE

var start = 1;
var stop = 20;
var step = 2;
  max.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);
    var i;
    for (i = 0; i < length; i++, start += step) {
      range[i] = start;
    }

    return range;
  };

// Function Each


max.each = function(list,n){
  var top = list.length
  for(var index = 0; index < top; index = index +1){
    var item = list[index]
    n(item)
  }
  return item;
};


// FUNCTION FIRST


var n = 1;
var arr = [];

max.first = function(arr, n) {
    if (arr == null) return void 0;
    if (n == null) return arr[0];
    if (n < 0) return [];
    return Array.prototype.slice.call(arr, 0, n);
  };


// FUNCTION SIZE


max.size = function (list) {
  return(list.length);
};

// **************NOT MY WORK BELOW. JUST EXAMPLES FOR MY REFERENCE. *****************//

(function() {

	// Setup my Main Object
	var root = this;
	var max = {};

	// Set `max` as global
	root.max = max;

	// Function will return a new array
	// Take two parameters
	max.map = function (arr, funct) {
		if ( Array.isArray(arr) ) {
			if (arr.length > 0) {
				var res = [], i;
				for (i = 0; i < arr.length; i++){
					res[i] = funct(arr[i]);
				}
				return res;
			}
			return [];
		} else {
			return console.log('This is not an array');
		}
	};

	// Get Current Time
	// From Underscorejs.org
	max.now = function (arr) {
		return new Date().getTime();
	};

	// Greeting Function
	max.greeting = function (message) {

		// Check for Time of Day
		var time = new Date(),
				initial_greeting = '',
				time_hours = time.getHours(),
				final_greeting;

		if (time_hours < 12) {
			initial_greeting = 'Good Morning';
		} else if (time_hours >= 12 && time_hours <= 17) {
			initial_greeting = 'Good Afternoon';
		} else if (time_hours > 17 && time_hours <= 24) {
			initial_greeting = 'Good Evening';
		}

		final_greeting = (message != null) ? initial_greeting + ', ' + message : initial_greeting;

		return final_greeting;
	};

	// Random Function
	// From Underscorejs.org
	max.random = function (min, max) {
			if (max == null) {
				max = min;
				min = 0;
			}
	    return min + Math.floor(Math.random() * (max - min + 1));
	};

}());
