function Ride_Function() {
    var Height,Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"you are too short":"you are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}
//keywords and constructors
function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Cecillia=new Vehicle("VW","Pisat",2017,"White");
var Derek=new Vehicle("Ford","F-150",1983,"Red");
function myfunction() {
    document.getElementById("keywords_and_constructors").innerHTML="Cecillia drives a "+Cecillia.Vehicle_Color+"-colored "+Cecillia.Vehicle_Model+" manufactured in "+Cecillia.Vehicle_year;
}//"Vehicle()" is an object constructor

function Shoes(size,color) {
    this.Shoes_size=size;
    this.Shoes_color=color;
}
var running=new Shoes(12,"black-grey");
var sandles=new Shoes(9,"red with brown bottom");
var boots=new Shoes(12.5,"brown");
function shoes() {
    document.getElementById("List").innerHTML="running shoes, size "+running.Shoes_size+" that are "+running.Shoes_color;
}
function Hope() {
    document.getElementById("Nest").innerHTML=Count();
    function Count() {
        var Starting_Point=9;
        function Plus_one(){Starting_point+=1;}
        Plus_one();
        return Starting_Point;
        }
}