var header = document.createElement("header");
var body = document.querySelector("#newid");
newid.prepend(header);
console.log(header);
header.textContent= "Javascript Made This!";
header.style.fontSize = "30px"

//header qualifier
var paragraph = document.createElement("p");
header.append(paragraph);
paragraph.id = "span";
var span1 = document.createElement("span");
var span2 = document.createElement("span");
paragraph.append(span1);
paragraph.append(span2);
span1.textContent = "Mathew Macias"
span2.textContent = " wrote this javascript"
span1.style.color = "yellow"


var send_Button = document.getElementById("send_button")
var mainDiv = document.getElementById("messages")
var input1 = document.getElementById("input1");

function createDiv (){
// var messageDiv = document.createElement("div")
// mainDiv.append(messageDiv) 
// messageDiv.textContent = input1.value
if(send_Button === "click"){
var messageDiv = document.createElement("div")
     messageDiv.className = "left"
          mainDiv.append(messageDiv) 
               messageDiv.textContent = input1.value
               
}else if(send_Button === "click"){
     var messageDiv = document.createElement("div")
           messageDiv.className = "right"
               mainDiv.append(messageDiv) 
                    messageDiv.textContent = input1.value
                    
}
return messageDiv
} console.log(createDiv)


var sendBtn = document.getElementById("send_button").addEventListener("click", function (){
     const div = createDiv()

     
      var mess1 = document.getElementById("mess1").textContent = "sup bro"
      var mess2 = document.getElementById("mess2").textContent = "great job"
      var mess3 = document.getElementById("mess3").textContent = "doing great!"
      var mess4 = document.getElementById("mess4").textContent = "Hang in there"
     
 })

var clear = document.getElementById("clear-button").addEventListener("click",function (){
    mess1;mess2;mess3;mess4
    
     var mess1 = document.getElementById("mess1").textContent = ""
     var mess2 = document.getElementById("mess2").textContent = ""
     var mess3 = document.getElementById("mess3").textContent = ""
     var mess4 = document.getElementById("mess4").textContent = ""
    
})

//var output = document.getElementById("messages")
//var mess1 = document.getElementById("mess1").textContent = "sup bro"
//var mess2 = document.getElementById("mess2").textContent = "hang in there!"
//var mess3 = document.getElementById("mess3").textContent = "you're doing great!"
//var mess4 = document.getElementById("mess4").textContent = "you got this!"

   




