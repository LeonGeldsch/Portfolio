const typewriterContainer = document.querySelector('.typewriter-container');

var welcomeText = ["Hello, I am Leon.", "A Webdeveloper from Hamburg/Germany.", "This is my portfolio.", "And yes I really type this fast. :)"];

console.log(welcomeText);

function typewriterType (container, textArray) {
    let totalChars = 0;
    for (let j = 0; j < textArray.length; j++) {
        setTimeout(() => {
            let newLine = document.createElement('p');
            newLine.classList.add('selected-character');
            container.appendChild(newLine);
            for (let i = 0; i < textArray[j].length; i++) {
                setTimeout(() => {
                    if (i === textArray[j].length-1 && j !== textArray.length-1) {
                        newLine.classList.remove('selected-character');
                    }
                    newLine.insertAdjacentHTML('beforeend', textArray[j][i]);
                }, i*140);
            }
        }, totalChars*140);
        totalChars += textArray[j].length;
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}  

typewriterType(typewriterContainer, welcomeText);