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