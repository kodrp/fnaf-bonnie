document.addEventListener('DOMContentLoaded', () => { // wartet bis seite geladen ist
const bonnieImg = document.getElementById('withered-img');
const flashOverlay = document.getElementById('flash-overlay');
const jumpscareOverlay = document.getElementById('jumpscare-overlay');
const jumpScareSound = new Audio('./mp3/withered.mp3');
let isJumpscaring = false; // Damits nd durchgehend ballert
bonnieImg.addEventListener('mouseover', () => {
    if (isJumpscaring) return; // Damits sichs nd wiederholt
    isJumpscaring = true; // Aktiv
    jumpscareOverlay.style.display = 'flex'; // zeigt jumpscare bild
    jumpScareSound.play();
    flashOverlay.classList.add('flash-active');
    setTimeout(() => {
        flashOverlay.classList.remove('flash-active'); // macht flash nach 0.3s aus
    }, 300);
    setTimeout(() => {
        jumpscareOverlay.style.display = 'none'; // macht jumpscare weg nach 1s
        jumpScareSound.pause(); //pausiert den sound
        jumpScareSound.currentTime = 0; // setzt den sound zurueck
        isJumpscaring = false; // ready fuer naechsten jumpscare
    }, 1000);
});
});