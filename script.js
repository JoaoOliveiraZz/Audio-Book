const playPauseButton = document.getElementById('play_pause')
const nextChapterButton = document.getElementById('next_button')
const previousChapterButton = document.getElementById('previous_button')
const playPauseIcon = document.querySelector('#play_pause i')
const audioPlayer = document.getElementById('audio_player')

const totalTracks = 10;
let actualChapter = 1;

playPauseButton.addEventListener("click", () => {
    if(playPauseIcon.classList.contains('bi-play-circle-fill')){
        playTrack()
    }else{   
        pauseTrack()
    }
})

nextChapterButton.addEventListener('click', nextTrack)

previousChapterButton.addEventListener('click', previousTrack)

function playTrack(){
    playPauseIcon.classList.remove('bi-play-circle-fill')
    playPauseIcon.classList.add('bi-pause-circle-fill')
    audioPlayer.play()
}

function pauseTrack(){
    playPauseIcon.classList.add('bi-play-circle-fill')
    playPauseIcon.classList.remove('bi-pause-circle-fill')
    audioPlayer.pause()
}

function nextTrack(){
    actualChapter = actualChapter === 10 ? 1 : actualChapter + 1;
    
    audioPlayer.src = `./books/dom-casmurro/${actualChapter}.mp3`
    playTrack()
}

function previousTrack(){
    actualChapter = actualChapter === 1 ? totalTracks : actualChapter - 1;

    audioPlayer.src = `./books/dom-casmurro/${actualChapter}.mp3`
    playTrack()
}

