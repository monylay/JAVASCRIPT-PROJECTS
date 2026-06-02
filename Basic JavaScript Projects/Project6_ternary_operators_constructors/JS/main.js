function Ride_Function() { // learning ternary operator
    var Height, Can_ride; //assigning variable for height and can_ride
    Height = document.getElementById("Height").value; //giving height a value
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { // learning ternanry operator
    var Age, Can_vote; //assigning variable age and can_vote
    Age = document.getElementById("Age").value; //giving age a value
    Can_vote = (Age < 18) ? "You are not old enough to":"You can";
    document.getElementById("Vote").innerHTML = Can_vote + " vote!";
}

function Vehicle(Make, Model, Year, Color) { //learning this keyword function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Part of "this" keyword function
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Erik Drives a " +
    Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function counting() { //Learning nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 5;
        function Plus_one() {Starting_point += 1;} //this is the nested function
        Plus_one(); //still trying to understand
        return Starting_point;
    }
}