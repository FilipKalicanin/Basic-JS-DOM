function myFunction() {
    var age, voteable;

    age = Number(document.getElementById("age").value);

    if (isNaN(age)) {
        
        voteable = "Imput is not a number.";

    } else {
        
        voteable = (age < 18) ? "Not eligible." : "Eligible.";
    }

    document.getElementById("demo").innerHTML = voteable;
}

var names = ["ana", "marija", "bojana", "ana", "marko", "marko", "bojana"];

var obj = {};

for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (obj[names[i]] + 1) || 1;
}

console.log(obj);

function printerArray(animals) {
    for (var i = 0; i < animals.length; i++) {
         console.log(animals[i]);
    }
}

printerArray(["dog", "cat", "kangaroo"]);

function doesExist(nums, num) {
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === num) {
            return true;
        }
    }
    return false;
}

document.getElementById("demo1").innerHTML = doesExist([1, 2, 3], 3);

function myMove() {
    var elem = document.getElementById("animation");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
