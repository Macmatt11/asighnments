const travelForm = document.getElementById("airlineForm")
const submitButton = document.getElementById("submit")

function alertForm(){
    let firstName = travelForm .firstName.value;
    let lastName = travelForm .lastName.value ;
    let age = travelForm .age.value;
    let gender = travelForm .gender.value;
    let location = travelForm .location.value;
    let dietArr = [];
    for(let i = 0; i < travelForm .diet.length; i++){
       if(travelForm .diet[i].checked){
        dietArr.push(travelForm .diet[i].value)
       } 
    }
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " +  gender + "\nLocation: " + location + "\nDiet: "  + dietArr )
}

submitButton.addEventListener("click", alertForm)


