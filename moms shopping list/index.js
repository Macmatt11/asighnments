//variables
const form = document.myForm
const input = document.getElementById("input");
const subButton = document.getElementById("subButton");
const uList = document.getElementById("list");
const inputValue = form.title.value 

//create li from inputs
function createLi(){
   const li = document.createElement("li"); //creates li under the ul tag
    uList.appendChild(li)
    const div = document.createElement("div");// creates child node to li
    div.textContent = input.value             // makes divs text content equal to whatever is inputed 
    div.setAttribute("id","div")
    const editBtn = document.createElement("button");//creates edit button as a child to li 
    editBtn.textContent = "edit"
    editBtn.setAttribute("id","edButton")
    const xBtn = document.createElement("button"); // creates "X" button as child to li 
    xBtn.textContent = "X"
    xBtn.setAttribute("id","xButton");
    //xbtn
    xBtn.addEventListener("click",() => {    //function removes the whole li and children when the delete button is pressed 
     uList.removeChild(li)
    });
    //editbtn
    editBtn.addEventListener("click",(event) => { // creates another input box when the edit button is clicked 
      const editBox = document.createElement("input")
      if ( editBtn.textContent === "edit"){
    li.appendChild(editBox)
     editBox.value = div.textContent // sets divs text content equal to whatever the edit input content is
     editBtn.textContent = "save";// changes the text on button from edit to save 
     //save btn
}  else if (editBtn.textContent === "save"){        //when buttons text content is saved 
    console.dir(event.target.parentNode.childNodes)
    console.log(event.target.parentNode.childNodes)
    const editBox = event.target.parentNode.childNodes[3] // this targets the childnode of the input and saves info
   div.textContent = editBox.value; 
           li.removeChild(editBox) // removed the edit input 
           editBtn.textContent = "edit"; // changes txt of button back to edit 
}

});
    
    li.appendChild(div);  //appends the div,button, and xbtn to li as children 
    li.appendChild(editBtn);
    li.appendChild(xBtn)

console.log(createLi)

return li

}

//submit data

form.addEventListener("submit",(event) => {; // when submit is clicked the function of creating li occurs 
    event.preventDefault();
    const li = createLi();
    input.value = "";        // removes txt from inside input box 
    uList.appendChild(li);
   
})
   












//} else if (button.textContent === "save"){
          // const divBox = document.getElementById("div");
           //const editBox = document.getElementById("editBox");
           //divBox.textContent = editBox.value;
           //li.removeChild(editBox)
           //button.textContent = "edit";


        //}









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
