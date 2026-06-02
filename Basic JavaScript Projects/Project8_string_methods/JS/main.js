function full() { //concat method practice
    let part_1 = "I have ";
    let part_2 = "made this into ";
    let part_3 = "a complete sentence.";
    let Whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("whole").innerHTML = Whole_sentence;
}

function slice_Method() { //function to display certain words as slice method
    let Sentence = "Work Hard, Play Hard makes a beautiful life.";
    let Section = Sentence.slice(28,43);
    document.getElementById("Slice").innerHTML = Section;
}

function Caps() { //learning uppercase method
    let text = document.getElementById("test").innerHTML;
    document.getElementById("test").innerHTML = text.toUpperCase();
}

let text = "Please locate where 'Watch' occurs"; //search method
let index = text.search("Watch");
document.getElementById("find").innerHTML = index;

function string_Method() { //changing number to a string method
    let X = 100;
    document.getElementById("Nums_string").innerHTML = X.toString();
}

function precise_Method() { // practicing precision method
    let X = 12567.1234567981729;
    document.getElementById("Precise").innerHTML = X.toPrecision(10);
}

let num = 5.653859; //using to fixed method to round numbers
let n = num.toFixed();
document.getElementById("round").innerHTML = n;

let nm = 20;
let net = nm.valueOf();
document.getElementById("prime").innerHTML = net;