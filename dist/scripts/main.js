

// FUNCTION OBJECT

var ironYard = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];
var age = ["30yrs", "25yrs", "24yrs", "23yrs", "22yrs", "31yrs", "29yrs", "35yrs", "27yrs"];
var wendy=[];

wendy.object = function( ironYard, age) {
    if (ironYard == null) return {};
    var result = {};

    for (var i = 0, length = ironYard.length; i < length; i++) {
      if (age) {

        result[ironYard[i]] = age[i];
      }


      else {
        result[ironYard[i][0]] = ironYard[i][3];
      }
    }
    return result;
  };

  var w = wendy.object(ironYard,age);

  console.log(w);


// FUNCTION FIRST

var list = [1,2,3];
var n = max.first;
  max.first = function(list){
    return(list[0]);

  };

  console.log(list[0]);


// FUNCTION SIZE


var max = {};

var myArray = [1,2,3,4,5];

max.size = function (list) {
  return(list.length);
};

var q = max.size(myArray);

console.log(q);


// FUNCTION FIRST


  var ironYard = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];
var n =1;
var wendy=[];

_.first = function(ironYard, n) {
    if (ironYard == null) return void 0;
    if (n == null) return ironYard[0];
    if (n < 0) return [];
    return Array.prototype.slice.call(ironYard, 0, n);
  };

  var firstOfArray= _.first(ironYard,n);

  console.log(firstOfArray);

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
console.log(max.range(start, stop, step));




// Function Each

var bob = {};

bob.each = function(list,ears){
  var top = list.length
  for(var index = 0;index < top;index = index +1){
    var item = list[index]
    ears(item)

  }
};

bob.each(['videos','cheese','wine'],function(foo){
  console.log(foo.length)
});


//************ IGNORE BELOW **************//



// random_.random(min, max)
// Returns a random integer between min and max, inclusive.
// If you only pass one argument, it will return a number between 0 and that number.
//
// _.random(0, 100);
// => 42



//Setup my main object
//
var max  = {};
//
// max.greeting = function (message){
//   aleart(message);
// };
//
//
// max.random = function (min, max){
//   if (max == null){
//     max = min;
//     min = 0;
//   }
//   return min + Math.floor(Math.random() * (max -min + 1));
// };
//
// max.each = function(arr){
//   if( arr == null)return;
//   console.log(arr);
// }
//
// var a = [1,2,3,4,5];
// max.map(a, function (num){return num * 3});



// max.ans = function(obj) {
//
//     var ans = [];
//     for (var className in obj)
//       if ( max.contains(obj, className))
//         ans.push(className);
//     return ans;
//   };
