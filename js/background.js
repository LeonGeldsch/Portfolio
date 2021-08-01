var backgroundFilter = document.querySelector('.background-filter');


function onMouseMove(event) {
    backgroundFilter.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(159,0,191,0.9) 0, #4D4FA7 40%)';
}

document.addEventListener('mousemove', onMouseMove);