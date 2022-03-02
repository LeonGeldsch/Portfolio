// geting canvas by Boujjou Achraf
var c = document.getElementById("matrix-background");
var ctx = c.getContext("2d");
var body = document.querySelector('body');

//making the canvas full screen
c.height = body.getBoundingClientRect().height;
c.width = body.getBoundingClientRect().width;

//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}艾诶娜娜吾勒艾迪哦伊娜哦";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = -1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = backgroundFillColor;
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = 'rgba(0, 143, 17, 1)';//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];

        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (running) {
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            if (drops[i] !== -1 || Math.random() > 0.975) {
                //incrementing Y coordinate
                drops[i]++;
            }
        } else {
            drops[i]++;
        }
    }
}

let interval = setInterval(draw, 35);
let loaded = false;
let running = true;
let backgroundFillColor = "rgba(0, 0, 0, 0.05)";

function stopMatrix() {
    if (loaded) {
        running = false;
        //backgroundFillColor = "rgba(0, 0, 0, 0.1)"
        setTimeout(()=>{
            c.style.opacity = 0;
            c.style.pointerEvents = 'none';
        }, 4000);
    } else {
        setTimeout(stopMatrix, 1000);
    }
}

function setLoaded() {
    loaded = true;
}

setTimeout(stopMatrix, 1000);

window.addEventListener('load', setLoaded);