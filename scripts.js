/* Get elements */
const player = document.querySelector('.player');
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let isClicked = false;

/* Build functions */

function togglePlay(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? '▶' : '❚❚';
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {   
    if(isClicked) {
        video[this.name] = this.value; 
    }
}

function toggleRangeUpdate() {
    isClicked = !isClicked;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mouseup', toggleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousedown', toggleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('mousedown', toggleRangeUpdate);
progress.addEventListener('mouseup', toggleRangeUpdate);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => isClicked && scrub(e));

