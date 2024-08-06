// function play(){
//     // hide home and show the playground
//     // add hidden class
//     const home = document.getElementById('home-screen');
//     home.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }




function handlekeyBtnPress(event){
    // get player pressed key
   const playerPressed = event.key;

   //player pressed escape then game over 
   if( playerPressed === 'Escape'){
    gamaOver();
   }
  
//expected key get by id
   const currentAlphaElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphaElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();
   console.log(playerPressed , expectedAlphabet)

   if(playerPressed === expectedAlphabet){
    // console.log('you get a point');
    //update score
    //1 get currect scrore
    // // increase score and show the score section
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseFloat(currentScoreText);

    const currentScore = getElementValueById('current-score');
    const newScore = currentScore + 1;
    setElementValueById('current-score' , newScore);

    //currentScoreElement.innerText = newScore;

    //star a new round
    removeBgColorById(expectedAlphabet);
    continueGame()
   }
   else{
    console.log('you missed the point');

    //get current life
   const currentLife = getElementValueById('current-life');
    const newLife = currentLife - 1;
    setElementValueById('current-life' , newLife);

    if(newLife === 0){
        gamaOver();
    }
    
   }
   
   

}
//capture keyboard kew preess call
// back function
document.addEventListener('keyup' , handlekeyBtnPress)


function continueGame(){
    //random alphabet generate
    const alphabet = getRandomAlphabet();
    console.log(alphabet);

    //set key and show 
    const currentAlphaElement = document.getElementById('current-alphabet');
    const currentAlpha = currentAlphaElement.innerText;
    currentAlphaElement.innerText = alphabet;

    //set background color
    addBgColorById(alphabet);

}

function play(){
    //hide everything show only play
    hideElementById('home-screen');
    hideElementById('score');
    showElementById('play-ground');
    //reseet sore
    setElementValueById('current-life' , 5)
    setElementValueById('current-score' , 0)
    continueGame();
}

function gamaOver(){
    hideElementById('play-ground');
    showElementById('score');

    //update final score
    //1. get final score and set total score when it goes game over section

    const lastScore = getElementValueById('current-score');
    setElementValueById('final-score' , lastScore);

    //clear the last selected alphabet
    
    const expectedAlphabet = getElementTextValueById('current-alphabet');
    removeBgColorById(expectedAlphabet);





    
    

}