function check_chuoi_doi_xung(chuoi) {
    for (i = 0, j = chuoi.length; i < j; i++, j--) {
    }
    if (chuoi.substr(i, 1) != chuoi.substr(j, 1)) {
        return " chuoi khong doi xung ";
    }
    return " chuoi nay doi xung ";
}
let chuoi="bbbb";
alert(check_chuoi_doi_xung(chuoi));