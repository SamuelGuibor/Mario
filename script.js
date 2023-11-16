const Mario = document.querySelector('.mario');
const Pipe = document.querySelector('.pipe');
const Score = document.querySelector('.score')

let count = 0;

const jump = () => {
    Mario.classList.add('jump');

    setTimeout(() => {

    Mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() =>{

    console.log('loop');

    const pipePosition = Pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(Mario).bottom.replace('px', '');

    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110 ) {
        Pipe.style.animation = 'none';
        Pipe.style.left = `${pipePosition}px`;

        Mario.style.animation = 'none';
        Mario.style.bottom = `${marioPosition}px`;
    
        Mario.src = 'photos/game-over.png';
        Mario.style.width = '75px';
        Mario.style.marginLeft = '50px';

        clearInterval(loop);

    }
    count++;
        Score.innerHTML = `SCORE: ${count}`; 
}, 10);

document.addEventListener('keydown', jump);