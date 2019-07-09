function convertFeetToMeters(valueNum) {
    valueNum=parseInt(valueNum);
    let result=valueNum*3.279;
    let lamTronResult= Math.round(result * 1000)/1000;
document.getElementById("outputMeters").innerHTML=lamTronResult+" m";
}
