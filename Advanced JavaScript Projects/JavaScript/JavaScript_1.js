function Game_Function() { //switch statement
    var Game_Output;
    var Games = document.getElementById("Game_Input").value;
    var Game_String = " is a great game!";
    switch(Games) {
        case "Call of Duty":
            Game_Output = "Call of Duty" + Game_String;
        break;
        case "God of War":
            Game_Output = "God of War" + Game_String;
        break;
        case "Roblox":
            Game_Output = "Roblox" + Game_String;
        break;
        case "Minecraft":
            Game_Output = "Minecraft" + Game_String;
        break;
        case "Counter Strike":
            Game_Output = "Counter Strike" + Game_String;
        break;
        case "Fortnite":
            Game_Output = "Fortnite" + Game_String;
        break;
        case "Valorant":
            Game_Output = "Valorant" + Game_String;
        break;
        default:
        Game_Output = "Please enter a game exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Game_Output;
}

function Hello_World_Function() { //classname practice
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("Name");
var ctx1 = c.getContext("2d");

//create gradient

var grd1 = ctx1.createRadialGradient(75,50,5,90,60,100);
grd1.addColorStop(0,"purple");
grd1.addColorStop(1,"white");

//fill with gradient

ctx1.fillStyle = grd1;
ctx1.fillRect(10,10,150,80);

//Second Canvas
const trio = document.getElementById("try");
const ctx2 = trio.getContext("2d");

//Create Gradient
const grd2 = ctx2.createLinearGradient(0,0,170,0);
grd2.addColorStop(0, "white");
grd2.addColorStop(0.5, "purple");
grd2.addColorStop(1, "blue");

//Fill Rectangle
ctx2.fillStyle = grd2;
ctx2.fillRect(20,20,150,100);