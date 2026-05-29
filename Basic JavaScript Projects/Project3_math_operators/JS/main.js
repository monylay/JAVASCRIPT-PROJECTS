let button = document.getElementById("myBtn"); //button = myBtn
let math = document.getElementById("Math"); //math = Math

button.addEventListener("click", function () { //on click button
    let result = 2 + 2; // result = 4
    math.textContent = result; //show the result in "math" when the button is clicked
}); // add function

let subbutton = document.getElementById("Clicker");
let Sub = document.getElementById("Sub");

subbutton.addEventListener("click", function () {
    let result = 5 - 3;
    Sub.textContent = result;
}); //subtract function

let mulbutton = document.getElementById("Touch");
let Multi = document.getElementById("Multi");

mulbutton.addEventListener("click", function () {
    let result = 4 * 2;
    Multi.textContent = result;
}); //multiply function

let divbutton = document.getElementById("But");
let Div = document.getElementById("Div");

divbutton.addEventListener("click", function () {
    let result = 10 / 2;
    Div.textContent = result;
}); //divide function

let oper = document.getElementById("oper");
let operbutton = document.getElementById("here");

operbutton.addEventListener("click", function () {
    let result = (1 + 2) * 10 / 2 - 5;
    oper.textContent = result;
}); //mutiple operation function

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
} //modulus function

let neg = document.getElementById("neg");
let negbutton = document.getElementById("negation");

negbutton.addEventListener("click", function () {
    let result = 10;
    neg.textContent = -result;
}); //negation function

let count = 0;
let show = document.getElementById("count");
let inbutton = document.getElementById("increase");
let debutton = document.getElementById("decrease");

inbutton.addEventListener("click", function () {
    count++;
    show.textContent = count;
}); //increment function

debutton.addEventListener("click", function() {
    count--;
    show.textContent = count;
}); //decrement function

window.alert(Math.random() * 50); //alert window to generate random number between 1-50

function showRandom() {
    let random = Math.ceil(Math.random() * 10);
    document.getElementById("result").textContent = random;
} //random number function
