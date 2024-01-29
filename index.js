let imgBasePath = "./images/";

function randomDice(){
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);

    document.querySelector("#dice1").src = `${imgBasePath}dice${randomNumber1}.png`;
    document.querySelector("#dice2").src = `${imgBasePath}dice${randomNumber2}.png`;

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1#header-text").innerHTML = "🚩Player 1 Win !!";
    } else if(randomNumber2 > randomNumber1){
        document.querySelector("h1#header-text").innerHTML = "🚩Player 2 Win !!";
    } else{
        document.querySelector("h1#header-text").innerHTML = "Draw ! let's try again.";
    }
}