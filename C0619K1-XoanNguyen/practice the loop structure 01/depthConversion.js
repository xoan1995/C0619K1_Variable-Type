function depthConversion() {
    let metInput = parseFloat(document.getElementById("met").value);
    let feetOutput = metInput * 3.2808;
    document.getElementById("feet").innerHTML = metInput + "m bằng " + feetOutput + "feet";
}