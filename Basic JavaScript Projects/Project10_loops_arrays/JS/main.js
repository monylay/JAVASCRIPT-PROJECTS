function Call_Loop() {  //white loop functions
    let Digit = "";
    let num = 0;
    while (num < 11) {
        Digit += "<br>" + num;
        num++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function count_to_Ten() {
	var Digits = "";
	var X = 1;
	while (X < 11) {
		Digits += "<br>" + X;
		X++;
	}
	document.getElementById("Counting_to_Ten").innerHTML = Digits;
}

//text.length method

let txt = "Be seeing you";
let length = txt.length;

document.getElementById("find").innerHTML = length;


//for loop function

let Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
let Content = "";
let Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //Arrays and object function
    let Car_Picture = [];
    Car_Picture[0] = "Red";
    Car_Picture[1] = "Blue";
    Car_Picture[2] = "Yellow";
    document.getElementById("Array").innerHTML = "In this picture, the car is " + Car_Picture[2] + ".";
}

function constant_function() { //const keyword practice
    const Cat = {name:"Pomi", breed:"Domestic cat", color:"white"};
    Cat.color = "calico";
    document.getElementById("Constant").innerHTML = "The cat name is " + Cat.name + " and she is a " + Cat.color + ".";
}

function pi() { //testing return function
    return Math.PI;
}
document.getElementById("test").innerHTML = pi();

let cat = { //object with properties and method
    name: "Pomi ",
    breed: "Domestic Cat",
    age: "9 years old",
    color: "Calico ",
    description:function() {
        return "The cat name is " + this.name + "and  she is " + this.age + " and her color pattern is a " + this.color + ".";
    }
};
document.getElementById("Cat_O").innerHTML = cat.description();


let text = ""; //break statement
for (let i = 0; i < 10; i++) {
    if (i ===3) {break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("breakin").innerHTML = text;

let type = ""; //continue statement
for (let j = 1; j <10; j++) {
    if (j === 3) {continue;}
    type += j*10 + "<br>";
}
document.getElementById("con").innerHTML = type;