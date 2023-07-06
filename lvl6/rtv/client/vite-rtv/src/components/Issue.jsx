import React from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {AiOutlineDislike} from 'react-icons/ai'
import {RiDeleteBinLine} from 'react-icons/ri'
import { UserContext } from './context/UserProvider'
import {FaRegComment} from 'react-icons/fa'
import CommentForm from './CommentForm'
import Comments from './Comments'
import {MdOutlineExpandMore} from 'react-icons/md'


export default function Issue(props){
const {issues, deleteIssue, isProfilePage} = props
const{addComment, commentsData, upVote, downVote} = React.useContext(UserContext)

    //comments state 
    const [showCommentsForPosts, setShowCommentsForPosts] = React.useState([]);
    //toggle comments
    function toggleComment(issueId) {
        setShowCommentsForPosts(prev => {
            const index = prev.indexOf(issueId);
            if (index > -1) {
            return prev.filter(id => id !== issueId);
            } else {
            return [...prev, issueId];
            }
        });
        }

        const[showDiv, setShowDiv] = React.useState(false)

        function toggleClassName(){
            setShowDiv(prev=>!prev)
        }

    const issueListElements = issues.map(issue =>(
        <div key={issue._id}  className={isProfilePage ? 'issueProfile': 'issuePublic'}>
            <h1 className='issueTitle'>{issue.title}</h1>
            <h3 className='issueDescription'>{issue.description}</h3>
            <img className='issueImg' src = {issue.imgUrl} alt = {issue.imgUrl} width={300} style={{width: '300px', height: '200px'}}/>
            <span className='likeIcon'>{issue.likes.length}<AiOutlineLike onClick={()=>upVote(issue._id)}/></span> <span className='dislikeIcon'>{issue.dislikes.length}<AiOutlineDislike  onClick={()=>downVote(issue._id)}/></span>
            {isProfilePage && <RiDeleteBinLine className='delete' onClick={()=>deleteIssue(issue._id)}/>}
            <FaRegComment className='comment' onClick={() => toggleComment(issue._id)} />
            {showCommentsForPosts.includes(issue._id) && (
            <CommentForm addComment={addComment} issueId={issue._id} />
            )}
            <h3 className='commentSection'>Comments</h3> <MdOutlineExpandMore className='expand' onClick={toggleClassName}/>
            <Comments
            issueId = {issue._id}
            commentsData={commentsData}
            toggleClassName={toggleClassName}
            showDiv={showDiv}
            />
        </div>
        ))

    return(
    <div>
        {issueListElements}
    </div>
    )
}