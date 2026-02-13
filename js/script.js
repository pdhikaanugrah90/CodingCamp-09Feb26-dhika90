// BAGIAN WELCOME //

document.addEventListener("DOMContentLoaded", function () {

    const masuk = document.getElementById("welcome");
    const tblMasuk = document.getElementById("tombolOk");
    const masukNama = document.getElementById("inputNama");
    const masukHai = document.getElementById("sayHai")

    tblMasuk.addEventListener("click", function () {

        let nama = masukNama.value.trim();

        if (nama === "") {
            alert("Tolong masukan nama anda");
        } else {
            masukHai.innerText = "Hi, " + nama ;
            masuk.style.display = "none";
        }
    });
});

// BAGIAN VALIDASI PESAN //

document.getElementById("formPesan").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("nama").value;
    let birthdate = document.getElementById("ultah").value;
    let message = document.getElementById("pesanText").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (name === "" || birthdate === "" || message === "" || !gender) {
        alert("Tolong semua form nya disii!");
        return;
    }

    document.getElementById("result").innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Birthdate:</strong> ${birthdate}</p>
        <p><strong>Gender:</strong> ${gender.value}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    document.getElementById("messageForm").reset();
});