var numSquares = 6;
var colors = [];
var correctColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
// REFACTOR
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to correctColor
            if(clickedColor === correctColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function reset(){
    // generate 6 new colors
    colors = generateRandomColors(numSquares);
    // pick random correct color
    correctColor = pickRandColor();
    // change color display to pickRandColor
    colorDisplay.textContent = correctColor;
    // change messageDisplay to blank string
    messageDisplay.textContent = "";
    // change the colors of the squares on the page
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    // change the h1 background color back to black
    h1.style.backgroundColor = "steelblue";
    // change the reset button to read "New Colors"
    resetButton.textContent = "New Colors";
}

// REFACTOR ^^
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     correctColor = pickRandColor();
//     colorDisplay.textContent = correctColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     correctColor = pickRandColor();
//     colorDisplay.textContent = correctColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function(){
    // // generate 6 new colors
    // colors = generateRandomColors(numSquares);
    // // pick random correct color
    // correctColor = pickRandColor();
    // // change color display to pickRandColor
    // colorDisplay.textContent = correctColor;
    // // change messageDisplay to blank string
    // messageDisplay.textContent = "";
    // // change the colors of the squares on the page
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // // change the h1 background color back to black
    // h1.style.backgroundColor = "steelblue";
    // // change the reset button to read "New Colors"
    // this.textContent = "New Colors";
    reset();
})

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

// This function picks one of the colors from the array as the "correct" color
function pickRandColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// This function generates an array populated with random colors
function generateRandomColors(num){
    // make an array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

// This function generates random colors using RGB 
function randomColor(){
    // pick a random "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a random "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a random "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}