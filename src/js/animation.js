

////////////////////////
// REMOVE THE BUTTOMS ///
///////////////////////

function hideButtons() {
  for (let el of document.querySelectorAll('.btn')) el.style.visibility = 'hidden';
  
}


//Hide char

function hideChar() {
  
  setTimeout(function(){
  
    document.getElementById('char').style.display = "none";


  }, 2600);
  
}






////////////////////////
//  Animation functions ///
///////////////////////


function moveCenter(Speed) {
 
  anime({
    targets: '#char',
    translateY: -200,
    rotate: '0turn',
    duration: Speed,
    easing:'linear'
  });
  hideButtons()
  hideChar()
  stopSong()
}


function moveUP() {
document.getElementById('upDoor').src = "src/img/Door/Opend.png";
//Door's open

  anime({
    targets: '#char',
    translateY: -340,
    rotate: '0turn',
    duration: 2000,
    easing:'linear'
  });


  
  hideChar()
  hideButtons()
  stopSong()
  
}


function moveRight() {
document.getElementById('rightDoor').src = "src/img/Door/Opend.png";
//Door's open

  setTimeout(function(){
    anime({
      targets: '#char',
      translateX: 420,
      rotate: '0turn',
      duration: 1500,
      easing:'linear'
    });

  }, 1000);
 
  moveCenter(1000)

  

}

function moveLeft() {
document.getElementById('leftDoor').src = "src/img/Door/Opend.png";
//Door's open


  setTimeout(function(){
    anime({
      targets: '#char',
      translateX: -400,
      rotate: '0turn',
      duration:1500,
      easing:'linear'
    });
    
  }, 1000);
 
  moveCenter(1000)
  
  

}


//reset function
function resetPosiation() {
  setTimeout(function () {
    

    for (let el of document.querySelectorAll('.btn'))el.style.visibility = 'visible';
    document.getElementById('char').style.display = "block";
    document.getElementById('char').style.right = "50%"
    document.getElementById('char').style.left = "45%"
    document.getElementById('char').style.setProperty("transform", "none", "important");
    document.getElementById('char').style.setProperty("color", "red", "important");
    for (let el of document.querySelectorAll('.doorClass')) el.src = "src/img/Door/closed.png" ;
  
    



  },3500)
  
}