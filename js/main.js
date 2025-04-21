const gameButton = document.querySelector('#clickeable-button');
const gameContainer = document.querySelector('.game-container');
const stats = document.querySelector('#stats');
const reset = document.querySelector('#resetPosition')

const containerWidth = gameContainer.clientWidth;
const containerHeight = gameContainer.clientHeight;
const buttonWidth = gameButton.offsetWidth;
const buttonHeight = gameButton.offsetHeight;

const centerX = (containerWidth - buttonWidth) / 2;
const centerY = (containerHeight - buttonHeight) / 2;

let clickCounter = 0;
let missClick = 0;







gameButton.addEventListener('click', (event)=>{

    const maxX = gameContainer.clientWidth - gameButton.offsetWidth;
    const maxY = gameContainer.clientHeight - gameButton.offsetHeight;


    positionX = randomNumber(0, maxX);
    positionY = randomNumber(0, maxY);


    gameButton.style.left = `${positionX}px`;
    gameButton.style.top = `${positionY}px`;

    

    console.log('Acertaste: ' + clickCounter);
    console.log('Fallaste: ' + missClick);



    clickCounter++;
    stats.innerHTML = `Aciertos: ${clickCounter}`;
    

});

window.addEventListener('DOMContentLoaded', () => {
    gameButton.style.left = `${centerX}px`;
    gameButton.style.top = `${centerY}px`;
});

reset.addEventListener('click', ()=>{
    clickCounter = 0;
    stats.innerHTML = '';

    gameButton.style.left = `${centerX}px`;
    gameButton.style.top = `${centerY}px`;
})




function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


