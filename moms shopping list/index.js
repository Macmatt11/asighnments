//variables
const form = document.myForm
const input = document.getElementById("input");
const subButton = document.getElementById("subButton");
const uList = document.getElementById("list");
const inputValue = form.title.value 

//create li from inputs
function createLi(){
   const li = document.createElement("li");
    uList.appendChild(li)
    const div = document.createElement("div");
    div.textContent = input.value
    div.setAttribute("id","div")
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit"
    editBtn.setAttribute("id","edButton")
    const xBtn = document.createElement("button");
    xBtn.textContent = "X"
    xBtn.setAttribute("id","xButton");
    xBtn.addEventListener("click",() => {
     uList.removeChild(li)
    });
    editBtn.addEventListener("click",(event) => {
        if ( editBtn.textContent === "edit"){
     const editBox = document.createElement("input");
    li.appendChild(editBox)
     editBox.textContent = div.value
     editBtn.textContent = "save";
}  else if (editBtn.textContent === "save"){
    console.dir(event.target.parentNode.childNodes)
    const editBox = event.target.parentNode.childNodes[3]
   div.textContent = editBox.value;
           li.removeChild(editBox)
           editBox.textContent = "edit";
}

});





 //} else if (button.textContent === "save"){
          // const divBox = document.getElementById("div");
           //const editBox = document.getElementById("editBox");
           //divBox.textContent = editBox.value;
           //li.removeChild(editBox)
           //button.textContent = "edit";


        //}
            
        
    li.appendChild(div);
    li.appendChild(editBtn);
    li.appendChild(xBtn)

console.log(createLi)

return li

}




//submit data

form.addEventListener("submit",(event) => {;
    event.preventDefault();
    const li = createLi();
    input.value = "";
    uList.appendChild(li);
   
})
   






















//create li from inputs
//function createLi(){
  //  const li = document.createElement("li");
    //uList.appendChild(li)
    //const div = document.createElement("div");
    //div.textContent = input.value;
    //div.setAttribute("id","div")
    //const editBtn = document.createElement("button");
    //editBtn.textContent = "edit"
    //editBtn.setAttribute("id","edButton")
    //const xBtn = document.createElement("button");
    //xBtn.textContent = "X"
    //xBtn.setAttribute("id","xButton")

    //li.appendChild(div);
    //li.appendChild(editBtn);
    //li.appendChild(xBtn)

//console.log(createLi)

//return li

//}
//submit input data
 //form.addEventListener("submit", function(event){
   // event.preventDefault();
    //const li = createLi();
      //  if (input.value === "") { 
        //alert("Enter List Item") }
        //else{
        //uList.appendChild(li);
    //}
      //  input.value = "";

   
//});


//delete
//uList.addEventListener("click",function(event){
  //  if (event.target.tagName = "button") {
    //    const button = event.target;
      //  const li = button.parentNode;
        //const ul = li.parentNode;
        //if (button.textContent === "X"){
          //  ul.removeChild(li);
  //edit          
        //} else if ( button.textContent === "edit"){
          //  const editBox = document.createElement("input");
           // editBox.type = "text";
           // editBox.setAttribute("id", "editBox")
            //li.appendChild(editBox);
            //button.textContent = "save";
        //save
            //} else if (button.textContent === "save"){
          // const divBox = document.getElementById("div");
           //const editBox = document.getElementById("editBox");
           //divBox.textContent = editBox.value;
           //li.removeChild(editBox)
           //button.textContent = "edit";


        //}
            
        
    //}
//}
//)
