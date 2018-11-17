/* Get elements */
const player = document.querySelector('.player');
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build functions */

function togglePlay(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
