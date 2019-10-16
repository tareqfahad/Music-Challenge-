#Music Challenge

simple game where you listen to a short part of some kind of music and try to guess it.

**Libraries**

* Anime.js
* Sweet

**User Story**

```
me as a user want to find it so easy to understand
me as a user want to play and pause the music whenever I want
me as a user want to feel like it is 1980
me as a user want to see some animations 
```

**Planning**

I was trying to make the animation first , then start with logic and how the answers and questions will work 

**Unsolved Problems**

* score counter dosen't work for the last question
* bad css planning got me in truble when I finished the project


**Favorite Function**

```js
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
  
}


}

```

