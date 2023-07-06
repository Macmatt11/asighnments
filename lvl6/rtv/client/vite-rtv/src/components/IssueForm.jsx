import React from 'react'



//initial state value 
const initInputs ={
    title: '',
    description: '',
    imgUrl: ''
}
export default function IssueForm(props){
//state 
const [inputs,setInputs] = React.useState(initInputs)
const {addIssue} = props

//handle change
function handleIssueChange(e){
    const {name,value} = e.target
    setInputs(prevInputs=>({
        ...prevInputs,
        [name] : value 
    }))
}

//handle submit
function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)//adding new todo item
    setInputs(initInputs)//clears input forms 
}

const {title, description,imgUrl} = inputs
    return(
        <form onSubmit={handleSubmit} className='issueForm'>
            <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={handleIssueChange} 
            placeholder="Title"
            style={{width: "250px"}}
            />
            <input
            type="text" 
            name="imgUrl" 
            value={imgUrl} 
            onChange={handleIssueChange} 
            placeholder="Image Url"
            style={{width: "250px"}}
            />
            <textarea 
            type="text" 
            name="description" 
            value={description} 
            onChange={handleIssueChange} 
            placeholder="Issue Description..."
            style={{width: "300px", height: "300px"}}
            />
            <button  style={{width: "100px", height: "30px"}}>Add Issue</button>
        </form>
    )
}