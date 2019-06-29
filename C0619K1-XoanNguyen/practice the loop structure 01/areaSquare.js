function areaSquare() {
    let adgeA = parseFloat(document.getElementById("edge").value);
    let areaS = adgeA * 4;
    document.getElementById("areaS").innerHTML = "Area is " + areaS + "m&#178";
}