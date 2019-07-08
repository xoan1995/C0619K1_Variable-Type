function showColor() {
    {
        let myColor = ['Red', 'Green', 'White', 'Black'];
        console.log(myColor.toString());
        console.log(myColor.join());
        console.log(myColor.join('+'));
    }
    for (let x = 1; x < str.length; x++) {
        if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
            result.push('-', str[x]);
        } else {
            result.push(str[x]);
        }
    }
    console.log(result.join(''));

}

function evenNumber() {
    const num = window.prompt();
    const str = num.toString();
    const result = [str[0]];

    for (let x = 1; x < str.length; x++) {
        if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
            result.push('-', str[x]);
        } else {
            result.push(str[x]);
        }
    }
    console.log(result.join(''));
}

function transfeLetters() {
    let str = window.prompt("Nhap chuoi ky tu vao day");
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for (let x = 0; x < str.length; x++) {
        if (upper.indexOf(str[x]) !== -1) {
            result.push(str[x].toLowerCase());
        } else if (lower.indexOf(str[x]) !== -1) {
            result.push(str[x].toUpperCase());
        } else {
            result.push(str[x]);
        }
    }
    console.log(result.join(''));

}
function checkWord() {
    let str= window.prompt("Nhap chuoi vao day");
    let result=[];
    for(let i=0; i< str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            result.push(str[i].toLowerCase());
        }else{
            result.push(str[i].toUpperCase());
        }
    }
    document.write(result.join(''));
}