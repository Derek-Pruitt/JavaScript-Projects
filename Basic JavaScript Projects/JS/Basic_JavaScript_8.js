function Story() {
    var one="Money Mayhem<br> ";
    var two="Play through Underground Mode as you would usually do, unlocking a good amount of cars and performance parts. ";
    var three="This is just your initial investment (or 'seed money') for the trick.<br> ";
    var four="Save the game. Then buy and modify the VW Golf to the maximum and trade it in for the Honda S2000 for a gain of about $1500.<br> Take the Honda to the garage and demodify it (strip the parts) and trade the Honda for a Skyline (and a loss of about $3000).<br> ";
    var five="With the Skyline, you can now trade for the VW Golf for a gain of about $10,000. You can repeat this car laundering until you have enough cash for your dream machine.";
    var Wholecode=one.concat(two,three,four,five);//using concat() to concatenates two or more strings
    document.getElementById("story").innerHTML=Wholecode;
}
//slice() method
function slice_method() {
    var sentence="a massive and extremely remote celestial object, emitting exceptionally large amounts of energy, and typically having a starlike image in a telescope. It has been suggested that quasars contain massive black holes and may represent a stage in the evolution of some galaxies.";
    var section=sentence.slice(150);
    document.getElementById("slice").innerHTML=section;
}
//toUpperCase() method
function Cap() {
    var str = "HeLlO ThEre.";
    var res = str.toUpperCase();
    document.getElementById("hi").innerHTML=res;
}
//toLowerCase() method
function Lower() {
    var str="HeLlO ThEre.";
    var res=str.toLowerCase();
    document.getElementById("Hi").innerHTML=res;
}
//search() method
var str="a massive and extremely remote celestial object, emitting exceptionally large amounts of energy, and typically having a starlike image in a telescope. It has been suggested that quasars contain massive black holes and may represent a stage in the evolution of some galaxies.";
var search=str.search("black holes");
document.getElementById("se").innerHTML=search;
//number methods/toString()
function string_method() {
    var x=182;
    document.getElementById("Num").innerHTML=x.toString();
}
//toPrecision() method
function precision_method() {
    var x=27388.87487242947257054;
    document.getElementById("Precision").innerHTML=x.toPrecision(7);
}
//toFixed() method
function Fixed_method() {
    var num=18.3749823746;
    document.getElementById("fix").innerHTML=num.toFixed(3);
}
//valueOf() method/String
function Value_of() {
    var str= "Hello again.";
    document.getElementById("val").innerHTML=str.valueOf();
}
//valueOf() method/array
function Value_array() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("ary").innerHTML = fruits.valueOf();
}