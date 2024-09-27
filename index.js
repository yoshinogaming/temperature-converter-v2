let riwayatKonversi = [];

function konversiSuhu() {
    const inputSuhu = parseFloat(document.getElementById("inputSuhu").value);
    const inputIndeks = document.getElementById("inputIndeks").value;
    let resultText = "";

    if (inputIndeks === "C") {
        resultText += `${inputSuhu.toFixed(3)}° Celcius :<br>`;
        resultText += `Reamur     = ${(inputSuhu * 4 / 5).toFixed(3)}° R<br>`;
        resultText += `Fahrenheit = ${((inputSuhu * 9 / 5) + 32).toFixed(3)}° F<br>`;
        resultText += `Kelvin     = ${(inputSuhu + 273).toFixed(3)}° K<br>`;
    } else if (inputIndeks === "R") {
        resultText += `${inputSuhu.toFixed(3)}° Reamur :<br>`;
        resultText += `Celcius    = ${(inputSuhu * 5 / 4).toFixed(3)}° C<br>`;
        resultText += `Fahrenheit = ${((inputSuhu * 9 / 4) + 32).toFixed(3)}° F<br>`;
        resultText += `Kelvin     = ${((inputSuhu * 5 / 4) + 273).toFixed(3)}° K<br>`;
    } else if (inputIndeks === "F") {
        resultText += `${inputSuhu.toFixed(3)}° Fahrenheit :<br>`;
        resultText += `Celcius    = ${((5 / 9) * (inputSuhu - 32)).toFixed(3)}° C<br>`;
        resultText += `Reamur     = ${(4 / 9 * (inputSuhu - 32)).toFixed(3)}° R<br>`;
        resultText += `Kelvin     = ${((5 / 9) * (inputSuhu - 32) + 273).toFixed(3)}° K<br>`;
    } else if (inputIndeks === "K") {
        resultText += `${inputSuhu.toFixed(3)}° Kelvin :<br>`;
        resultText += `Celcius    = ${(inputSuhu - 273).toFixed(3)}° C<br>`;
        resultText += `Reamur     = ${(4 / 5 * (inputSuhu - 273)).toFixed(3)}° R<br>`;
        resultText += `Fahrenheit = ${((9 / 5) * (inputSuhu - 273) + 32).toFixed(3)}° F<br>`;
    } else {
        resultText = "Indeks skala suhu yang anda masukkan tidak terdaftar di program kami.";
    }
    
    document.getElementById("result").innerHTML = resultText;
    
    // Simpan riwayat konversi
    riwayatKonversi.push(resultText);
    tampilkanRiwayat();
}

function tampilkanRiwayat() {
    const riwayatDiv = document.getElementById("riwayat");
    riwayatDiv.innerHTML = ""; // Kosongkan dulu

    riwayatKonversi.forEach((item, index) => {
        riwayatDiv.innerHTML += `<div class="riwayat-item">${index + 1}. ${item}</div><br>`;
    });
}

function toggleRiwayat() {
    const riwayatDiv = document.getElementById("riwayatContainer");
    if (riwayatDiv.style.display === "none") {
        riwayatDiv.style.display = "block";
    } else {
        riwayatDiv.style.display = "none";
    }
}
