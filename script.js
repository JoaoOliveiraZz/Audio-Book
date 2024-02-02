const playPauseButton = document.getElementById('play_pause')
const playPauseIcon = document.querySelector('#play_pause i')
const audioPlayer = document.getElementById('audio_player')

playPauseButton.addEventListener("click", () => {
    if(playPauseIcon.classList.contains('bi-play-circle-fill')){
        playPauseIcon.classList.remove('bi-play-circle-fill')
        playPauseIcon.classList.add('bi-pause-circle-fill')
        playTrack()
    }else{
        playPauseIcon.classList.add('bi-play-circle-fill')
        playPauseIcon.classList.remove('bi-pause-circle-fill')
        pauseTrack()
    }
})

function playTrack(){
    audioPlayer.play()
}

function pauseTrack(){
    audioPlayer.pause()
}

