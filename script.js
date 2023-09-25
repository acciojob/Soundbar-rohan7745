//your JS code here. If required.
const audioPlayer = document.getElementById('audioPlayer');

function playAudio(soundFile) {
    audioPlayer.src = `sounds/${soundFile}`;
    audioPlayer.play();
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}
