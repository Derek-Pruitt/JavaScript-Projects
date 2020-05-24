

function myFunction() {//addition pratice
    var addition= 2+2;
    document.getElementById("math").innerHTML=addition;
}
function sub() {//subtraction  pratice
    var subtraction=612-432;
    document.getElementById("minus").innerHTML="612-432="+subtraction;

}
function division() {//division  pratice
    var divide=2638/36;
    document.getElementById("divis").innerHTML="2638/36="+divide;
}
function multiply() {//multiplying  pratice
    var multiply=34*9;
    document.getElementById("multi").innerHTML="34*9="+multiply;
}
function moremath() {//algerbra  pratice
    var simpmath=(1+96)*645/73 -8;
    document.getElementById("advan").innerHTML="(1+96)*645/73 -8="+simpmath;
}
function modulus() {// modulus operator  pratice
    var simp=37333%6;
    document.getElementById("rem").innerHTML="when you divide 37333 by 6 you have a remainder of: "+simp;
}
function negation_operator() {// negation or showing opisit
    var x=23;
    document.getElementById("neg").innerHTML=-x;
}
function A() {
    var A=10;//increment operator
    A++;
    document.getElementById("add").innerHTML=A;
}
function B() {
    var B=12;//decerment operator
    B--;
    document.getElementById("godown").innerHTML=B;
}
window.alert(Math.random());//for random number between 0 and 1
window.alert(Math.random() * 100);//for random of 0 to 100

document.getElementById("power").innerHTML=Math.pow(12,5);//math object
