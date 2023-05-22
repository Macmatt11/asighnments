//todo- count the number of clicks
//todo- make an event listener for the button
//todo- display that click count to the user
//todo- make it so the number of clicks will remain on
//the screen even after the site is refreshed.
//todo display count in div


let countClicks = 1
const clickCounter = document.getElementById('clicksDisplayed')

document.addEventListener('click', function(){
clickCounter.innerHTML = countClicks++; //this is setting the div elements contents equal to whatever the click count is. the ++ means that we are incrrementing 
console.log(clickCounter);
console.log( countClicks)
sessionStorage.setItem('userClicks', countClicks); // storing the click counts as a seeion so when user refresshes the content is still there 
});

//get stored 

window.onload = function() {  // when the window is refreshed it will automatically run this function
    let storedUserClicks = sessionStorage.getItem('userClicks'); // gets the stored info of the user 
    if (storedUserClicks) {    // if there are stored clicks then run this code 
      countClicks = storedUserClicks;  // the user clicks  counted equal the stored user clicks 
      clickCounter.innerHTML  = countClicks; 
    }
  };

  