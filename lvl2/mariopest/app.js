//TODO condense HTML to single form v
//redefine form in JS v
//define baddie inputs in JS v
//update display of totals v
//TODO write event listener for single baddie form
// *inside event listener* runningTotal = totalTracker(goombas.value, bobs.value, cheeps.value)

// function will be called in form event listener
// TODO make global variable for runningTotal


const form = document.getElementById("mainForm");
let runningTotal = 0;
    
form.addEventListener('submit', function(event) {
event.preventDefault();
const goomsInput = parseInt(document.getElementById('gooms').value);
const bobsInput = parseInt(document.getElementById('bobs').value);
const cheepInput = parseInt(document.getElementById('cheep').value);
runningTotal = ((bobsInput * 7) + (goomsInput * 5) + (cheepInput * 11));
console.log(typeof runningTotal);
const totalBox = document.getElementById('total');
totalBox.textContent = runningTotal
console.log(totalBox)
});
    
    

