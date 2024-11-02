
const player = document.querySelector('dotlottie-player');
const audio = document.querySelector('audio');
const secondPage = document.querySelector('#second-page');

player.addEventListener('click', () => {
    player.play();
    player.style.transition = 'all 1s cubic-bezier(.89,.02,.1,.98)';
    player.style.scale = '1.2';
    setTimeout(() => {
        showCard()
    }, 1500)
});


function showCard() {
    secondPage.style.display = 'block';
    player.style.display = 'none';
    player.pause();
    audio.play()
}

