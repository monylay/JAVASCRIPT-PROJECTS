function getMsg(){
    //step 1: setup the xml HTTP request object

    let ajaxRequest = new XMLHttpRequest();

    //get input value of name to display to user after
    //request has been made
    let inputVal = document.getElementById("FullName").value;

    //function to display user input value once request
    //has been received

    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " + 
        inputVal + " for signing up!";
    }
    //step 2: prepare the type of request and what to
    //request from the server
    ajaxRequest.open('GET', 'response.html', true);

    //step 3: defines the ajax response calback method that
    //establishes whether the response was successful and where
    //the data should be displayed
    ajaxRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML =
            ajaxRequest.responseText;
        }
    }


    //step 4: send the request
    ajaxRequest.send();
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("test").innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "content.html", true);
    xhttp.send();
}