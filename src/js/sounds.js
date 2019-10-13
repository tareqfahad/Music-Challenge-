
function sound() {
          var clickSound = new Audio()
          clickSound.src = "src/sounds/clickSound.mp3"
          clickSound.play()
          

}


function move() {
          
          let elem = document.getElementById("char");
          let pos = 0;
          let id = setInterval(frame , 5);
          
          function frame() {
                    if (pos == 200) {
                      clearInterval(id);
                    } else {
                      pos++;
                      elem.style.top = pos + 'px';
                      
                    }
                  }

}