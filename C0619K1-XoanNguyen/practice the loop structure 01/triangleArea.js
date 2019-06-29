function triangleArea() {
    let sizeOne = parseFloat(document.getElementById("a").value);
    let sizeTrue = parseFloat(document.getElementById("b").value);
    let sizeThree = Math.sqrt(sizeOne * sizeOne - sizeTrue * sizeTrue);

    let area = (1 / 2) * (sizeTrue + sizeOne + sizeThree);
    document.getElementById("traiangle").innerHTML = "Ractangular area is " + area + "m&#178";

}