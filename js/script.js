// Ini Javascript

function ValidateForm() {
    const usernameInput = document.getElementById('username-input').value;
    console.log(usernameInput);
    if (usernameInput =='') {
        alert ('Formnya mohon di isi');
    } else {
        alert ('Sukses mengirim form');
    }
}

function ValidateForm() {
    const email = document.getElementById('email').value;
    console.log(email);
    if (email =='') {
        alert ('Formnya mohon di isi');
    } else {
        alert ('Sukses mengirim form');
    }
}

let indexSlide = 1;
const listImage = document.getElementsByClassName('banner-autoslide');

showSlide();

function nextSlide () {
    showSlide(indexSlide += 1)
}

function showSlide(index) {
    // Resetter
    if (index > listImage.length) indexSlide = 1;
    console.log(indexSlide);
    hideAllslide();
    listImage[indexSlide - 1].style.display = 'block';
}

// Logic untuk menyembunyikan semua slide
function hideAllslide() {
    for (let i = 0; i <listImage.length; i++) {
        listImage[i].style.display = 'none';
    }
}

// Otomatisasinya
setInterval(() => nextSlide(), 2000);