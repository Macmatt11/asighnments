const readlineSync = require("readline-sync");

const userName = readlineSync.question(
  "welcome sergeant! I dont believe that we have met. What is your name ? (enter last name) "
);

const player = {
  name: userName,
  health: 1000,
  weapons: {
    type: "assault rifle",
    damgRng: {
      min: 25,
      max: 35,
    },
  },
};
//enemy info
let monsters = [
  {
    name: "Creeper",
    damgRng: {
      min: 10,
      max: 15,
    },
    health: 100 //randomIntFromInterval(0, 100),
  },
  {
    name: "Beast",
    damgRng: {
      min: 25,
      max: 35,
    },
    health:  100 //randomIntFromInterval(0, 100),
  },
  {
    name: "Hybrid",
    damgRng: {
      min: 35,
      max: 45,
    },
    health: 100  //randomIntFromInterval(0, 100),
  },
];

console.log(
  "Well sergeant " +
    userName +
    "  Welcome to mars. Im sure you were debriefed prior to your arrival and know that our colony has had a recent outbreak. It seems that a strange virus has infected about three personnel and has left them severely mutated.These personnel have been causing havoc and have been killing members of the colony. Thats why you are here! your mission is to locate and eliminate them. Sources have informed me that each person has mutated diffently. We have categorized them. There is Tina the scientist, she is the creeper. shes very agile and can climb walls like spiderman but she isnt very strong. Then there is John he was an engineer who is the beast he is very strong and built like the hulk. Be careful with John he can do some damage. Lastly there is Michael, he was one of us, he was a soldier that was providing support for Tina and John. Michael is the hybrid hes very strong and agile and can do alot of damage. Now that you have some background info do your weapon checks and get going, good luck!"
);

if (readlineSync.keyInYN("Do you want to continue with the mission ?")) {
  console.log("Perfect! Goodluck sergeant " + userName );
  gameStart();
  
} else {
  //N key was pressed.
console.log("Well Sergeant we have no use for cowards here ... goodbye!");
console.log("Game Over!")
}

