var allSlideshowItems = document.querySelectorAll('.slideshow-item'),
    previousButton = document.querySelector('.previous-button'),
    nextButton = document.querySelector('.next-button'),
    index = 3;


function checkIndex () {
    if (index >= allSlideshowItems.length) {
        index = 0;
    }
    if (index < 0) {
        index = allSlideshowItems.length-1;
    }
}

let clicks = 0;

nextButton.addEventListener('click', ()=> {
    goLeft();
});

previousButton.addEventListener('click', ()=> {
    goRight();
});


function goLeft () {
    index--;
    checkIndex();

    let left = document.querySelector('.slideshow-item.left');
    let active = document.querySelector('.slideshow-item.active');
    let right = document.querySelector('.slideshow-item.right');
    let hidden;

    if (!right.nextElementSibling) {
        hidden = allSlideshowItems[0];
    } else {
        hidden = right.nextElementSibling;
    }

    left.style.zIndex = "0";
    left.classList.remove('left');
    left.classList.add('hidden');

    active.style.zIndex = "1";
    active.classList.remove('active');
    active.classList.add('left');

    right.style.zIndex = "3";
    right.classList.remove('right');
    right.classList.add('active');

    hidden.style.zIndex = "2";
    hidden.classList.remove('hidden');
    hidden.classList.add('right');
}


function goRight () {
    index++;
    checkIndex();

    let left = document.querySelector('.slideshow-item.left');
    let active = document.querySelector('.slideshow-item.active');
    let right = document.querySelector('.slideshow-item.right');
    let hidden;

    if (!left.previousElementSibling) {
        hidden = allSlideshowItems[allSlideshowItems.length-1];
    } else {
        hidden = left.previousElementSibling;
    }

    left.style.zIndex = "3";
    left.classList.remove('left');
    left.classList.add('active');

    active.style.zIndex = "1";
    active.classList.remove('active');
    active.classList.add('right');

    right.style.zIndex = "0";
    right.classList.remove('right');
    right.classList.add('hidden');

    hidden.style.zIndex = "2";
    hidden.classList.remove('hidden');
    hidden.classList.add('left');
}