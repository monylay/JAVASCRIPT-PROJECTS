function changeText() {
    var str1 = "This is a test";
    var str2 = "This is a test2";
    var element = document.getElementById("myStrings");

    element.innerHTML = str1 + "<br>" + str2;

}

function Testing() { //testing using the += operator
    var sentence = "I am learning JavaScript,";
    sentence +=" trying to get use to coding in JavaScript.";
    document.getElementById("Click").innerHTML = sentence;
}