function ractangularArea() {
    let adgeA = parseFloat(document.getElementById("edgeA").value);
    let adgeB = parseFloat(document.getElementById("edgeB").value);
    let areaRactangular = adgeA * adgeB;
    document.getElementById("areaR").innerHTML = "Ractangular area is " + areaRactangular + "m&#178";
}