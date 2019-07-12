let Circle = function (radius) {

    this.radius = radius;
    this.color = color;

    //   xay dung phuong thuc tra ve ban kinh cua hhinh tron
    this.getRadius = function () {
        return radius;
    };
    //xay dung phong thuc tinh dien tich hinh tron
    this.getArea = function () {
        return Math.PI * radius * radius;
    };
};
//su dung lop vua tao , tao doi tuong hinh tron voi ban kinh la 2
let circle = new Circle(2);
//truy cap phuong thuc cua lop hinh tron vua tao va gan cho cac bien radius , area
let radius = circle.getRadius();
let area = circle.getArea();
//hien thi ra ban kinh va dien tich
alert("radius" + radius + "; area" + area);
