let img = document.querySelector('img');
let audio = document.querySelector('audio');
let backward = document.querySelector('.fa-backward');
let pausebtn = document.querySelector('.fa-pause');
let playbtn = document.querySelector('.fa-play');
let forward = document.querySelector('.fa-forward');
let volumebtn = document.getElementById('volume');
let maincont = document.querySelector('#main-cont');
let arr = [
  {
    imgsrc: './Heriye.jpg',
    audiosrc: './heriye.mp3',
  },
  {
    imgsrc: './animal.jpg',
    audiosrc: './animal.mp3',
  },
  {
    imgsrc: './chaleya.jpg',
    audiosrc: './chaleya.mp3',
  },
  {
    imgsrc: './bekhayali2.jpg',
    audiosrc: './Bekhayali Mein Bhi Tera Hi Khayal Aaye_64-(PagalWorld).mp3',
  },
  {
    imgsrc: './kabhi kabhi aditi.jpg',
    audiosrc: './Kabhi-Kabhi-Aditi-Zindagi(PaglaSongs).mp3',
  },
  {
    imgsrc: './Zehnaseeb.jpg',
    audiosrc: './Zehnaseeb (Hasee Toh Phasee)_64-(PagalWorld.Ink).mp3',
  },
  {
    imgsrc: './tu kahin kaha.jpg',
    audiosrc: './Tu-Hai-Kahan(PaglaSongs).mp3',
  },
];
let index = 0;
let realTime = 0;

function playfun() {
  img.src = arr[index].imgsrc;
  audio.src = arr[index].audiosrc;
  audio.currentTime = realTime;
  audio.play();
  pausebtn.style.display = 'block';
  playbtn.style.display = 'none';

  setInterval(() => {
    maincont.value = (audio.currentTime / audio.duration) * 100;
  }, 1000);
}

function pausePlay() {
  if (audio.paused) {
    playfun();
  } else {
    audio.pause();
    realTime = audio.currentTime;
    pausebtn.style.display = 'none';
    playbtn.style.display = 'block';
  }
}
pausebtn.addEventListener('click', pausePlay);
playbtn.addEventListener('click', pausePlay);

forward.addEventListener('click', () => {
  index = (index + 1) % arr.length;
  realTime = 0;
  playfun();
});

backward.addEventListener('click', () => {
  index = (index - 1) % arr.length;
  realTime = 0;
  playfun();
});
audio.addEventListener('ended', () => {
  index = (index + 1) % arr.length;
  realTime = 0;
  playfun();
});
volumebtn.addEventListener('input', () => {
  audio.volume = volumebtn.value;
});
maincont.addEventListener('input', () => {
  audio.currentTime = (maincont.value * audio.duration) / 100;
});