//game start function
function gameStart() {
  while (player.health >= 0 && monsters.length > 0) {
    //'w' key is used for walking and 'p' used to print inventory
    const action = readlineSync.keyIn(
      " Press (w) to walk, (p) to print inventory",
      { limit: "wp" }
    );

     if (action === "w") { //if the 'w' key is pressed then run code
      const enemyChance = randomIntFromInterval(1, 3); // gives 1/3 chance of running into enemy 

      if (enemyChance === 1) {
        const enemy = getEnemy();//randomly chooses enemy from list using index #

        console.log("Sergeant " + userName + " it looks like you found the " + enemy.name + " do you want to attack?"
        );

        const attackOrRun = readlineSync.keyIn( //here you decide if you want to attack or run
          "Pres (a) to attack or press (r) to run ",
          { limit: "ar" }
        );

        if (attackOrRun === "a") { // if 'a' is pressed the attack function ran 
          console.log("sergeant " + userName + " your assault rifle is equipped, fire when ready!"
          );

          while (player.health > 0 && enemy.health > 0) { // while players health is greater than 0 and enemy health is greater than 0
            fight(enemy, player);   //fight function see helper functions below
            if(enemy.health <= 0 && player.health > 0){ // this runs if enemies health is less than or equal to 0
                console.log("Player Health:", player.health);
                console.log(" Hell yeah Sarg! you killed the " + enemy.name);
                for(let i = 0 ; i < monsters.length ; i++) { //after enemy health is 0 oris defeaated, this will loop through the monster array
                    if(monsters[i].health <= 0) {  //and if the health is 0 or less 
                      monsters.splice(i, 1);  // we will splice or remove the 'i' (monster) and just that monster. this will cont until no enemies are left 
                    }
                  };
                  console.log( monsters) // shows how many enemies left in array 
                console.log("30 Hp awarded to player health"); //after each enemy is defeated the player is awarded health and the damage is increased 
                player.health = player.health + 30;
                console.log("Player Health:", player.health);
                console.log("Player damage has been upgraded");
                player.weapons.damgRng.min = player.weapons.damgRng.min + 15;
                player.weapons.damgRng.max = player.weapons.damgRng.max + 15;
                console.log("Player weapon damage = ", player.weapons.damgRng);
            } else if( player.health <= 0 ){   // if the players health is less than or equal too 0, this code is ran and the game is over 
                console.log("You have died!")
                console.log("Game Over!")
            }
          }

          // if player defeats enemy (want to check player health and enemy health):
          //   - remove enemy from enemies array
          //   - does player gain health
          //   - add damage to player weapon

          // if player died (only player health matters here):
     
        } else if (attackOrRun === "r") {   // if run is clicked this code is ran
            const enemyChance = randomIntFromInterval(1, 2); // 50/50 chance of getting away 
            console.log("What are you doing Sarg! Your mission is to find and kill the enemies!");
            console.log("Take a breather, gather yourself and complete the mission!")
            if(enemyChance === 1){  //if number 1 is chosen this code is ran. this code is ran when you are attacked 
            const enemy = getEnemy(); //gets random enemy 
            console.log("You have been attacked by " + enemy.name + "!");  
            console.log("Player Health:", player.health);
            console.log( "So much for that breather! Looks like its time to fight. Lock and load!");
            while (player.health > 0 && enemy.health > 0){
            fight(enemy, player);
            if(enemy.health <= 0){
                const playerAttackDamage = randomIntFromInterval(
                player.weapons.damgRng.min,
                player.weapons.damgRng.max
                    );
                    for(let i = 0 ; i < monsters.length ; i++) {
                        if(monsters[i].health <= 0) {
                          monsters.splice(i, 1);
                        }
                      };
                console.log("Player Health:", player.health);
                console.log(" Hell yeah Sarg! you killed" + enemy.name)
                console.log("20 Hp awarded to player health");
                player.health = player.health + 20;
                console.log("Player Health:", player.health);
                console.log("Player weapon damage has been upgraded");
                player.weapons.damgRng.min = player.weapons.damgRng.min + 10;
                player.weapons.damgRng.max = player.weapons.damgRng.max + 10;
                console.log("Player Damage = ", playerAttackDamage);
            }if( player.health <= 0 ){
                console.log("You have died!")
                console.log("Game Over!")
            }
            }
            }else if(enemyChance === 2){ //this code is ran when the player gets away
                console.log("You got away!");
                player.health = player.health + 5; //everytime you get away your health gets a 5hp boost 
                console.log("+5 Hp");
                console.log("Player Health:", player.health);
            }

        }
      }else {
        console.log("No enemies in the area, keep searching!"); //while walking and no enemies found in 1/3 chance this code is ran 
        player.health = player.health + 5; //your health gets a 5hp boost 
        console.log("+5 Hp");
        console.log("Player Health:", player.health);
      }
    } else if (action === "p") { //this code prints the inventory
      console.dir(player);
    }
  } if(player.health > 0 && monsters.length === 0){ // here if the monsters.length array is 0 and the players health is above 0 you win the game 
    console.log("All enemies have been taken out! congratulations Sergeant " + userName + " you saved the colony!");
    console.log("congratulations! Game has been won !")
  } else if (player.health <= 0 && monsters.length > 0){
    'GAME OVER !'
  }
}

// HELPER FUNCTIONS

// fire weapon function used for fighting
function fight(enemy, player) {  // enemy and player are inserted into function 
  readlineSync.keyIn(" Press (f) to fire ", { limit: "f" });// when fight funtion activated this question appears. 'f' will initiate the fire sequence 

  const enemyAttackDamage = randomIntFromInterval( //this portion randomizes the enemies attack damage so that every time you fight the damage dealt is different.
    enemy.damgRng.min,
    enemy.damgRng.max
  );

  const playerAttackDamage = randomIntFromInterval( //this portion randomizes the players attack damage so that every time you fight the damage dealt is different
    player.weapons.damgRng.min,
    player.weapons.damgRng.max
  );

  console.log("Enemy Damage = ", enemyAttackDamage); // here the attack damage is displayed for both the enemy and the player 
  console.log("Player Damage = ", playerAttackDamage);

  player.health -= enemyAttackDamage; // this portion is subtracting the enemies attack damage from the players health 
  enemy.health -= playerAttackDamage; // this portion is subtracting the players attack damage from the enemies health 

  console.log("Player Health: ", player.health); // here the health is displayed minus the attack damage for both the enemy and the player
  console.log("Enemy Health: ", enemy.health); // here the health is displayed minus the attack damage for both the enemy and the player

 if (player.health < 0){ // this is just ensuring that if the health is below 0 its 0
    player.health = 0
};
 if (enemy.health < 0){
    enemy.health = 0
 }; 

}

function randomIntFromInterval(min, max) { //this function gives a ranndom number between a parameter in this case a min and max.
  return Math.floor(Math.random() * (max - min + 1) + min); //math.floor will round the number down to the nearest integer. // math.random returns a number between 0 and 1 
};                                                           
function getEnemy(){
    return monsters[randomIntFromInterval(0, monsters.length - 1)] // this function gives a random enemy 
  }
 
