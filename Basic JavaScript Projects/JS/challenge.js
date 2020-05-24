function Vote() {
    var Age,Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age<18) ? "you are not old enough":"Congratulations you are old enough";
    document.getElementById("vote").innerHTML=Can_vote+" to vote.";
}