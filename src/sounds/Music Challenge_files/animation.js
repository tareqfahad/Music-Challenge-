function move() {
          
          let elem = document.getElementById("char");
          let pos = 0;
          let id = setInterval(frame , 0);
          
          function frame() {
                    if (pos == 200) {
                      clearInterval(id);
                    } else {
                      pos++;
                      elem.style.top = pos + 'px';
                      
                    }
                  }

}