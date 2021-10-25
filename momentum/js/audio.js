const ul = document.querySelector(`.play-list`);
const audio = new Audio();
const treckname = document.querySelector(`.treckname`);

let isPlay = false;
let playNum = 0;

function playAudio() {
    let playBtn = audioPlayer.querySelector(".controls .toggle-play");
    if(!isPlay) {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        treckname.innerText = playList[playNum].title
        audio.play();
        isPlay = true;
        button.classList.toggle('pause_main');
        playBtn.classList.toggle("play");
        playBtn.classList.toggle("pause");
        playMark();
    } else {
        audio.pause();
        isPlay = false;
        button.classList.toggle('pause_main');
        playBtn.classList.toggle("play");
        playBtn.classList.toggle("pause");
    }
}

function playMark() {
    ul.childNodes.forEach(el => {
        el.classList.remove(`item-active`);
    });
    ul.childNodes[playNum].classList.toggle(`item-active`) 
}

function playNext() {
    if (playNum < 3) {
        playNum++;       
    } else {
        playNum = 0;
    }
    playMark();
}

function playPrev() {
    if (playNum > 0) {
        playNum--;       
    } else {
        playNum = 3;
    }
    playMark();
//   console.log(playNum)
}

playList.forEach((el, i) => { 
    const li = document.createElement('li');
    li.classList.add(`play-item`);
    li.textContent = playList[i].title;
    ul.append(li);
});


const audioPlayer = document.querySelector(".audio-player");

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener("click", () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      button.classList.toggle('pause_main');
      audio.play();
 //     playAudio()
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      button.classList.toggle('pause_main');
      audio.pause();
//      playAudio()
    }
  },
  false
);

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

audio.onended = function() {
    playNext();
    playAudio();
    playAudio();
};




 


