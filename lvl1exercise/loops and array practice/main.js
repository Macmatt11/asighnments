//Loop through the following array and count how many "computers" there are. Log the final count: 4 "computer"
//var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

//for (i = 0; i < officeItems.length; i++ ){
  //  if (officeItems[i] === "computer"){
    //    console.log(officeItems[i])
    //}

//}

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

//   for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++){
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " old enough")
//     } else if( peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " not old enough")
//     }
//   }
//bonus
// Log to the console a personalized message like:

// `Mike is not old enough to see Mad Max`

// or

// `Madeline is old enough to see Mad Max.`

// for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++){
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].name === "Mike"){
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
//         } else if( peopleWhoWantToSeeMadMaxFuryRoad[i].name === "Madeline"){
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
//         }
//       }

//       Check to see if the movie goer is a male or female for an even more personalized message.

// `Mike is not old enough to see Mad Max Fury Road, don't let HIM in.`

// or

// `Madeline is old enough. SHE'S good to see Mad Max Fury Road.`

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].name === "Mike"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " Mike is not old enough to see Mad Max Fury Road, don't let HIM in.")
    } else if( peopleWhoWantToSeeMadMaxFuryRoad[i].name === "Madeline"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " Madeline is old enough. SHE'S good to see Mad Max Fury Road")
    }
  }