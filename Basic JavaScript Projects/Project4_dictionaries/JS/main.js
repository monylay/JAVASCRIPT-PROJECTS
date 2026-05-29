function my_Dictionary() { //function for key pair value
	var Animal = {
		Species: "Cat",
        Name: "Pomi",
		Color: "Calico",
		Breed: "Domestic Cat",
		Age: 9,
		Sound: "Meow",
	};
    delete Animal.Name; //deleting the name and result is undefined
	document.getElementById("Dictionary").innerHTML = Animal.Name; //calling the name
}