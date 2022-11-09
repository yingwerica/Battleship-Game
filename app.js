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
class Alienship {
   constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3; // make random between 3 & 6
        this.firepower = Math.floor(Math.random() * 3) + 2; // make random between 2 & 4 
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; //make random between .6 and .8
    }

}
// const alienShip1 = new Alienship('one')
// console.log(alienShip1);

//create alien ship array
let teamAlien = [];

function array(n){
  for (let i = 0; i < n; i++) {
    teamAlien[i] = new Alienship('Alienship' + i);    
  };
};
array(6);
console.log(teamAlien);

// /////////////another way to create alienShip array
// let alienShipTeam=[];
// for(let i=0;i<6;i++)
// {
// let enemy={};
// enemy.name = "alienShip"+i;
// enemy.hull = Math.floor(Math.random() * 4) + 3;
// enemy.firepower = Math.floor(Math.random() * 3) + 2;
// enemy.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
// alienShipTeam.push(enemy);
// enemy = {};
// }
// console.log(alienShipTeam)
///////////////////////////////////////////////////////////

//create attackAlien function for battleship
function attackAlien(alienShip) {
    if (Math.floor(Math.random()) <= myBattleship.accuracy) {   // full hit
        document.getElementById("alertMsg").innerHTML = 'Geart!You hit the target!'; 
        alienShip.hull-= myBattleship.firepower;
        document.getElementById("alertMsg").innerHTML = `${alienShip.name} hull: ${alienShip.hull}`;
        
    } else {                                                     // you missed
        document.getElementById("alertMsg").innerHTML = 'Bad luck, you missed....';
        document.getElementById("alertMsg").innerHTML = `${alienShip.name} hull: ${alienShip.hull}`
        
    }   
};

//create alien attack back function
function alienAttack(alienShip) {
    if (Math.floor(Math.random()) <= alienShip.accuracy) {   // full hit
        document.getElementById("alertMsg").innerHTML ='oh no!!You got hit by an alien ship!';
        myBattleship.hull-=alienShip.firepower;
        document.getElementById("alertMsg").innerHTML = `${myBattleship.name} hull: ${myBattleship.hull}`
        
    } else {
        document.getElementById("alertMsg").innerHTML ='Yeah!The alien ship missed!';
        document.getElementById("alertMsg").innerHTML = `${myBattleship.name} hull: ${myBattleship.hull}` 
                                               // alien missed
    }
};

//delete the destroyed alienship
// function alienDestroyed(alienShip) {
//     if (alienShip.hull <= 0) {
//         teamAlien.shift();   ///or use .splice(0,1)
//     }
// }

//create gameOver function
function gameOver() {
    document.getElementById("promptChoice").innerHTML = '';
    document.getElementById("retreat").remove();
    document.getElementById("attack").remove();
    document.getElementById("alertMsg").innerHTML = 'Game over. Alien invasion! Refresh the page to play again.'
}

//create button click event
document.getElementById("retreat").onclick = function(){gameOver()};
document.getElementById("attack").onclick = function(){gameRound(teamAlien[0])};

let endThisRound = false;

function gameRound(alienShip) {
    document.getElementById("promptChoice").innerHTML = '';
    document.getElementById("attack").disabled = true;
    document.getElementById("retreat").disabled = true;
    do {attackAlien(alienShip);
        if (alienShip.hull > 0){
            alienAttack(alienShip);
        } else if(alienShip <= 0) {
            teamAlien.shift();
            document.getElementById("attack").disabled = false;
            document.getElementById("retreat").disabled = false;
            document.getElementById("promptChoice").innerHTML = 'Hooray!An Alien ship is destroyed! \n Press "attack" button to knock down them all, or press "retreat" button to end this battle.'    
            endThisRound = true;
        }
    } while (myBattleship.hull > 0 && endThisRound == false);
    
    if (myBattleship.hull <= 0){
        document.getElementById("alertMsg").innerHTML = 'You are down! You are down!'
        gameOver();
    }
    
}
