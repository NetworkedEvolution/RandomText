//Name your DIV ID 'funny-text' to attach animation to text.
let funnyText = document.getElementById('funny-text');
let text = funnyText.textContent;
let textLength = funnyText.textContent.length;
let initialTime =                            500;
 //DECREASE THIS VALUE TO SPEED UP ANIMATION ^^^
//INCREASE THIS VALUE TO SLOW DOWN ANIMATION ^^^

//COLOR1 CONTROLS MOVING RANDOM COLOR
let color1 = "#ffffff"

funnyText.classList.add('random-text');

function randomTime() {
    startTimer()
    initialTime += Math.ceil(Math.random(1) * 1000);
}

function startTimer() {
    changeColor()
}

function changeColor() {
    let random = Math.ceil(Math.random(0) * textLength);
    let letter = text.charAt(random);
    funnyText.innerHTML = text.replace(letter, "<span style=color:" + color1 + ">" + letter + "</span>");
}

setInterval(randomTime, initialTime);
    


// USE FOR RANDOMIZING COLOR
// let a = Math.ceil(Math.random(1) * 255);
// let b = Math.ceil(Math.random(1) * 255);
// let c = Math.ceil(Math.random(1) * 255);