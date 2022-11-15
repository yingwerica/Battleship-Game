// create battleship class for all the battleships
class Battleship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }  
}

//create an object of my battleship
const myBattleship = new Battleship('USSStrongArm', 20, 5, 0.7);
// console.log(myBattleship);

//create battleship class for alien ships--error if only with name argument, properties not defined.
// class Alienship {
//    constructor(name) {
//         this.name = name;
//         this.hull = Math.floor(Math.random() * 4) + 3; // make random between 3 & 6
//         this.firepower = Math.floor(Math.random() * 3) + 2; // make random between 2 & 4 
//         this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; //make random between .6 and .8
//     }

// }


//create alien ship array
let teamAlien = [];

function array(n){
  for (let i = 0; i < n; i++) {
    teamAlien[i] = new Battleship('Alienship' + (i+1), 
    Math.floor(Math.random() * 4) + 3,
    Math.floor(Math.random() * 3) + 2,
    (Math.floor(Math.random() * 3) + 6) / 10
    );    
  };
};
array(6);
console.log(teamAlien);

//create alert massages function for displaying massage and health points during the round of game
function alertMsg (message) {
    document.getElementById("alertMsg").innerHTML = message;
};

function reportHealth (message) {
    document.getElementById("reportHealth").innerHTML = message;
};

function reportMyHealth (message) {
    document.getElementById("reportMyHealth").innerHTML = message;
};

// //create attackAlien function for battleship
function attackAlien(alienShip) {
    if ((Math.random()) <= myBattleship.accuracy) {   // full hit
        message = `${message} 
        Geart!You hit the target!`;
        alertMsg(message); 
        alienShip.hull-= myBattleship.firepower;
        reportHealth( `${alienShip.name} hull: ${alienShip.hull}`);
        reportMyHealth( `${myBattleship.name} hull: ${myBattleship.hull}`);
        
        
    } else {                                                     // you missed
        message = `${message} 
        Bad luck, you missed....`;
        alertMsg(message);
        reportHealth( `${alienShip.name} hull: ${alienShip.hull}`);
        reportMyHealth( `${myBattleship.name} hull: ${myBattleship.hull}`);
        
    };   
};

//create alien attack back function
function alienAttack(alienShip) {
    if ((Math.random()) <= alienShip.accuracy) {   // full hit
        message = `${message} 
        oh no!!You got hit by an alien ship!`;
        alertMsg(message);
        myBattleship.hull-=alienShip.firepower;
        reportMyHealth( `${myBattleship.name} hull: ${myBattleship.hull}`);
        reportHealth( `${alienShip.name} hull: ${alienShip.hull}`);
        
    } else {
        message = `${message} 
        Yeah!The alien ship missed!`;
        alertMsg(message);
        reportMyHealth( `${myBattleship.name} hull: ${myBattleship.hull}`); 
        reportHealth( `${alienShip.name} hull: ${alienShip.hull}`);
                                               // alien missed
    };
};

//delete the destroyed alienship
function alienDestroyed() {
        teamAlien.shift();
        
        if (teamAlien.length == 0) {
            message = `${message} 
            You are the hero!! You win!!`;
            alertMsg(message);
            document.getElementById("promptChoice").innerHTML = 'You win the game!! Refresh the page to play again.';
            document.getElementById("attack").remove();
            document.getElementById("retreat").remove();
        } else {
            reportHealth( `${teamAlien[0].name} hull: ${teamAlien[0].hull}`);
            message = `${message} 
            Hooray!! You destroyed an alien ship! Another ${teamAlien[0].name} is approaching!`; 
            alertMsg(message);

            checkUserResponse();  
        };
};

//create gameOver function
function gameOver() {
    console.log(message);
    message = `${message} 
    Game over. Alien invasion! Refresh the page to play again.`;
    alertMsg(message);
    document.getElementById("promptChoice").innerHTML = 'You failed! Refresh the page to start a new game. Be brave!!';
    document.getElementById("attack").remove();
    document.getElementById("retreat").remove();
};

//create user input function
function checkUserResponse() {
    document.getElementById("attack").disabled = false;
    document.getElementById("retreat").disabled = false;
    document.getElementById("promptChoice").innerHTML ='Hooray!An Alien ship is destroyed! Press Attack to continue to attack, or press Retreat to end this battle.';
    // console.log(document.getElementById("promptChoice").textContent);
    document.getElementById('attack').onclick = function(){
         gameRound(teamAlien[0]);
         };
     /////error---addEventListener will accumulate actions////
         // document.getElementById('attack').addEventListener('click', function(){
        //     gameRound(teamAlien[0]);
        // });
    document.getElementById("retreat").onclick = function(){
        gameOver();
    };
        
};


//create battle function
function gameRound(alienShip) {
    // console.log(teamAlien[0]); --debug
    // console.log('pressed button'); ---debug
    while (myBattleship.hull > 0 && teamAlien.length >= 1 ) {
        attackAlien(alienShip);
        console.log(teamAlien);
        if (alienShip.hull > 0){
            alienAttack(alienShip);
        } else {
            alienDestroyed();
            break;
         }; 
    };
    
    if (myBattleship.hull <= 0){
        // message = `${message} 
        // You are down! You are down! Game over. See you next time.`;
        // alertMsg(message);
        gameOver();
    };
};

//create game start function for console log version
// function gameStart() {
//     let input = prompt('Welcome to the Space ship battle! Type "Y" to start the game, or type "N" if you want to play another day.');
//     if (input.toUpperCase()==='Y') {
//         gameRound(teamAlien[0]);
//     } else if (input.toUpperCase()==='N') {
//         gameOver();
//     } else {
//         gameOver();
//     }
// }
let message = '';
function gameStart() {
    document.getElementById("promptChoice").innerHTML = 'Welcome to the Space ship battle! Press "Start" button to start the game.';
    document.getElementById('start').addEventListener('click', function(){
        message = `The game is on! Attack!!`
        alertMsg(message);
        document.getElementById('start').remove();
        gameRound(teamAlien[0]);  // at last call the game function to avoid message reset
    });
};

gameStart();