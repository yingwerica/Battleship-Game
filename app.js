// create battleship class for my battleships
class Battleship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    
    retreat(name, decision){
        decision === "Y" ? console.log(`Game over! ${name} lost your base and Aliens win`)
        : console.log(`Load up! ${name} is ready for another attack.`)
    }
    destroyed(name){
        this.console.log(`Oh nooooo! ${name} is down! Who is up next?`)
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

//create alien ship array
let alienShip;
const teamAlien = [];

function array(n){
  for (let i = 0; i < n; i++) {
    alienShip = new Alienship(i);
    teamAlien.push(alienShip); 
  };
};
array(6);
// console.log(teamAlien);






let playerAnswer = 'yes'
//create attackAlien function for battleship
function attackAlien(myShip, alienShip) {
    
    if (myShip.hull > 0) {
        //launch attack
        if (Math.floor(Math.random()) <= myShip.accuracy) {   // full hit
            console.log('You hit!');
            alienShip.hull-= myShip.firepower;
            
            
            if (alienShip.hull > 0) {
                attackBack(alienShip, myShip); // alien still alive, so attack back
            } else {                // one alien destroyed                              
                //delete destroyed ship from teamAlien
                if (teamAlien.indexOf(alienShip) > -1) {  // only splice array when item is found
                    teamAlien.splice(0, 1);
                    console.log("Great! You destroy an alien ship! Ready to next round?")
                    if (playerAnswer === 'yes') { //choose proceed to another attack
                    attackAlien(myShip, teamAlien[0]);
                    } else {
                        console.log('Game over!') //choose retreat game over
                    }
                } else {             // alien ships all destroyed
                    console.log("Hooray! USSStrongArm win the game!") 
                }
                               
            }
        }else {     // attack missed, so alien attack back
            console.log('oh no, you missed. ');
            attackBack(alienShip, myShip);
    
        }
    } else {    //hull <= 0, destroyed
        console.log('Game over, you are destroyed')
    }
}



//create attackBack function of alien ship
function attackBack(alienShip, myShip) {
    if (Math.floor(Math.random()) <= alienShip.accuracy) { //alien hit
        myShip.hull-= alienShip.firepower;
        // check if ship destroyed
        if (myShip.hull > 0) {    //myship still alive, go attack alien
            attackAlien(myShip, alienShip);
            console.log('They did not destroy you, keep on your attack!')
        } else {  //alien destroyed you
            console.log('oooops, you are dead... game over')
        }

    } else {    //alien missed
        attackAlien(myShip, alienShip);
    };
}


console.log(attackAlien(myBattleship, teamAlien[0]));