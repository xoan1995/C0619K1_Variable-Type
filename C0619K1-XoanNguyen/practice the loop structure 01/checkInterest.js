function countInteres(){
    let soNgayGuiTienThuc= parseInt(prompt("Nhập số ngày gửi tiền thực vào đây"));
    let soTienGui=parseInt(prompt("Bạn gửi bao nhiêu tiền (đơn vị VNĐ)?"))
    const LAISUAT=1.5/100;
    let ngayTrongNam=360;
    if(soNgayGuiTienThuc>0){
        if(soTienGui>0){
            let tienLai = soNgayGuiTienThuc * LAISUAT / ngayTrongNam * soTienGui;
            let tienLailamtron=Math.round(tienLai * 1000)/1000;
            if(soNgayGuiTienThuc<180||soNgayGuiTienThuc==180) {
                tienLai;
                alert("Tổng tiền lãi là " + tienLailamtron + "VNĐ");
            }else{
                soTienGui=soTienGui+tienLai;
                tienLai=soNgayGuiTienThuc*LAISUAT/ngayTrongNam*soTienGui;
                alert("Tổng tiền lãi là "+tienLailamtron+"VNĐ");

            }
        }
    }else{
        alert("Nhập lại");
    }
}