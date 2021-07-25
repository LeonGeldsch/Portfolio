const ALL_PROJECTS_SECTIONS = document.querySelectorAll('.projects-headline');

const typeSpeed = 120;

var welcomeText = ["Hey, I am⠀Leon :)"];



function typewriterType (container, textArray) {
    let allLinesArray = [];
    let totalChars = 0;
    for (let j = 0; j < textArray.length; j++) {
        setTimeout(() => {
            let newLine = document.createElement('p');
            newLine.classList.add('selected-character');
            container.appendChild(newLine);
            allLinesArray.push(newLine);
            for (let i = 0; i < textArray[j].length; i++) {
                setTimeout(() => {
                    if (i === textArray[j].length-1 && j !== textArray.length-1) {
                        newLine.classList.remove('selected-character');
                    }                   
                    if (i === 0 && textArray[j][0] === "\\") {
                        newLine.style = "display: block;";
                    } else if (textArray[j][i] === "⠀") {
                        console.log("test");
                        newLine.insertAdjacentHTML('beforeend', "&nbsp;");
                    } else if (i === 0 && textArray[j][0] === "|") {
                        newLine.id = "intro-name";
                        allLinesArray.pop();
                    } else {
                        newLine.insertAdjacentHTML('beforeend', textArray[j][i]);
                    }
                }, i*typeSpeed);
            }
        }, totalChars*typeSpeed);
        totalChars += textArray[j].length;
    }
}


ALL_PROJECTS_SECTIONS.forEach(section => {
    section.addEventListener('click', ()=> {
        if (section.parentNode.classList.contains('expanded')) {
            section.parentNode.classList.remove('expanded');
        } else {
            document.querySelectorAll('.projects-section.expanded .projects-headline').forEach(section => {section.parentNode.classList.remove('expanded')});
            section.parentNode.classList.add('expanded');
        }
    });
});