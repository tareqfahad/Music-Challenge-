function hint() {
         
  Swal.fire({
    title: 'HINT',
    text: musicList[runningQuestion].hint,
    confirmButtonText: 'Hide'
  })
          
}

// HINTfunction ^


//////////////
// Answer //
////////////

const musicList = [
          {
                    SongName: "Frank Sinatra",
                    src: "./src/sounds/TheWayYouLookTonight.mp3",
                    hint: " Lovely, never, never change",
                    answer:{
                      a:"I've got you under my skin",
                      b:"Moanin'",
                      c:"The Way You Look tonight",
                      
                    },
                    correct: "c",
                    
          },

          {
            SongName: "Bobby Darin",
            src: "./src/sounds/ArtificialFlowers.mp3",
            hint: "She made it for fashion ladies to ware",
            answer:{
              a:"Tik-A-Tee, Tik-A-Tay",
              b:"Artificial Flowers",
              c:"Ain't that a kick in the head" ,
            },
            correct: "b",
            
  },

  {
    SongName: "Dean Martin",
    src: "./src/sounds/ThatsAmore.mp3",
    hint: "Like a  big a pizza pie",
    answer:{
      a:"That's Amore",
      b:"Countning Star",
      c: "Moondance"
    },
    correct: "c",
    
},

];




//Answers buttons
let AnswerA = document.getElementById('answerA');
let AnswerB = document.getElementById('answerB');
let AnswerC = document.getElementById('answerC');

//Score
let score = 0;
let heart = 2; 

//Answer Wrong or right functions
function rightAnswer() {
  score+= 100
  document.getElementById('score').innerText = "Score: " + score
 
 setTimeout(function() {
  pointScore()
 },3000)
  

}

// wrong Answer
function wrongAnswer() {
  heart -= 1
  document.getElementById('heart').innerText = "♡ " + heart
  if(heart === 0){
    Swal.fire({
      type: 'error',
      text: 'Sorry your out ♡',
      confirmButtonText: 'Hide'
    })
  hideButtons();
  setTimeout(function () {
    location.reload();
  },3000)
  
  }

  

}

 


let lastQuestion = musicList.length - 1;
let runningQuestion = 0; 


// qustion rendering . 
function qustionRender() {
   

  AnswerA.innerText = musicList[runningQuestion].answer.a
  AnswerB.innerText = musicList[runningQuestion].answer.b
  AnswerC.innerText = musicList[runningQuestion].answer.c

}

//check answer and Running question
function checkAnswer(answer) {
  
 if (answer === musicList[runningQuestion].correct) {
  rightAnswer()
  console.log("Right") 
 
   
 }
 else{
   console.log('bye');
   wrongAnswer()
 }


if (runningQuestion < lastQuestion) {


 runningQuestion++;
 qustionRender()

 resetPosiation()

}else if(runningQuestion === lastQuestion){
  Swal.fire({
    text: 'Your score : ' + score,
    confirmButtonText: 'Hide'
  })
  restartGame()
}


}


//RESTART BUTTON 

let restartbtn = document.getElementById('restart')
restartbtn.style.visibility = "hidden"



function restartGame() {
  restartbtn.style.visibility = "visible"
}





// Loading Page instructios 

function instructions() {
  Swal.fire({
    type : 'info',
    text:'Just listin to the song and try to guess it !',
    confirmButtonText: 'Hide'
  })
}



