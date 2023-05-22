const travelForm = document.getElementById("airlineForm") // grabs the form info
const submitButton = document.getElementById("submit") 

function alertForm(){
    let firstName = travelForm .firstName.value; // user firstname value 
    let lastName = travelForm .lastName.value ; // user lastname value 
    let age = travelForm .age.value; //user age 
    let gender = travelForm .gender.value; // user slected gender 
    let location = travelForm .location.value; // user selected destination
    let dietArr = [];
    for(let i = 0; i < travelForm .diet.length; i++){  // this loops through the travel form diet items and searches for the checked items
       if(travelForm .diet[i].checked){               
        dietArr.push(travelForm .diet[i].value)  //here we push whatever was checked into the diet array 
       } 
    }
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " +  gender + "\nLocation: " + location + "\nDiet: "  + dietArr )
}    // this is the alert that displays the info sumited 

submitButton.addEventListener("click", alertForm)



