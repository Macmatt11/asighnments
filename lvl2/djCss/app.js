//global console document
const thunderAudio = document.getElementById('thunderAudio');
const cityAudio = document.getElementById('cityAudio');
const fireAudio = document.getElementById('fireAudio');
const forestAudio = document.getElementById('forestAudio');
const oceanAudio = document.getElementById('oceanAudio');
const carAudio = document.getElementById('carAudio');
const button = document.getElementById('start');
const container = document.getElementById('container')

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');

button.addEventListener('click', ()=>{
container.style.display = 'grid';
button.style.display = 'none'
})

const audiosAndElements = [ [box1, thunderAudio],[box2, cityAudio] ,[box3,fireAudio], [box4,forestAudio], [box5, oceanAudio], [box6, carAudio]]
//const [zeroIndex, oneIndex , twoIndex, threeIndex, fourIndex, fiveIndex] = audiosAndElements     <= array destructuring
audiosAndElements.forEach(([box,audio])=>{
setEventListener(box,audio)
})

// setEventListener(box1,thunderAudio)

// setEventListener(box2,cityAudio)
// // box2.addEventListener('mouseover', playAudio(cityAudio))
// // box2.addEventListener('mouseout', pauseAudio(cityAudio))

// setEventListener(box3,fireAudio)
// // box3.addEventListener('mouseover', playAudio(fireAudio))
// // box3.addEventListener('mouseout', pauseAudio(fireAudio))

// setEventListener(box4,forestAudio)
// // box4.addEventListener('mouseover', playAudio(forestAudio))
// // box4.addEventListener('mouseout', pauseAudio(forestAudio))

// setEventListener(box5,oceanAudio)
// // box5.addEventListener('mouseover', playAudio(oceanAudio))
// // box5.addEventListener('mouseout', pauseAudio(oceanAudio))

// setEventListener(box6, carAudio)
// // box6.addEventListener('mouseover', playAudio(carAudio))
// // box6.addEventListener('mouseout', pauseAudio(carAudio))

function playAudio(audio){
	return () => {audio.play()}
}

function pauseAudio(audio){
return () => {audio.pause()}
}

function setEventListener(el, audio){
el.addEventListener('mouseover', playAudio(audio))
el.addEventListener('mouseout', pauseAudio(audio))
}

