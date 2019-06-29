function checkAge() {
    let numberInput = parseInt(prompt("How old are you? "));
    let ageMax = 120;
    if (numberInput <= 120){
        if (numberInput < 0) {
            let numberInputRepeat = parseInt(prompt("\"Enter the number year old here repeat.Please!\""));
            numberInputRepeat;
            if (numberInputRepeat < 30) {
                alert("You are very young ")
            } else {
                alert("You are " + numberInputRepeat + " year old");
            }
        } else {
            alert("You are " + numberInput + " year old");
        }
    }else{
        alert("OH MY GOD! You are too old ");
    }
}