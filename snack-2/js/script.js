var triangolo ={
    base : 10 , 
    altezza : 15
    

}
var ipotenusa =Math.sqrt(Math.pow(triangolo.base,2) +Math.pow(triangolo.altezza,2))
var perimetro = ipotenusa + triangolo.base + triangolo.altezza;
console.log(perimetro)
var area = (triangolo.base * triangolo.altezza)/2;


console.log ("area", area);

