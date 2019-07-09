//Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

let result=1;
function countFactorial(number) {
    number = parseInt(number);

    for (let i=1 ; i <= number; i++) {
        result=result*i;
    }
    document.getElementById('output').innerHTML = " of number " + number + " is " + result;

}