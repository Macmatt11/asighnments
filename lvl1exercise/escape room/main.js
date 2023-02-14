//Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find
// the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies
//Tell the user their options:

//1. Find the key, or
//2. Open the door
  //  1. Put hand in hole
//They can't open the door unless they find the key first.They die if they put their hand in the hole.
//# **JavaScript tools that may help**
//- while loop
//- variables
//- booleans
//- if/else if/else OR switch statement
//- `readline-sync` (syntax for installing and using below)

//welcome what is your name ? answer jack skellington
//welcome jack, i see that you have lost your key and currently trapped is that correct ? y/n
// well thats unfortunate. i see that the door can be opened in two ways, from the key and from the whole in the door but i must inform you that if you choose to use the hole the result can be deadly. do you wish to try your luck and use the whole y/n ?
// ( [1] yes = gameover you are dead)  ( [2] no lets continue searching the room. ***have you checked in the closet ? y/n)
// is it in there  y/n ( [3] y= sweet go unlock the door and get out of here! ) ( [4] no = is it on or under the bed ? y/n) ( [3]  y =  sweet go unlock the door and get out of here) 
// [5] no = is it in the dresser y/n ? ( [3] y =  sweet go unlock the door and get out of here) [6] no = is it in the bathroom y/n ( [3] y=  sweet go unlock the door and get out of here) 
// [7] no = is it in your pocket y/n ? ( [3] y =  sweet go unlock the door and get out of here) [8] no = well the last place to check is the nightstand is it in there y/n ? 
// [3] y = sweet go unlock the door and get out of here, [9] no = well my friend seems like you're going to have to use the hole ... is that ok with you ? y/n ([1] y = gameover you have died ) [10] no = too bad gameover you are dead

//variables
const one = 'Gameover you are dead!'
const two = 'lets continue searching'
const three = 'Sweet go unlock the door and get out of here!'
const four = 'Too bad gameover you are dead !'
const five = 'Im sorry to hear that'

const readline = require("readline-sync");
const name = readline.question("What is your name? ");

const readlineSync = require('readline-sync');
if (readlineSync.keyInYN('Welcome!'  +  name + ' I see that you have lost your key and currently trapped is that correct ?')) {
  unfortunate()
} else {
  console.log(three);
} 
function unfortunate () {
  if (readlineSync.keyInYN('Well thats unfortunate. I see that the door can be opened in two ways, from the key and from the hole in the door but I must inform you, if you choose to use the hole the result can be deadly.Do you wish to try your luck and use the hole ?')) {
  console.log(one);
} else {
  closet();
}}
function closet () {
  if (readlineSync.keyInYN('Great! lets look for this key. Is it in the closet ?')) {
  console.log(three);
} else {
 bed();
}
}
function bed (){
if (readlineSync.keyInYN('Is it on or under the bed ?')) {
  console.log(three);
} else {
 dresser()
}
}
function dresser(){
if (readlineSync.keyInYN('Is it in the dresser?')) {
  console.log(three);
} else {
  bathroom();
}
}
function bathroom(){
if (readlineSync.keyInYN('Is it in the bathroom ?')) {
  console.log(three);
} else {
  pocket();
}
}
function pocket(){
if (readlineSync.keyInYN('Is it in your pocket ?')) {
  console.log(three);
} else {
  nightstand();
}
}
function nightstand(){
if (readlineSync.keyInYN('Well the last place to check is the nightstand, is it in there ?')) {
  console.log(three);
} else {
  goodbye();
}
}
function goodbye(){
if (readlineSync.keyInYN('Well my friend seems like you are going to have to use the hole ... is that ok with you?')) {
  console.log(one);
} else {
  console.log(four);
}
}