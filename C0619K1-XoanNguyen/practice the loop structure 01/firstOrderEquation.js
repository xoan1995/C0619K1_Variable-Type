function giaiPhuongTrinhBacNhat() {
    let numberA = parseInt(document.getElementById("soA").value);
    let numberB = parseInt(document.getElementById("soB").value);
    if (numberA === 0) {
        document.getElementById("output").innerHTML = "Phương trình vô nghiệm";
    } else {
        if (numberB === 0) {
            document.getElementById("output").innerHTML = "Phương trình có nghiệm x= 0";
        } else {
            let x = -numberB / numberA;
            document.getElementById("output").innerHTML = "Phương trình có nghiệm x = " + x;

        }
    }
}