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