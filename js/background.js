var backgroundFilter = document.querySelector('.background-filter');

var gradientSize = 40;


function updateBackground () {
    backgroundFilter.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + (event.clientY - 70) + 'px, rgba(159,0,191,0.9) 0, #4D4FA7 ' + gradientSize + '%)';
}

function onMouseMove () {
    updateBackground();
}

function onMouseDown () {
    gradientSize = 20;
    updateBackground();
}

function onMouseUp () {
    gradientSize = 40;
    updateBackground();
}

document.addEventListener('mousemove', onMouseMove);

document.addEventListener('mousedown', onMouseDown);

document.addEventListener('mouseup', onMouseUp);