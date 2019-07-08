function translate() {
    let find= false;
    let word=window.prompt("Nhap tu can dich  vao day ");
    let vietNamese=['thị giác', 'khứu giác', 'thính giác', 'xúc giác', 'vị giác', 'cảm giác','cảnh giác'];
    let english=['sight', 'smell', 'hearing', 'touch', 'taste', 'feeling','vigilance'];
    for(let i=0;  i<english.length;i++){
        if(word===english[i]){
            document.write(vietNamese[i]);
        }
        if (word===vietNamese[i])
        {
            document.write(english[i]);
        }
        find=true;
    }
    if(!find){
        alert("khong tim thay tu can dich");
    }

}
translate();