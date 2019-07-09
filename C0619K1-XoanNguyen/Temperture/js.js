function temperatureConverter(valueNum) {
    valueNum=parseFloat(valueNum);
    let result=(valueNum-32)/1.8;
    let lamTronResult= Math.round(result * 1000)/1000;
    document.getElementById("outputCelsius").innerHTML= lamTronResult +"°C";

}
