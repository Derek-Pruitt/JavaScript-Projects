function Snack_choice() {
    var snack_output;
    var snacks=document.getElementById("Snack").value;
    var snack_string=" is a very healthy choice!";
    switch(snacks) {
        case "Apple":
            snack_output="Apple"+snack_string;
        break;
        case "Banana":
            snack_output="Banana"+snack_string;
        break;
        case "Mango":
            snack_output="Banana"+snack_string;
        break;
        case "Small salad":
            snack_output="Small salad"+snack_string;
        break;
        case "Granola":
            snack_output="Granola"+snack_string;
        break;
        default:
            snack_output="Please enter a snack exactly as written on the list above.";
    }
    document.getElementById("Result").innerHTML=snack_output;
}

function Tele() {
    var A=document.getElementsByClassName("Diminsion_A");
    A[0].innerHTML="The default time is 4 seconds.";
}
var c=document.getElementById("plate");
var ctx=c.getContext("2d");
//gradient
var grd=ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"limegreen");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,80);

var c = document.getElementById("purple");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);