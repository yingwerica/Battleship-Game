//init variables
//let continuePlay = prompt('Ready to attack?')

// create battleship class for my battleships
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

//create battleship class for alien ships
// class Alienship {
//    constructor(name) {
//         this.name = name;
//         this.hull = Math.floor(Math.random() * 4) + 3; // make random between 3 & 6
//         this.firepower = Math.floor(Math.random() * 3) + 2; // make random between 2 & 4 
//         this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; //make random between .6 and .8
//     }

// }
// const alienShip1 = new Alienship('one')
// console.log(alienShip1);

//create alien ship array
let teamAlien = [];

function array(n){
  for (let i = 0; i < n; i++) {
    teamAlien[i] = new Battleship('Alienship' + i, 
    Math.floor(Math.random() * 4) + 3,
    Math.floor(Math.random() * 3) + 2,
    (Math.floor(Math.random() * 3) + 6) / 10
    );    
  };
};
array(6);
console.log(teamAlien);

// // console.log(teamAlien[0]);
// // console.log(teamAlien);
// // // teamAlien.shift();
// // // console.log(teamAlien);

// // /////////////another way to create alienShip array, but not working with the game function, can not pass an object as param
// // let teamAlien=[];
// // for(let i=0;i<6;i++)
// // {
// // let enemy={};
// // enemy.name = "alienShip"+i;
// // enemy.hull = Math.floor(Math.random() * 4) + 3;
// // enemy.firepower = Math.floor(Math.random() * 3) + 2;
// // enemy.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
// // teamAlien.push(enemy);
// // enemy = {};
// // }
// // console.log(teamAlien);
// ///////////////////////////////////////////////////////////

// //create attackAlien function for battleship
function attackAlien(alienShip) {
    if (Math.floor(Math.random()) <= myBattleship.accuracy) {   // full hit
        console.log( 'Geart!You hit the target!'); 
        alienShip.hull-= myBattleship.firepower;
        console.log( `${alienShip.name} hull: ${alienShip.hull}`);
        
    } else {                                                     // you missed
        console.log( 'Bad luck, you missed....');
        console.log( `${alienShip.name} hull: ${alienShip.hull}`)
        
    }   
};

//create alien attack back function
function alienAttack(alienShip) {
    if (Math.floor(Math.random()) <= alienShip.accuracy) {   // full hit
        console.log('oh no!!You got hit by an alien ship!');
        myBattleship.hull-=alienShip.firepower;
        console.log( `${myBattleship.name} hull: ${myBattleship.hull}`)
        
    } else {
        console.log('Yeah!The alien ship missed!');
        console.log( `${myBattleship.name} hull: ${myBattleship.hull}`) 
                                               // alien missed
    }
};

//delete the destroyed alienship
function alienDestroyed() {
        teamAlien.shift();
        if (teamAlien.length == 0) {
            console.log ("You are the hero!! You win!!")
        } else {
        console.log(`Hooray!! You destroyed an alien ship! Another ${teamAlien[0].name} is approaching!`);
        checkUserResponse();  
        };
}

//create gameOver function
function gameOver() {
    // document.getElementById("promptChoice").innerHTML = '';
    // document.getElementById("retreat").remove();
    // document.getElementById("attack").remove();
    console.log( 'Game over. Alien invasion! Refresh the page to play again.')
}

// let alienShip1 = teamAlien[0];
// console.log(alienShip1);

// //create button click event
// document.getElementById("retreat").onclick = function(){gameOver()};
// document.getElementById("attack").onclick = function(){gameRound(teamAlien[0])};

//create user input function
function checkUserResponse() {
    let input = prompt('Hooray!An Alien ship is destroyed! \n type "Y" to continue to attack, or type "N" to end this battle.');
    if (input.toUpperCase()==='Y') {
        gameRound(teamAlien[0]);
    } else if (input.toUpperCase()==='N') {
        gameOver();
    } else {
        gameOver();
    }
}

//create battle function
function gameRound(alienShip) {
    // document.getElementById("promptChoice").innerHTML = '';
    console.log(teamAlien[0]);
    console.log(alienShip);
    // document.getElementById("attack").disabled = true;
    // document.getElementById("retreat").disabled = true;
    while (myBattleship.hull > 0 && teamAlien.length >= 1 ) {
        attackAlien(alienShip);
        console.log(teamAlien);
        if (alienShip.hull > 0){
            alienAttack(alienShip);
        } else {
            alienDestroyed();
            // document.getElementById("attack").disabled = false;
            // document.getElementById("retreat").disabled = false;
            // console.log('Hooray!An Alien ship is destroyed! \n type "Y" to continue to attack, or type "N" to end this battle.' );   
            return;
         } 
    };
    
    if (myBattleship.hull <= 0){
        console.log( 'You are down! You are down!')
        gameOver();
    }
}

//create game start function
function gameStart() {
    let input = prompt('Welcome to the Space ship battle! Type "Y" to start the game, or type "N" if you want to play another day.');
    if (input.toUpperCase()==='Y') {
        gameRound(teamAlien[0]);
    } else if (input.toUpperCase()==='N') {
        gameOver();
    } else {
        gameOver();
    }
}

gameStart();