//todo- count the number of clicks
//todo- make an event listener for the button
//todo- display that click count to the user
//todo- make it so the number of clicks will remain on
//the screen even after the site is refreshed.
//todo display count in div


let countClicks = 1
const clickCounter = document.getElementById('clicksDisplayed')

document.addEventListener('click', function(){
clickCounter.innerHTML = countClicks++;
console.log(clickCounter);
console.log( countClicks)
sessionStorage.setItem('userClicks', countClicks);
});

//get stored 

window.onload = function() {
    let storedUserClicks = sessionStorage.getItem('userClicks');
    if (storedUserClicks) {
      countClicks = storedUserClicks;
      clickCounter.innerHTML  = countClicks;
    }
  };

  