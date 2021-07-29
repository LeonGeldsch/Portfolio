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
    goRight();
});

previousButton.addEventListener('click', ()=> {
    goLeft();
});


function goLeft () {
    index--;
    checkIndex();

    let left = document.querySelector('.slideshow-item.left');
    let active = document.querySelector('.slideshow-item.active');
    let right = document.querySelector('.slideshow-item.right');
    let hidden;

    if (!right.parentNode.nextElementSibling) {
        hidden = allSlideshowItems[0];
    } else {
        hidden = right.parentNode.nextElementSibling.firstChild;
    }

    left.classList.remove('left');
    left.classList.add('hidden');
    left.style.zIndex = "0";

    active.classList.remove('active');
    active.classList.add('left');
    active.style.zIndex = "1";

    right.classList.remove('right');
    right.classList.add('active');
    right.style.zIndex = "3";

    hidden.classList.remove('hidden');
    hidden.classList.add('right');
    hidden.style.zIndex = "2";
}


function goRight () {
    index++;
    checkIndex();

    let left = document.querySelector('.slideshow-item.left');
    let active = document.querySelector('.slideshow-item.active');
    let right = document.querySelector('.slideshow-item.right');
    let hidden;

    if (!left.parentNode.previousElementSibling) {
        hidden = allSlideshowItems[allSlideshowItems.length-1];
    } else {
        hidden = left.parentNode.previousElementSibling.firstChild;
    }

    left.classList.remove('left');
    left.classList.add('active');
    left.style.zIndex = "3";

    active.classList.remove('active');
    active.classList.add('right');
    active.style.zIndex = "1";

    right.classList.remove('right');
    right.classList.add('hidden');
    right.style.zIndex = "0";

    hidden.classList.remove('hidden');
    hidden.classList.add('left');
    hidden.style.zIndex = "2";

}