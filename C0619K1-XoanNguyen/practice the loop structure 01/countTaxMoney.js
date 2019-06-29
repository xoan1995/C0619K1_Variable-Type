function TienThueLamTron(luongThang, thueSuat) {
    let tienThue = luongThang * thueSuat;
    let tienThuelamtron = Math.round(tienThue * 1000) / 1000;
    alert("Bạn được đóng " + tienThuelamtron + " VNĐ cho Nhà nước");
}

function countTaxMoney() {
    let luongThang = parseInt(prompt("Nhập lương tháng vào đây"));
    if (luongThang <= 0) {
        alert('luong phai lon hon 0')
    }
    if (luongThang > 80000000) {
        TienThueLamTron(luongThang, 0.35);
    }
    if (luongThang > 52000000 && luongThang <= 80000000) {
        TienThueLamTron(luongThang, 0.3);
    }
    if (luongThang > 32000000 && luongThang <= 52000000) {
        TienThueLamTron(luongThang, 0.25);
    }
    if (luongThang > 18000000 && luongThang <= 32000000) {
        TienThueLamTron(luongThang, 0.2);
    }
    if (luongThang > 10000000 &&luongThang <= 18000000) {
        TienThueLamTron(luongThang, 0.15);
    }
    if (luongThang > 5000000 && luongThang <=10000000) {
        TienThueLamTron(luongThang, 0.1);
    }
    if (luongThang >0 && luongThang <=5000000) {
        TienThueLamTron(luongThang, 0.05);
    }

    //     TienThueLamTron(0.15);
}