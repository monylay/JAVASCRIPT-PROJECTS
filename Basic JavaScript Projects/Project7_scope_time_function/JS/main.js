let A = 10; //global variable
function Add_numbers_1() {
    document.write(15 + A + "<br>");
}
function Add_numbers_2() {
    document.write(A + 50);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { //local variable
    let B = 15;
    document.write(25 + B + "<br>");
}
function Add_numbers_4() {
    document.write(B + 20);
}
Add_numbers_3();
Add_numbers_4();

function time() { //if statement with new Date()
    if (new Date().getHours() > 21) {
        document.getElementById("Night").innerHTML = "Have a Goodnight";
    }
}

function Age_Function() { // if and else statement
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Play = "You are old enough to play the game.";
    }
    else {
        Play = "You are not old enough to play the game.";
    }
    document.getElementById("Your_Age?").innerHTML = Play;
}

function Time_function() { //else if statement
    let Time = new Date().getHours();
    let Reply;
    if (Time < 12 == Time > 0) { // if time is less than 12 and its greater than 0 reply morning time
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) { // if time is greater or equal to 12 and time is less than 6pm reply with afternoon
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."; // else the rest of time, reply with it is evening time
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}