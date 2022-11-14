# Battleship-Game
Actor: 
Battleships
•	Properties: hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
•	firepower is the amount of damage done to the hull of the target with a successful hit
•	accuracy is the chance between 0 and 1 that the ship will hit its target

USS StrongArm battleship: need a battleship class
Properties:
•	hull - 20
•	firepower - 5
•	accuracy - .7
 method: attack, retreat, destroyed, 
the Alien ships: need an alien ship class
properties: need math.floor(math.random()) method
•	hull - between 3 and 6
•	firepower - between 2 and 4
•	accuracy - between .6 and .8
method: attack, destroyed

A game round functions or methods:
•	You attack the first alien ship
Function to launch an attack
•	If the ship survives, it attacks you------ means I missed, I will get hit once
How to find if I was missed? 
Function to check alien health after an attack-- If hull reaches 0 or less, the ship is destroyed


If it is not destroyed, it will launch an attack back
Then function to check my ship health, if hull reaches 0 or less, my ship is destroyed and game over.
•	If you survive, you attack the ship again
If my hull >0, launch another attack
•	If it survives, it attacks you again … etc
•	If you destroy the ship, you have the option to attack the next ship or to retreat
•	If you retreat, the game is over, perhaps leaving the game open for further developments or options
•	You win the game if you destroy all of the aliens
•	You lose the game if you are destroyed


images of finished project:
![2022-11-14 Spaceship battle game](https://user-images.githubusercontent.com/108429404/201603646-dd60dec5-acd6-49ea-8bc9-f8f715f8b661.jpg)


![spaceship battle game on](https://user-images.githubusercontent.com/108429404/201603693-f177cdb2-5fb1-445b-9cd7-ecac9eae9f45.jpg)



