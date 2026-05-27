function changeText() {
    var str1 = "This is a test";
    var str2 = "This is a test2";
    var element = document.getElementById("myStrings");

    element.textContent = str1 + "" + str2;

}