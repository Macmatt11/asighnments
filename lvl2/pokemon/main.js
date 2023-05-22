//step one 
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const pokeData = JSON.parse(JSONdata)
        showPokemon(pokeData.objects[0].pokemon)
        console.log(pokeData.objects[0])
    }
}
//part 2 

function showPokemon(arr){
    for (let i = 0; i < arr.length; i++){
        const h3 = document.createElement('h3')
        h3.textContent = arr[i].name 
        document.body.appendChild(h3)
    }
}