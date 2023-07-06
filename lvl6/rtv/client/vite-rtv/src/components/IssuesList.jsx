import React from 'react'
import Issue from './Issue'
import { UserContext } from './context/UserProvider'


export default function IssuesList(props){
    const {issues, deleteIssue, isProfilePage} = props
    const {commentsData} = React.useContext(UserContext)

    return(
        <div className='issue-list'>
            <Issue  issues = {issues} deleteIssue={deleteIssue} isProfilePage={isProfilePage}/>

        </div>
    )
}