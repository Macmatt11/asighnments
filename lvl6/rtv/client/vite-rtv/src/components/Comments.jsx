import { UserContext } from "./context/UserProvider"
import {useContext} from "react"
import {TiDeleteOutline} from 'react-icons/ti'
import React from 'react'

export default function Comments(props){
    const {issueId,showDiv} = props
    const{setCommentsData, commentsData, deleteComment} = useContext(UserContext)

    const filteredComments = commentsData.filter(comment => comment.issue === issueId)
    const commentElements = filteredComments.map(comment=>(
    <div key = {comment._id} >
    <p> {comment.user.username}: {comment.comment} <TiDeleteOutline onClick={()=>deleteComment(comment._id)} className="deleteComment"/> </p>
    </div>
    ))

    

    return(
        <div  className={!showDiv  ? "commentsDiv": 'expanded'}>
            {commentElements}
        </div>
        
    )
}