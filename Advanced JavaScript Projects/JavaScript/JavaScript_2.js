function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
        if (fname === "" || lname ==="") {
            alert("All fields must be filled out");
            return false; //stops form submission
        }
}