var A=  "My name is Derek<br>"//assigning a variable
document.write(A);//displaying string

function mine() {
    var B="this is a local varabile";
    document.getElementById("local").innerHTML=B;
}
function Mine() {
    console.log(document.getElementById("opps").innerHTML=A);
}

//If statements
if (1<2) {
    document.write("The left number is less than the right number.");
}
function get_Date() {
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}
function Time() {
    if (new Date().getHours()<20) {
        document.getElementById("Help").innerHTML="How can I help you?";
    }
    if (new Date().getHours()>20){
        document.getElementById("Help").innerHTML="Try again tommarow.";
    }
}
function Check() {
    Name=document.getElementById("Name").value;
    if (Name.length>=3) {
        namel="Thank you.";
    }   
    else {
        namel="please enter your full name.";
    }
    document.getElementById("Thanks").innerHTML=namel;
}