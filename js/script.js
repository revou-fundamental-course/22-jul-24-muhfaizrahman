// Ini Javascript

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('image-place');
    console.log(listImage);

    // Algoritma untuk mereset index dari slidenya
    if (n > listImage.length) { 
        indexSlide = 1;
    }

    // Algoritma untuk menghilangkan semua gambar
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    // Algoritma untuk memunculkan 1 gambar saja
    listImage[indexSlide - 1].style.display = 'block';
}

// Algoritma untuk auto slidenya
setInterval(() => nextSlide(1), 3000);