var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");


function formAlert () {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    // if (form.vegan.checked) {
    //      diet.push(vegan.value);
    // }
    // if (form.gluten.checked) {
    //     diet.push(gluten.value);
    // }
    // if (form.paleo.checked) {
    //     diet.push(paleo.value);
    // }
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
         diet.push(form.diet[i].value)
        } 
     }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);