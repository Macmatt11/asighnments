// 1. Console must greet player with a fun message
// 2. Console must ask for the player's name and store it
// 3. Walking:
// - The console will ask the user to enter a "w" to walk
// - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// - Use a while loop to control this flow.
// 4. If a wild enemy appears:
// - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// - The user can decide to attack or run
// - If attacking, a random amount of damage will be dealt between a min and max
// - If running, there will be a 50% chance of escaping
// - After the player attacks or runs the enemy attacks back for a random damage amount
// - The player and enemy will attack each other in a loop until one of them passes out or dies.
// - If the player kills the enemy you can give the Player some HP and special item that is stored in the inventory . After this, the player will continue walking.
// - If the enemy kills the player the console prints a cool death message and the game ends
// 5. Inventory
// - When the player kills enemies, they are awarded with items (optional)
// - If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory


//greeting
//need to create a greeting for user. Readline sync will be used for this.
//once greeing is created the console will as for name . need to store the name. readline sync will be used for the question 
// will have to figure out how to store name

//walking
//will have to make it so that 'w' key is used for walking 
//create a while loop to randomly determine if a enemy appears. either 1/3 or 1/4 chance 
//If a wild enemy appears
// create a global variable (not inside of a function ) that consists of an array of enemies.
//write a function or algorith that will choose an enemy at random 

//fighting
// create function to choose fight or run and in function if fights a random amount of damage will be dealt 
//creat a function or algorith to determinte the health damage After the player attacks or runs the enemy attacks back for a random damage amount
//create function or algorith that gives a 50% chance of escaping 
//player and enemy will attack each other in a loop until one of them passes out or dies (will use a for loop or while loop ?)
//If the player kills the enemy you can give the Player some HP and special item that is stored in the inventory (create a random algorith that chooses from 3 weapons )
// After this, the player will continue walking.(if statement possibly while loop which will keep player walking. all based on health so if health > 0 or while health > 0)
//user dies 
//if player dies create a console that prints a cool death message and the game ends
// health = 0
//if playe kills all enemies create a congratulations and say that all enemies have bee defeated the coast is all clear from hear 


//greating for user 
// welcome sergeant! I dont believe that we have met. What is your name ? (enter last name )
// Well sergeant 'user', welcome to mars. im sure you were debriefed prior to your arrival and know that our colony has has had a recent outbreak. It seems that a strange virus has infected about three personnel and has left them severely mutated. 
// These personnel have been causing havoc and have been killing members of the colony. Thats why you are here! your mission is to take them out. sources have informed me that each person has mutated diffently. 
// We have categorized them. There is Tina the scientist, she is the 'creeper'. shes very agile and can climb walls like spiderman but she isnt very strong. Then there is John engineer who is the 'beast' he is very strong and built like 
// the hulk. Be careful with John he can do some damage. Lastly there is Michael, he was one of us, he was a soldier that was providing support for Tina and John. Michael is the hybrid hes very strong and agile and can do alot of damage.
// Now that you have some background do your checks and get going good luck! note:To check weapon inventory press i, health press h)' do you wish to continue (y/n)

//global variables
//greating for user
//  const readlineSync = require('readline-sync');
//  function randomIntFromInterval(min, max) { 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   };
// const userName = readlineSync.question('welcome sergeant! I dont believe that we have met. What is your name ? (enter last name) ');
// const enemyChance=  randomIntFromInterval(1,3);
// const player = {
//     name: userName,
//     health: 100,
//     weapons:{
//         type:'light rifle',
//         damgRng: {
//             min:25,
//             max:35
//         }}
//     ,
    
//   }
// //enemy info
// const enemies = [{
//     name: 'Creeper',
//     damgRng:{
//         min:10,
//         max:15
//     },
//     health:randomIntFromInterval(0, 100)
// }, {
//     name: 'Beast',
//     damgRng:{
//         min:25,
//         max:35
//     },
//     health:randomIntFromInterval(0, 100)
// }, {
//     name: 'Hybrid',
//     damgRng:{
//         min:35,
//         max:45
//     },
//     health: randomIntFromInterval(0,100)
// },]
// const enemy = enemies[randomIntFromInterval(0, enemies.length -1)];
//   const enemyDamage = randomIntFromInterval(enemy.damgRng.min, enemy.damgRng.max);
// // fire weapon function used for fighting 
// function fireWeapon(){
//     readlineSync.keyIn(' Press (f) to fire ', {limit:'f'});
//     enemy.health -= randomIntFromInterval(player.weapons.damgRng.min, player.weapons.damgRng.max)
//     console.log('enemy health', enemy.health)
//     }     
// console.log('Well sergeant '  + userName + '  Welcome to mars. Im sure you were debriefed prior to your arrival and know that our colony has had a recent outbreak. It seems that a strange virus has infected about three personnel and has left them severely mutated.These personnel have been causing havoc and have been killing members of the colony. Thats why you are here! your mission is to take them out. sources have informed me that each person has mutated diffently. We have categorized them. There is Tina the scientist, she is the creeper. shes very agile and can climb walls like spiderman but she isnt very strong. Then there is John he was an engineer who is the beast he is very strong and built like the hulk. Be careful with John he can do some damage. Lastly there is Michael, he was one of us, he was a soldier that was providing support for Tina and John. Michael is the hybrid hes very strong and agile and can do alot of damage. Now that you have some background info do your weapon checks and get going good luck!');
// if (readlineSync.keyInYN('Do you want to continue with the mission ?')) {
//     console.log('Perfect! before we begin heres a few key notes');
//     gameStart()
//     // const inventoryKey = readlineSync.keyIn('to Check Weapon inventory and player information press (p) ', {limit:'p'})
//     // if(inventoryKey === 'p'){
//     //    weaponInventory= ['light rifle'];
//     //    console.log(weaponInventory);
//     //    console.log(player) }
      
// } else {
//     //N key was pressed.
//     console.log('Well Sergeant we have no use for cowards here ... goodbye!');
//     //run gameover function 
//   }
 

// //game start function 
// function gameStart(){
//     while(player.health > 0 ){
//         const walk = readlineSync.keyIn(' Press (w) to walk, (p) to ptint inventory', {limit:'w'});
//         if(walk){
//             enemyChance === 1
//             console.log('Sergeant '  +  userName  +  ' it looks like you found the ' +  enemy.name +  ' do you want to attack?');
//             const attackOrRun = readlineSync.keyIn('Pres (a) to attack or press (r) to run ', {limit:'ar'});
//         if(attackOrRun === "a"){
//             console.log('sergeant ' + userName + ' your light rifle is equipped, fire when ready!')
//             fireWeapon();
//             console.log('Oh man you have been attacked by the ' + enemy.name)
//             player.health -= enemyDamage;
//             console.log('player health', player.health)
//             // console.log("The enemy has attacked you sarg! Shoot em again!")
//             // fireWeapon();
//             //  player.health -= enemyDamage;
//             //  console.log('you got this sarg! take em out!')
//             //  console.log('player health', player.health)
//             //  fireWeapon();
//             //  console.log('hang in there sarg!')
//             //  fireWeapon()
//         }if (enemy.health === 0){
//             player.health + 20
//             player.weapons.damgRng.min + 10;
//             player.weapons.damgRng.max +10
//         }else if(player.health === 0){
//                 console.log('You have died! Game over')
//         }
    
//         }else if(attackOrRun === "r"){

//         }
//         }
//          }
    
//         console.log(gameStart())



    
function revInt(num){
    num.toString().split('').reverse().join('')
    if(num ){}
}