import React from 'react'
import {TiDeleteOutline} from 'react-icons/ti'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import { UserContext } from '../../context/UserProvider'
import './comment.css'


export default function Comments(props){
    const {foodPostId, showDiv, isProfilePage} = props
    const{ commentsData, deleteComment, commentDownVote, commentUpVote} = React.useContext(UserContext)



    const filteredComments = commentsData.filter(comment => comment.foodPost === foodPostId)
    const commentElements = filteredComments.map(comment=>(
    <div key = {comment._id} className='commentBox'>
            <span>@{comment.user.username}:</span>
            <span className='likeIconComment'>{comment.likes.length}<AiOutlineLike onClick={()=>commentUpVote(comment._id)}/></span><span className='dislikeIconComment'>{comment.dislikes.length}<AiOutlineDislike onClick={()=>commentDownVote(comment._id)}/></span>
            <p>{comment.comment} <TiDeleteOutline onClick={()=>deleteComment(comment._id)} className="deleteComment"/></p>
    </div>
    ))

    

    return(
        <div  className={showDiv && !isProfilePage? "expandedCommentsDiv" : "commentsDiv"}>
            {commentElements}
        </div>
        
    )
}