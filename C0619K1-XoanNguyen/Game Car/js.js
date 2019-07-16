
let vungChoi;
let chuongNgaiVatCuaToi = [];
let diemCuaToi;

function startGame() {
    vungChoi = new component(30, 30, "red", 10, 120);
    diemCuaToi = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.crashWith = function(otherobj) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < chuongNgaiVatCuaToi.length; i += 1) {
        if (vungChoi.crashWith(chuongNgaiVatCuaToi[i])) {
            myGameArea.stop();
            return;
        }
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        chuongNgaiVatCuaToi.push(new component(10, height, "green", x, 0));
        chuongNgaiVatCuaToi.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < chuongNgaiVatCuaToi.length; i += 1) {
        chuongNgaiVatCuaToi[i].speedX = -1;
        chuongNgaiVatCuaToi[i].newPos();
        chuongNgaiVatCuaToi[i].update();
    }
    diemCuaToi.text="SCORE: " + myGameArea.frameNo;
    diemCuaToi.update();
    vungChoi.newPos();
    vungChoi.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {
    vungChoi.speedY = -1;
}

function movedown() {
    vungChoi.speedY = 1;
}

function moveleft() {
    vungChoi.speedX = -1;
}

function moveright() {
    vungChoi.speedX = 1;
}

function clearmove() {
    vungChoi.speedX = 0;
    vungChoi.speedY = 0;
}
