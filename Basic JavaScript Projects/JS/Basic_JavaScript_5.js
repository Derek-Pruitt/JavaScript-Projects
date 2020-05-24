document.write(typeof"word");
document.write(typeof 3);
function Testing() {//isNaN("")'not a number'
    document.getElementById("False").innerHTML=isNaN('007');
}
function TE() {
    document.getElementById("NaN").innerHTML=0/0;
}
function Te() {//isNaN("")'not a number'
    document.getElementById("True").innerHTML=isNaN('This is not a number');
}

document.write(2E310);//infinity

document.write(-3E310);//-infinity

function Inf() {//displaying a positive infinity
    var K=92.26734736472364264893246E310
    document.getElementById("Infinity").innerHTML=K;
}

function NInf() {//displaying a negitive infinity
    var J=-63.9834723746E345
    document.getElementById("NInfinity").innerHTML=J;
}
document.write(10>2);//boolean logic-true or false
document.write(10<2);

console.log(2+2);//displays in the developer tools under console

document.write("thirteen"+20);//type coercion

console.log(20<2[document.write]);//showing false in the console

document.write(10+20==30);//checking for equality
document.write(10+20==20);

//=== used to instruct to check if data on right equal to left and the same type of data as that on the right(true or false)
x=10;
y=10;
document.write(x===y);
o=10;
p="20";
document.write(o===p);
Mi="10";
Mo=10;
document.write(Mi===Mo);
Ja=10;
Js=11;
document.write(Ja===Js);
//logical operators AND-&&/OR-||/NOT-!
document.write(10>5&&10>4);
document.write(10<2&&10>9);
document.write(4>10||10>9);
document.write(19>20||10>11);
function not_function() {
    document.getElementById("Not").innerHTML=!(5>10);
}
function not1_function() {
    document.getElementById("Not1").innerHTML=!(10>9);
}
//ternary operators/Ternary means “made up of three parts.” A ternary operator operates on three values. It can be used to assign a value to a variable based on a condition. This is also referred to as a conditional operator in that it assigns a value to a variable based on a condition
document.write(Bigger=(5>1)?"left number is bigger":"Right number is bigger");
//In this code, we said that if it’s true that 5 is bigger than 1, display “Left number is bigger.” If you change the numbers or flip the symbol to <, we can change the outcome of our code to false. As a reminder, the document.write method is not a part of the syntax of the ternary operator, it is used to write information to the document.
