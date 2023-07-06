import React from 'react'
import { UserContext } from './context/UserProvider';


const defaultInput = {
    comment: ''
}
export default function CommentForm(props){
    //state
    // const [comment, setComment] = useState(defaultInput);
    const [inputs,setInputs] = React.useState(defaultInput)
    const {addComment} = React.useContext(UserContext)
    const {issueId}= props

//handle change
function handleCommentChange(e){
    const {name,value} = e.target
    setInputs(prevInputs=>({
        ...prevInputs,
        [name] : value 
    }))
}

//handle submit
function commentSubmit(e){
    e.preventDefault()
    addComment(inputs,issueId)//adding new todo item
    setInputs(defaultInput)//clears input forms 
}

// const [showComment,setShowComment]= React.useState

const {comment} = inputs
    return(
        
            <form onSubmit={commentSubmit} className='commentForm'>
                <textarea
                    type= "text"
                    name='comment'
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Type your comment..."
                    style={{width: '200px'}}
                />
                <button className= 'postComment' type="submit">Post</button>
            </form>
            
        
        
        
    )
}