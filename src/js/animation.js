

////////////////////////
// REMOVE THE BUTTOMS ///
///////////////////////

function hideButtons() {
  for (let el of document.querySelectorAll('.btn')) el.style.visibility = 'hidden';
  
}




        


function moveCenter(Speed) {
 
  anime({
    targets: '#char',
    translateY: -200,
    rotate: '0turn',
    duration: Speed,
    easing:'linear'
  });
  hideButtons()


}


function moveUP() {
  

  anime({
    targets: '#char',
    translateY: -340,
    rotate: '0turn',
    duration: 2000,
    easing:'linear'
  });


  


  hideButtons()
  
}


function moveRight() {

 
 
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

