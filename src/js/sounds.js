function song() {
      audio = new Audio();
      audio.src = musicList[runningQuestion].src;    
      audio.play()
}

function stopSong() {

          audio.pause()     
}

         
