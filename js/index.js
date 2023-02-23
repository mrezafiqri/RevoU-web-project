// Nama
    var name = prompt("Masukan nama kamu");
    document.getElementById("nama").innerText = name;

// SlideSHow


var slideIndex = 1;
    showDivs(slideIndex);
        
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
        
    function showDivs(n) {
        var i;
        var imgList = document.getElementsByClassName("img-slideshow");
        if (n > imgList.length) slideIndex = 1;
        else if(n < 1) slideIndex = imgList.length;
        
        for(i = 0; i < imgList.length; i++) {
            imgList[i].style.display = "none";
        }
        // 123
        // 012
            imgList[slideIndex - 1].style.display = "block";
        }
        
        // ini untuk foto geser otomatis
        setInterval(() => {
            plusDivs(1);
        }, 1500);

// Form

function validateForm() {
        
    // Form untuk menatakan nilainya
    var name = document.forms["message-form"]["full-name"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;
    document.getElementById("sender-full-name").inertText = name;
    
    // CATATAN : untuk cek data apakah masuk di inspect consule
    // console.log ({ name, date, gender, messages });

    // Untuk menambahkan conditional agar nilai k3 4 di atas tidak boleh kosong
    // Ini adalah VALIDASI
    if(name == "" || date == "" || gender == "" || messages == "") {
        alert("Input tidak boleh kosong");
        return false;
    }

    // Untuk bagian memindahkan nilai formnya ke value
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = date;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
    return false;
}
