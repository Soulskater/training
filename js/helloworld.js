// Logikai -> bool vagy boolean
// Szöveg -> string
var firstName = "Evelyn";
var lastName = "Laszlo";
var exampleNumber = 10;
var exampleBool = false;

//Feltétel vizsgálat példa
if (firstName === "Evelyn" && lastName === "Laszlo") {
  console.log("Laszlo Evelyn!");
} else {
  console.log("Nem Laszlo Evelyn!");
}

var task = "Feladat";
var repeatCount = 10;

//Számolós ciklus példa
for(var i = 0; i < repeatCount;i++){
  // task + i
  // "Feladat1"
  console.log(task + i);
}

var mySum0 = sum(5,3,2);
var mySum1 = sum(3,1,4);
var mySum2 = sum(1,5,1);
var res = multiply(mySum0,mySum1);
console.log("Multiply result" + " " + res);