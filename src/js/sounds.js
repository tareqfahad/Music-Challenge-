function song() {
      audio = new Audio();
      audio.src = musicList[runningQuestion].src;    
      audio.play()
}

function stopSong() {

          audio.pause()     
}

         
function pointScore() {
      let point = new Audio();
      point.src = 'src/sounds/point.mp3'
      point.play();
}