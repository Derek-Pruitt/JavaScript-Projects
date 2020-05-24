function Dic() {
    var car= {// dicitionary
        make:"ford",
        color:"red",
        doors:"two door",
        engein:"v8",
        passangers:4,
        sound:"vroooom!"
    };
    document.getElementById("dictionary").innerHTML = car.sound;
}
function DOOM() {
    var BooM= {// dicitionary
        make:"chevy",
        doors:"blue",
        doors:"four door",
        engein:"v6",
        passangers:4,
        sound:"peter pater!"
    };
    delete BooM.sound;
    document.getElementById("ictionary").innerHTML = BooM.sound;
}