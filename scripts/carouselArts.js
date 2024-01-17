let cName = "carousel3D";

document.addEventListener('DOMContentLoaded', (evt) => {
    // Activate Carousel
    document.getElementById(cName).carousel();

    // Enable Carousel Indicators
    $(".item").click(function () {
        document.getElementById(cName).carousel(0);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        document.getElementById(cName).carousel("prev");
    });

    $(".right").click(function () {
        document.getElementById(cName).carousel("next");
    });
})