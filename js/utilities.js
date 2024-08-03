function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
    

//     // get a random index between 0-25
//     const randomNum = Math.random()*25;
//     const index = Math.round(randomNum);
    
//     const alphabet = alphabets[index];
   
//     return alphabet;
// }

// fu arandol
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const roundNum = Math.random()*25;
    const index = Math.round(roundNum);

    const alphabet = alphabets[index];
    return alphabet;
}