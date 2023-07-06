import React from "react";
import { UserContext } from "../../context/UserProvider";
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiDeleteBinLine} from 'react-icons/ri'
import {FaRegComment} from 'react-icons/fa'
import CommentForm from "../comments/CommentsForm";
import Comment from '../comments/Comment'
import { MdOutlineExpandMore, MdClose} from 'react-icons/md';
import { Link } from "react-router-dom";



export default function FoodPost(props){
    const {foodPosts, deletePost, isPublicPage, isProfilePage} = props
    const{addComment, commentsData, upVote, downVote, showCommentsForPosts, setShowCommentsForPosts, toggleComment} = React.useContext(UserContext)

    // //commentsform state 
    // const [showCommentsForPosts, setShowCommentsForPosts] = React.useState([]);
    // //toggle commentform
    // function toggleComment(foodPostId) {
    //     setShowCommentsForPosts(prev => {
    //         const exists = prev.some(id => id === foodPostId);// line checks if the foodPostId already exists in the showCommentsForPosts.
    //         //the some() method is used to iterate over the array and returns true if any element matches the condition (id === foodPostId).
    //         if (exists) {//If the foodPostId already exists
    //         return prev.filter(id => id !== foodPostId);//we want to remove the foodPostId from the showCommentsForPosts array. The filter() method is used to create a 
    //         //new array with all the elements that do not match the condition (id !== foodPostId).
    //         } else {
    //         return [...prev, foodPostId];
    //         }//we want to add the foodPostId to the showCommentsForPosts array. The spread operator ... is used to create a new array that includes all 
    //         //the elements from the previous state (prev), and foodPostId is appended to the end
    //     });
    //     }

        const[showDiv, setShowDiv] = React.useState(false)
        
        function toggleClassName(){
            setShowDiv(prev=>!prev)
        }

const foodPostElements = foodPosts.map(foodPost=>(
    <div key={foodPost._id} className={isProfilePage ? 'postProfile':'postPublic'}>
        {isProfilePage ? 
        <Link to={`/profile/${foodPost._id}`}>
        <img src={foodPost.imgUrl} className="postImg"/>
        </Link>
        :
        <img src={foodPost.imgUrl} className="postImg"/>
        }
    <h1 className="postTitle"> {foodPost.restaurantName}</h1>
    <p>{foodPost.description}</p>
    <span className='likeIcon'>{foodPost.likes.length}<AiOutlineLike onClick={()=>upVote(foodPost._id)}/></span>
    <span className='dislikeIcon'>{foodPost.dislikes.length}<AiOutlineDislike  onClick={()=>downVote(foodPost._id)}/></span>
    {!isPublicPage && <RiDeleteBinLine className='delete' onClick={()=>deletePost(foodPost._id)}/>}
    {showCommentsForPosts.length > 0 ? 
    <MdClose className='comment' onClick={() => toggleComment(foodPost._id)}/>
    :
    <FaRegComment className='comment' onClick={() => toggleComment(foodPost._id)} />
    }
    {showCommentsForPosts.includes(foodPost._id) && (
        <CommentForm addComment={addComment} foodPostId={foodPost._id} className="commentForm"
        setShowCommentsForPosts={setShowCommentsForPosts}
        />
    )}
    <h3 className='commentSection'>Comments</h3> <MdOutlineExpandMore className={!isProfilePage ? 'expandPublic' : 'expand' } onClick={()=>toggleClassName(foodPost._id)}/>
    <Comment 
    foodPostId = {foodPost._id}
    commentsData={commentsData}
    toggleClassName={toggleClassName}
    showDiv={showDiv}
    isProfilePage={isProfilePage}
    />
    </div>
))
    return(
        <>
            {foodPostElements}
        </>
    )
}