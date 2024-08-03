// function play(){
//     // hide home and show the playground
//     // add hidden class
//     const home = document.getElementById('home-screen');
//     home.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

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
    hideElementById('home-screen');

    showElementById('play-ground');
    continueGame();
}