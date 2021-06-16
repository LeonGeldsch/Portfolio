gsap.registerPlugin(ScrollTrigger);

const typewriterContainer = document.querySelector('.typewriter-container');

const section2TextContainer = document.querySelector('#section2-text');

const section3TextContainer = document.querySelector('#section3-text');

const section4TextContainer = document.querySelector('#section4-text');

var welcomeText = ["Hello, I am Leon.", "A Webdeveloper from Hamburg/Germany."];

var welcomeTextSmall = ["Hello,", "I am Leon.", "A Webdeveloper from ", "Hamburg/Germany."];


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


ScrollTrigger.create({
    trigger: "#section2",
    start: "-200px",
    onEnter: ()=> {
        typewriterType(section2TextContainer, ["Continue scrolling down to see some of my projects."]); 
    },
    once: true
});

ScrollTrigger.create({
    trigger: "#section3",
    start: "-200px",
    onEnter: ()=> {
        typewriterType(section3TextContainer, ["A bedconfigurator", "I made for Weltbett.de", "Technologies:", "- HTML", "- CSS (&Bootstrap)", "- Javascript"]); 
    },
    once: true
});

ScrollTrigger.create({
    trigger: "#section4",
    start: "-200px",
    onEnter: ()=> {
        typewriterType(section4TextContainer, ["A simple snake game.", "Technologies:", "- HTML", "- CSS", "- Javascript"]); 
    },
    once: true
});

gsap.to("#bedconfig-image", {
    scrollTrigger: "#bedconfig-image",
    opacity: 1,
    duration: 4
});

gsap.to("#snake-image", {
    scrollTrigger: "#snake-image",
    opacity: 1,
    duration: 4
});





if (document.body.offsetWidth > 730) {
    typewriterType(typewriterContainer, welcomeText);
} else {
    typewriterType(typewriterContainer, welcomeTextSmall);
}

/*
const bedConfigImage = document.querySelector('#bedconfig-image-wrapper');

const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };

window.addEventListener("mousemove", e => {
    let image = { x: bedConfigImage.getBoundingClientRect().left, y: bedConfigImage.getBoundingClientRect().top }
    mouse.x = e.x;
    mouse.y = e.y;
    let angleY = 0;
    let angleX = 0;
    if (image.y-mouse.y > 180) {
        angleX = 180;
    } else if (image.y-mouse.y < -180) {
        angleY = -180;
    } else {
        angleY = image.y-mouse.y;
    }
    if (image.x-mouse.x > 180) {
        angleX = 180;
    } else if (image.x-mouse.x < -180) {
        angleX = -180;
    } else {
        angleX = image.x-mouse.x;
    }

    console.log(angleY);
    gsap.to('#bedconfig-image', {
        transform: `rotateY(${angleY/10}deg) rotateX(${angleX/10}deg)`
    });
});


(function() {
    // Init
    var container = document.getElementById("bedconfig-image-wrapper"),
        inner = document.getElementById("bedconfig-image-wrapper-inner");
  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //----------------------------------------------------
  
    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % refreshRate === 0;
    };
  
    //----------------------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //----------------------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  
    //--------------------------------------------------------
  
    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  })();
  */