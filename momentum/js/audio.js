const audio = new Audio();
let isPlay = false;
let playNum = 0;

function playAudio() {
    if(!isPlay) {
        audio.src = `./assets/sounds/Aqua Caelestis.mp3`
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        button.classList.toggle('pause');
    } else {
        audio.pause();
        isPlay = false;
        button.classList.toggle('pause');
    }
}

function playNext() {
    playNum++;
    playAudio()
}

function playPrev() {
    playNum--;
    playAudio()
}

//import playList from './playList.js';
console.log(playList);


 


