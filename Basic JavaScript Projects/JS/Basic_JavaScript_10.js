function Call_Loop() {
    var Digit="";
    var x=1;
    while (x<33) {//while condition
        Digit +="<br>"+x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}
function Length() {
    var str = "Hello World!";
    var n = str.length;//getting value of words
    document.getElementById("wordlengthvalue").innerHTML = n;
  }
  // FOR LOOP
 var Instruments=["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"];
 var Content="";
 var y;
 function for_Loop() {
     for (y = 0; y < Instruments.length; y++) {
         Content += Instruments[y] + "<br>";
     }
     document.getElementById("List_of_Instruments").innerHTML=Content;
 }
 //array
 function array_function() {
     var food=[];
     food[0]="Burger";
     food[1]="Frys";
     food[2]="Pizza";
     food[3]="Pasta";
     document.getElementById("Array").innerHTML="On wednessday I like to eat "+food[3]+".";
 }
 // constant 
 function constant_function() {
     const pocket_watch={size:"2.5 inch diameter", origin:"Hand made, in the USA", color:"Bronze with silver trim"};
     pocket_watch.price="$200";
     pocket_watch.size="2.25 inch diameter";
     pocket_watch.back="has a spot for a 2 inch diameter photo";
     document.getElementById("Constant").innerHTML="This watch was "+pocket_watch.origin+". In 1952. Plus it "+pocket_watch.back+" in the back. The watch is "+pocket_watch.size+".";   
}
 //Let
 function DEREK() {
 var DP="Derek Pruitt";
 document.write(DP);
 {
     let DP="Derek Justin Pruitt";
     document.write("<br>"+DP);
 }
 document.write("<br>"+DP);
}
//return statment
function Roberts_math() {
    return Math.pow(2, 5);
}
document.getElementById("EX").innerHTML=Roberts_math();
//object
let DandD= {
    Dice:["20 side","12 side", "10 side","8 side", "6 side", "4 side,<br>"],
    Note:"something to write on,<br>",
    Pen:"something to write with,<br>",
    Mind:"also dont forget to bring your imagination.",
    What_u_need: function(){
        return "This is what you will need to play Dungeon and Dragons.<br>"+this.Dice+this.Note+this.Pen+this.Mind;
    }
}
document.getElementById("DD").innerHTML=DandD.What_u_need();
// break statement
var text="";
var Count;
for (X=0;X<120;X++) {
    if (X===33) {break;}
    text+="The number is "+X+"<br>";
}
document.getElementById("Numbers").innerHTML=text;
// continue
var text="";
var I;
for (I=0; I<11; I++){
    if (I===3) {continue;}
    text+="The number is "+I+"<br>";
}
document.getElementById("continue").innerHTML=text;
