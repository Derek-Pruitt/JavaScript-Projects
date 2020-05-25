var A=  "My name is Derek<br>"//assigning a variable
document.write(A);//displaying string

function mine() {
    var B="this is a local varabile";
    document.getElementById("local").innerHTML=B;
}
function Mine() {
    console.log(document.getElementById("opps").innerHTML=B);
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
function Check() {//checking length of character input
    Name=document.getElementById("Name").value;
    if (Name.length>=3) {
        namel="Thank you.";
    }   
    else {
        namel="please enter your full name.";
    }
    document.getElementById("Thanks").innerHTML=namel;
}
//code for else if from step 144
function Time_function() {
    var Time=new Date().getHours();
    if (Time<12==Time>0) {
        Reply="it is morning time!";
    }
    else if (Time>12==Time<18) {
        Reply="it is the afternoon.";
    }
    else {
        Reply="it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}