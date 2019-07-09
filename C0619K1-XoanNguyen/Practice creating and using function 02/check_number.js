//Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
function checkNumber(number) {
    number=parseInt(number);
    if(number){
        document.getElementById("result").innerHTML= number+" khong phai la ky tu";
        return true;
    }else{
        document.getElementById("result").innerHTML=" la ky tu";
        return false;
    }
}