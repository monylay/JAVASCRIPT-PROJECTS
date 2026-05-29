document.write("10" + 5); //105
document.write(typeof "Hi"); //string
document.write(typeof 5); //number

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

document.getElementById("Test").innerHTML = isNaN('This is a string'); //True not a number

document.getElementById("Test").innerHTML = isNaN('007');//false this is a number

function Infinity_() {
    document.getElementById("Infi").innerHTML = 2E310; //infinity
}

function Ineg() {
    document.getElementById("Neg").innerHTML = -3E310; // -infinity
}

document.write(10 > 15); //fasle
document.write(15 < 20); //true

console.log(5 + 5);
console.log(10 > 15);

document.write(10 == 10); //true
document.write(20 == 15); //false

A = 10
B = 10
document.write(A === B);

C = 20
D = 30
document.write(C === D);

E = 25
F = "25"
document.write(E === F);

document.write( 15 === 20);
document.write("Hi" === "Bye");

document.write(10 > 5 && 15 > 2); //both true
document.write(2 > 10 && 3 > 4); //both false
document.write( 10 > 15 || 10 > 5);//true because 10 > 5 || means OR 
document.write(10 > 20 || 10 > 30);

function not_Function() {
    document.getElementById("Not").innerHTML = ! (30 > 15);
}