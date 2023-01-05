var box = document.querySelector("#box")
var boxBackgroundColor = document.querySelector("#box").style.backgroundColor
console.log(boxBackgroundColor,box)

box.addEventListener("dblclick", function(){
     box.style.backgroundColor = "green"
})

box.addEventListener("mousedown", function(){
     box.style.backgroundColor = "red"
})

box.addEventListener("mouseenter", function(){
     box.style.backgroundColor = "blue"
})

box.addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow"
})

box.addEventListener("mouseout", function(){
     box.style.backgroundColor = "orange"
})


document.addEventListener("keydown", e => {
    e.preventDefault();
    if (
        e.key.toLocaleLowerCase() === "r") {
        
            var keydown = document.querySelector("#box").style.backgroundColor = "red"

        } else if (
            e.key.toLocaleLowerCase() === "b") {
            
                var keydown = document.querySelector("#box").style.backgroundColor = "blue"
    
            } else  if (
                e.key.toLocaleLowerCase() === "y") {
                
                    var keydown = document.querySelector("#box").style.backgroundColor = "yellow"
        
                } else  if (
                    e.key.toLocaleLowerCase() === "g") {
                    
                        var keydown = document.querySelector("#box").style.backgroundColor = "green"
            
                    } else  if (
                        e.key.toLocaleLowerCase() === "o") {
                        
                            var keydown = document.querySelector("#box").style.backgroundColor = "orange"
                
                        } else {
                            boxBackgroundColor = "magenta"
                        }
    
})

