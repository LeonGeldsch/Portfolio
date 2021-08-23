var frontImages = document.querySelectorAll('.left img, .active img, .right img');
var backImages = document.querySelectorAll('.hidden img');

function loadImages() {
    for (let i = 0; i < frontImages.length; i++) {
        if (frontImages[i].getAttribute('data-src')) {
            frontImages[i].setAttribute('src', frontImages[i].getAttribute('data-src'));
        }
    }
    for (let i = 0; i < backImages.length; i++) {
        if (backImages[i].getAttribute('data-src')) {
            backImages[i].setAttribute('src', backImages[i].getAttribute('data-src'));
        }
    }
}


window.onload = loadImages();