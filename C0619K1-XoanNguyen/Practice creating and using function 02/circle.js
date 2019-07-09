//Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
const PI=3.14;
function areaCircle(radius) {
    radius=parseInt(radius);
    document.getElementById("outputArea").innerHTML= radius*radius*PI;
    document.getElementById("outputCircumference").innerHTML= radius*2*PI;
}