function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // show playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');

     const randomAlphabet=getARandomAlphabet();
     const display=document.getElementById('display');
     display.innerText=randomAlphabet;
}

function getARandomAlphabet() {
    // create alphabet Array
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    console.log(alphabets)
    // get random index
    const randomNumber = Math.random()*25;
    const index =Math.round(randomNumber);

    const alphabet =alphabets[index];
    return alphabet;
    
}