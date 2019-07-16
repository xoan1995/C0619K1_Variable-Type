//ve mot hinh tron co ban voi kich thuoc co dinh
let canvas = document.getElementById('myCanvas');

function ClassCircle(x, y, radius, color, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
    this.radius = radius;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    };
    let dx=this.speed;
    let dy=this.speed;

    this.move = function () {
        if (this.x > canvas.width-this.radius) {
            dx = -this.speed;
        }
        if (this.y > canvas.height-this.radius) {
            dy = -this.speed;
        }
        if (this.x < 0+this.radius) {
            dx = this.speed;
        }
        if (this.y < 0+this.radius) {
           dy = this.speed;
        }

        this.x += dx;
        this.y += dy;

    };

}

function getRandomHex() {
    return Math.floor(Math.random() * 255);//mau ngau nhien
}

function getRandomColor() {
    let green = getRandomHex();
    let blue = getRandomHex();
    let red = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +
        ")";
}

let ctx = document.getElementById("myCanvas").getContext("2d");
let box = [];

function createCircle() {

    let radius = Math.floor(Math.random() * 80);//ban kinh ngau nhien
    let speed=Math.floor(Math.random()*5+3);
    let color = getRandomColor();

    let x = Math.floor(Math.random() *( canvas.width-radius-radius+1)+radius);//toa do x ngau nhien
    let y = Math.floor(Math.random() * (canvas.height-radius-radius+1)+radius);//toa do y ngau nhien
    let circle = new ClassCircle(x, y, radius, color,speed );
    circle.draw();
    box.push(circle);
}

//ve 30 hinh tron xuat hien ngau nhien
function createMultipleCircle() {
    for (let i = 0; i < 25; i++) {
        createCircle();
    }
}

createMultipleCircle();

function showBox() {
    for (let i = 0; i < box.length; i++) {
        box[i].draw();
        box[i].move();
    }
}


// setInterval(function () {
//     ctx.clearRect(0, 0, 1340, 600);
//     showBox();
// }, );
function diplayCircle(){
    ctx.clearRect(0, 0, 1340, 600);
    showBox();

    requestAnimationFrame(diplayCircle);

}

diplayCircle();

