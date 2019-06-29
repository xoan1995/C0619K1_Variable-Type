function temperatureConverter() {
    let celsius = parseFloat(document.getElementById("doC").value);
    let fahrenheit = (celsius * 1.8) + 32;
    document.getElementById("ketqua").innerHTML = celsius + "&#176" + "C bằng " + fahrenheit + "&#176 F"
}