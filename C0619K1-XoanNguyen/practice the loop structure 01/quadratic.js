function giaiPhuongTrinhBacHai() {
    let numberA = parseInt(document.getElementById("number1").value);
    let numberB = parseInt(document.getElementById("number2").value);
    let numberC = parseInt(document.getElementById("number3").value);
    if (numberA == 0) {
        document.getElementById("PTB2").innerText = "Đây không phải phương trình bậc hai"
    } else {
        let delta = numberB * numberB - 4 * numberA * numberC;
        console.log(delta);
        if (delta == 0) {
            let x = -numberB / (2 * numberA);
            document.getElementById("PTB2").innerText = "Phương trình có nghiệm kép" + x;
        } else if (delta < 0) {
            document.getElementById("PTB2").innerText = "Phương trình vô nghiệm ";

        } else{
            let x1 = ((-numberB) + Math.sqrt(delta)) / (2 * numberA);
            let x2 = (-(numberB) - Math.sqrt(delta)) / (2 * numberA);
            document.getElementById("PTB2").innerText = "Phương trình bậc hai có nghiệm kép là :" + x1 + x2;

        }
    }
}