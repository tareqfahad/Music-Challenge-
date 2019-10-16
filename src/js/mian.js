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
                    src: "/src/sounds/TheWayYouLookTonight.mp3",
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
            src: "/src/sounds/ArtificialFlowers.mp3",
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
    src: "/src/sounds/ThatsAmore.mp3",
    hint: "Like a a big a pizza pie",
    answer:{
      a:"That's Amore",
      b:"Bobby Darin",
      c: "Moondance"
    },
    correct: "c",
    
},

];




//Questuin DOM
let AnswerA = document.getElementById('answerA');
let AnswerB = document.getElementById('answerB');
let AnswerC = document.getElementById('answerC');

//Variables 
let score = 0;
let heart = 3; 


  


let lastQuestion = musicList.length - 1;
let runningQuestion = 0; 


// qustion rendering . 
function qustionRender() {
   

  AnswerA.innerText = musicList[runningQuestion].answer.a
  AnswerB.innerText = musicList[runningQuestion].answer.b
  AnswerC.innerText = musicList[runningQuestion].answer.c

}

//check answer
function checkAnswer(answer) {
  
 if (answer === musicList[runningQuestion].correct) {
  console.log("Right") 
   score++ 
   
 }
 else{
   console.log('bye');
   heart -= 1
 }


if (runningQuestion < lastQuestion) {


 runningQuestion++;
 qustionRender(runningQuestion)

 resetPosiation()

}else if(runningQuestion === lastQuestion){
  console.log("we'll see later ");
  
}


}

document.getElementById('score').innerText = "Current Score " + score
document.getElementById('heart').innerText = "♡ " + heart



