let start = 0
otomatis();

function otomatis() {
    const sliders = document.querySelectorAll(".image-place");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }

    if (start >= sliders.length) {
        start = 0
    }

    sliders[start].style.display = "block";
    console.log("gambar ke" +start);
    start++;

    setTimeout(otomatis, 2000);
}