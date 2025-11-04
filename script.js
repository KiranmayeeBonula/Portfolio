// Floating flowers
const flowerContainer = document.querySelector('.flowers');
setInterval(() => {
  const flower = document.createElement('div');
  flower.textContent = Math.random() > 0.5 ? '🌸' : '🌼';
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = (8 + Math.random() * 5) + 's';
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 12000);
}, 1000);

// Background music control
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let playing = false;

musicToggle.addEventListener('click', () => {
  if (!playing) {
    bgMusic.play();
    musicToggle.textContent = '🔇';
  } else {
    bgMusic.pause();
    musicToggle.textContent = '🎵';
  }
  playing = !playing;
});