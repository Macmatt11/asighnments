// - Create a class for a player that has the following properties:
// - `name` of type `String`
// - `totalCoins` of type `Number`
// - `status` of type `String` (options are `Powered Up`, `Big`,`Small`, and `Dead`)
// - `hasStar` of type `Boolean` (Is a star active?)
// - `setName` of type `function` - Has a parameter called `namePicked` where you pass in "Mario" or "Luigi". Sets `name` to "Mario" or "Luigi".
// - `gotHit` of type `function` - this is called whenever the player is hit by an enemy. `gotHit()` will set the `status` property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
// - `gotPowerup` of type `function` - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
// - `addCoin` of `function` - adds a coin to totalCoins
// - `print` of type `function` - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
//     - Name: Luigi,
//     - Status: Small, etc, etc

// Use that class to create the object.

// Create a [random range function](http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range) that returns either 0, 1, or 2.

// If the value is 0 call the `gotHit()` function on the object.If the value is 1 call the `gotPowerup()` function on the objectIf the value is 2 call the `addCoin()` function

// Then call the print method on the object.

// Now put the random range function inside a `setInterval` function that ends after the player is dead

//todo
//create a class for the player 
//constructor or the basic attributes of the player 
//build the main constructor with the parent attributes 
//parent needs name, total coins,  status, know if it has a star, 
//creat3e functions for setName` of type `function` - Has a parameter called `namePicked` where you
//pass in "Mario" or "Luigi". Sets `name` to "Mario" or "Luigi".
//gotHit` of type `function` - this is called whenever the player is hit by an enemy. `gotHit()` will
// set the `status` property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
//gotPowerup` of type `function` - called when a powerup is received and sets the status accordingly. (Statuses 
//go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
// - `addCoin` of `function` - adds a coin to totalCoins
// - `print` of type `function` - prints to the console the name, totalCoins, status, and star properties. Make sure 
//you make this look nice such as:
//     - Name: Luigi,
//     - Status: Small, etc, et

const readlineSync = require('readline-sync');


class Player {
    constructor(name, totalCoins = 0, status = 'powered up', hasStar = false) {// defaults values 
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }

    setName(namePicked) { //sets the name
        this.name = namePicked ;
    };

    gotHit() {
        if(this.status === 'powered up'){
            this.status = 'big'
        }else if(this.status === 'big'){
            this.status = 'small'
        }else if(this.status === 'small'){
            this.status = 'dead'
        }if (this.status === 'dead') {
            console.log('You are dead!')
            
        }
    }

    gotPoweredUp() {
        if(this.status === 'small'){
            this.status = 'big'
            this.hasStar = false;
        } else if(this.status === 'big'){
            this.status = 'powered up'
            this.hasStar = false;
        }else if(this.status === 'powered up'){
           console.log('you got a star')
            this.hasStar = true;
        }
    }

    addCoin() {
        console.log('coins added')
        this.totalCoins++//increments the coins 
    }

    print() {
        console.log('name: ' + this.name)
        console.log('totalCoins: ' + this.totalCoins)
        console.log('status: ' + this.status)
        console.log('hasStar: ' + this.hasStar)
    }
    playGame() {
        const interval = setInterval(() => { //sets up interval to run the following every 1 sec 
            const value = randomIntFromInterval(0, 2)// chooses a random number from 0-2 
            if(value === 0){
               this.gotHit()//targets the gotHit function in the constructor and runs it. they are part of the player object which is why the this is used 
            }else if(value === 1){
               this.gotPoweredUp()//targets the gotPowered function in the constructor and runs it
            }else{
               this.addCoin()//runs this function 
            }
            console.log(this.print()) // Call print() method to display the player's status after every move
            if(this.status === 'dead'){
                clearInterval(interval)
            }
        }, 1000)// this occurs every sec 
   } 
    
    

}
//random interval generator 
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

if (readlineSync.keyInYN('Do you want to start this game ?')) {//moved down here because player cant be accessed before initialization 
    console.log('Installing now...');
    const namePicked = readlineSync.question('Choose Character, Mario or Luigi? ');//saves the name
    const newPlayer = new Player(namePicked);//stores the namepicked in the name spot of constructor 
    newPlayer.print();//prints player details with the new name 
    newPlayer.playGame()//runs interval with the new name 

}
//create game function

//create an interval every 1 sec runs game 
//finalizing functions 