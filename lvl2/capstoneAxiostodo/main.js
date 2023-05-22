const ul = document.getElementById('todoList')

//get the data from api 
function getData(){
    axios.get("https://api.vschool.io/macias/todo")
    .then(response => createTodo(response.data)) //the response data is inputed into the listData array 
    .catch(error => console.log(error))
}

// the then function that lists the data to the page 
function createTodo(data){

//clear out the page before adding data 
    clearPage()

    for(let i = 0; i < data.length; i++){
        const li = document.createElement('li')
        ul.appendChild(li)
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const checkBox = document.createElement('input')
        checkBox.setAttribute('id','checkBox')
        const myImage = new Image(100, 100)
        myImage.setAttribute('class', 'workoutImg')
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'X'
        deleteButton.setAttribute('id', 'X')
        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.setAttribute('id', 'editButton')
        myImage.src = data[i].imgUrl
        h2.textContent = data[i].title
        h3.textContent = data[i].description
        const span = document.createElement('span')
        span.textContent = 'rest in sec'
        h4.textContent = data[i].price 
        li.appendChild(h2)
        if(data[i].completed){
            h2.style.textDecoration = 'line-through'
        }
        li.appendChild(h3)
        li.appendChild(h4)
        li.appendChild(span)
        li.appendChild(myImage)
        li.appendChild(checkBox)
        li.appendChild(deleteButton)
        li.appendChild(editButton)
        checkBox.setAttribute('type', 'checkbox')
        checkBox.checked = data[i].completed// sets the initial checked status of the checkbox
        checkBox.addEventListener('click', (event)=> {
            const completed =  event.target.checked// assigns the value of true if the checkbox is checked, and false if it is unchecked
            // send a PUT request to update the completed status of the corresponding todo item
            axios.put(`https://api.vschool.io/macias/todo/${data[i]._id}`, {completed}) 
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
                h2.style.textDecoration = 'line-through'
        })
        //delete button
        deleteButton.addEventListener('click',()=>{
        ul.removeChild(li)
        deleteTodo(data[i]._id)
        })

        //save and edit 
        
        //edit button 
        // const editTitle = document.createElement('input')
        // const editDescription = document.createElement('input')
        // const editPrice= document.createElement('input')
        // const editImgUrl = document.createElement('input')

        editButton.addEventListener('click', (e)=>{
            e.preventDefault()
            
            if(editButton.textContent === 'Edit'){
                console.log(h4.textContent)
                const editTitle = document.createElement('input')
                editTitle.setAttribute('id', `editTitle${data[i]._id}`
                )
                editTitle.style.position = 'relative'
                editTitle.style.bottom = '80px'
                editTitle.style.right = '30px'
                editTitle.setAttribute('placeholder', 'Workout Name')
                editTitle.value = h2.textContent
                const editDescription = document.createElement('input')
                editDescription.setAttribute('id', `editDescription${data[i]._id}`
                )
                editDescription.style.position = 'relative'
                editDescription.style.bottom = '70px'
                editDescription.style.left = '150px'
                editDescription.setAttribute('placeholder', 'Sets and Reps')
                editDescription.value = h3.textContent

                const editPrice = document.createElement('input')
                editPrice.setAttribute('id',`editPrice${data[i]._id}`
                )
                editPrice.style.position = 'relative'
                editPrice.style.bottom = '40px'
                editPrice.style.right = '20px'
                editPrice.value = h4.textContent 
                editPrice.setAttribute('placeholder', 'Rest in Seconds')

                const editImgUrl = document.createElement('input')
                editImgUrl.setAttribute('id', `editImgUrl${data[i]._id}`
                )
                editImgUrl.style.position = 'relative'
                editImgUrl.style.bottom = '30px'
                editImgUrl.style.left = '65px'
                editImgUrl.value = myImage.src
                editImgUrl.setAttribute('placeholder', ' Img Url')



                li.appendChild(editTitle)//creates the edit box 
                li.appendChild(editDescription)
                li.appendChild(editPrice)
                li.appendChild(editImgUrl)
                editButton.textContent = "save"
            } else if (editButton.textContent === 'save'){  //save button need to update the api data with a PUT and change current text content to equal new 
                const editTitle = document.getElementById(`editTitle${data[i]._id}`)
                const editDescription = document.getElementById(`editDescription${data[i]._id}`)
                const editPrice = document.getElementById(`editPrice${data[i]._id}`)
                const editImgUrl = document.getElementById(`editImgUrl${data[i]._id}`)
                const updatedTodo = {
                    title: editTitle.value,
                    description:editDescription.value,
                    price:Number(editPrice.value),
                    price:editPrice.value,
                    imgUrl:editImgUrl.value
                }
            
                axios.put(`https://api.vschool.io/macias/todo/${data[i]._id}`,updatedTodo )
                .then(res => getData())
                // .then(response => console.log(response.data), "test put request")
                .catch(error => console.log(error))

                //change text content 
                // todoForm1.title.value = editTitle.value
                // todoForm1.description.value = editDescription.value
                // todoForm1.price.value = editPrice.value
                // todoForm1.imgUrl.value = editImgUrl.value
                // editButton.textContent = "edit"
            }
        })



    
    }



}

getData()

//post the user input data from api to page 

const todoForm1 = document.todoForm //grabbing form by name 

todoForm1.addEventListener('submit', event => {
    event.preventDefault();

    const newTodo = {  //this is grabbing the data from all of the useer inputs and saving them as a constant 
        title: todoForm1.title.value,
        description: todoForm1.description.value,
        price: todoForm1.price.value,
        imgUrl: todoForm1.imgUrl.value
    }

    //need to clear out the users input data after submitted 
    todoForm1.title.value = ""
    todoForm1.description.value = ""
    todoForm1.price.value = ""
    todoForm1.imgUrl.value = ""
    //here we need to access axios to post the data 
    axios.post("https://api.vschool.io/macias/todo", newTodo)//here we are telling axios that we are going to put info into the api. the info put is the newTodo data
        .then(response => getData())// we are grabbing the data once the new todos are added 
        .catch( error => error)
})

//function to prevent the data from repeating everytime new data is inputed (clears out the list)

function clearPage(){
const divList = document.getElementById('todoList')
while(divList.firstChild){// this is saying while the divlist has a fist child remove it. this will continue to run until all children have been deleted 
    divList.removeChild(divList.firstChild) 
}
}

// ### **Part 4 - DELETE**

// - A user will be able to delete todos (this is different from marking a todo as "completed")
// - Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo

function deleteTodo(id){
axios.delete("https://api.vschool.io/macias/todo/" + id)
.then(response => console.log('Successfully Deleted'))
.catch(error => console.log(error))

}

