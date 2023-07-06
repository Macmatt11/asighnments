import React from 'react'
import { UserContext } from './context/UserProvider'
import IssuesList from './IssuesList'


export default function Public(){
    const {getAllIssues,issues, deleteIssue} = React.useContext(UserContext)

    React.useEffect(()=>{
        getAllIssues()
    },[])
    return(
        <div className='publicContainer'>
            <h4 className='publicFeed'>Public News feed</h4>
            <IssuesList issues = {issues} isProfilePage = {false}/>
        </div>
    )
}