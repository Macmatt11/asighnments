import React from 'react'
import { UserContext } from './context/UserProvider'
import IssueForm from './IssueForm'
import IssuesList from './IssuesList'

export default function Profile(){
    const {user: {username}, addIssue, issues, deleteIssue, getUserIssues} = React.useContext(UserContext)

    React.useEffect(()=>{
        getUserIssues()
    }, [])

    return(
        <div className='profileContainer'>
            <h1 className = "welcome" >Welcome Back {username.charAt(0).toUpperCase() + username.slice(1)}</h1>
            <h3 className = "post-new" >Post A New Issue:</h3>
            <IssueForm className = "issueForm" addIssue ={addIssue}/>
            <h3 className = "myPosts" >{username.charAt(0).toUpperCase() + username.slice(1)}'s Posts</h3>
            <IssuesList className = "issue-list" issues = {issues} deleteIssue={deleteIssue} isProfilePage = {true}/>
        </div>
    )
}