function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    const finalScoreSection = document.getElementById('final-score');
    finalScoreSection.classList.add('hidden');

    // show playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');

    
    reset();
    
    continuePlay();

    
}

function addBackgroundColorById(alphabet) {
    const element = document.getElementById(alphabet);
    element.classList.add("bg-red-800")
    
}

function removeBackgroundColorById(alphabet) {
    const element = document.getElementById(alphabet);
    element.classList.remove("bg-red-800")
    
}

function handleKeyboardButtonPress(event) {
    const playerPressed =event.key;
    

    const displayAlphabetElement =document.getElementById('display');
    const displayAlphabet = displayAlphabetElement.innerText;
    const expectedAlphabet = displayAlphabet.toLowerCase();
    

    if(playerPressed === expectedAlphabet){
       
        removeBackgroundColorById(expectedAlphabet);
        continuePlay();

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText =currentScoreElement.innerText;
        const currentScore =parseInt(currentScoreText);
        // console.log(currentScore);

        const newScore = currentScore +1;
        console.log(newScore)
        currentScoreElement.innerText= newScore;

    }
    else{
        console.log('you missed ');
        const currentLifeElement = document.getElementById('life-score');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife =parseInt(currentLifeText);

        const newLife = currentLife -1;
        currentLifeElement.innerText =newLife;
        if(newLife ===0){
            gameOver();
        }
    }
}
document.addEventListener('keyup',handleKeyboardButtonPress);

function getElementTextById(display) {
    const text =display.innerText;
    return text;
    
}

function getARandomAlphabet() {
    // create alphabet Array
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    
    // get random index
    const randomNumber = Math.random()*25;
    const index =Math.round(randomNumber);

    const alphabet =alphabets[index];
    // setBackgroundColorById(alphabet);
    return alphabet;
    

    
}



function gameOver() {
    // play('play-ground');
    // getARandomAlphabet('final-score')
    
    const finalScoreSection = document.getElementById('final-score');
    
    finalScoreSection.classList.remove('hidden');
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.add('hidden');
    
   
    const gameScore = document.getElementById('current-score').innerText;
    
    const displayScore= document.getElementById('game-score');
    displayScore.innerText=gameScore;
 
    const lastAlphabet= document.getElementById('display').innerText;

    removeBackgroundColorById(lastAlphabet);
    

    // const currentAlphabet = getElementTextById('display');
    // removeBackgroundColorById(currentAlphabet);
}

function reset(){
    const lifeScore=document.getElementById('life-score');
    lifeScore.innerText=7;
   
    const currentScoreElement = document.getElementById('current-score');
    currentScoreElement.innerText=0;
}
function    continuePlay(){
    const randomAlphabet=getARandomAlphabet();
    const display=document.getElementById('display');
    display.innerText=randomAlphabet;
    

    const color=addBackgroundColorById(randomAlphabet);
}