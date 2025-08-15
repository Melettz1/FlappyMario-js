const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startbtn = document.querySelector('.start');


function play() {

  const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500)
  };
  
  const loop =  setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', '')); // +window... também converte pra número.
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = 'none';    
      pipe.style.left = `${pipePosition}px`;
      
      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;
      mario.src = '/images/game-over.png'; // muda a imagem!
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';
      
      const gameOver = document.querySelector('.gameover');
      gameOver.style.display = 'block';
      clearInterval(loop);
    }
  }, 10)
  
  document.addEventListener('keydown', jump);

}

startbtn.addEventListener('click', () => {
  startbtn.style.display = 'none';
  pipe.style.animation = 'pipe-animation 1.5s infinite linear';
  play();
})

