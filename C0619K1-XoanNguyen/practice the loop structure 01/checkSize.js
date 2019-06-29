function checkSizeEdgeOfTriangle() {
    let sizeFirst = parseFloat(prompt("Enter the length of edge a  here"));
    let sizeSecond = parseFloat(prompt("Enter the length of edge b here"));
    let sizeThird = parseFloat(prompt("Enter length of edge c here"));
    if (sizeFirst > 0 && sizeSecond > 0 && sizeThird > 0) {
        let sum = sizeFirst + sizeSecond;
        if (sum > sizeThird) {
            sum = sizeFirst + sizeThird;
            if (sum > sizeSecond) {
                sum = sizeSecond + sizeThird;
                if (sum > sizeFirst) {
                    alert("Edges a= " + sizeFirst + "," + " b= " + sizeSecond + "," + " c= " + sizeThird + " is edges of a triangle");
                }
            }
        } else {
            alert("Is not a triangle");
        }
    }
}