var firstName = "Evelyn";
var lastName = "Laszlo";

//Simple if-else
if (firstName === "Evelyn" && lastName === "Laszlo") {
    console.log("Laszlo Evelyn!");
} else {
    console.log("Not Laszlo Evelyn!");
}

//Nested if-else (equivalent)
if (firstName === "Evelyn") {
    if(lastName === "Laszlo"){
        console.log("Laszlo Evelyn!");
    }else {
        console.log("Not Laszlo, but Evelyn!");
    }
} else {
    console.log("Not Evelyn!");
}

//Simple else-if
if (firstName === "Evelyn") {
    console.log("Evelyn!");
} else if(lastName === "Laszlo") {
    console.log("Laszlo!");
}