function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // show playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');

     const randomAlphabet=getARandomAlphabet();
     const display=document.getElementById('display');
     display.innerText=randomAlphabet;
     

     const color=addBackgroundColorById(randomAlphabet);
    
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
        play();

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText =currentScoreElement.innerText;
        const currentScore =parseInt(currentScoreText);
        // console.log(currentScore);

        const newScore = currentScore +1;
        currentScoreElement.innerText= newScore;

    }
    else{
        console.log('you missed ');
        const currentLifeElement = document.getElementById('life-score');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife =parseInt(currentLifeText);

        const newLife = currentLife -1;
        currentLifeElement.innerText =newLife;
    }
}
document.addEventListener('keyup',handleKeyboardButtonPress);

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