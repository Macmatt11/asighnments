import React from "react"
import AddBountyForm from "./AddBountyForm"

export default function Bounties(props){
const [editToggle, setEditToggle] = React.useState(true)
    //map bounties to show api data on dom
    const {bounties} = props
    const bountyElements = bounties.map(bounty=> (<div key={bounty._id} className="bountyBox">
        { editToggle ?
        <>
            <h3>FirstName: {bounty.firstName}</h3>
            <h3>LastName: {bounty.lastName}</h3>
            <h3>Living: {bounty.living.toString()}</h3>
            <h3>Bounty: {bounty.bounty}  </h3>
            <h3>Type: {bounty.type}</h3>
            <button className='delete-btn' onClick={()=> props.deleteBounty(bounty._id)}>
            Delete</button>
            <button className='edit-btn' 
            onClick={()=>setEditToggle(prevToggle => !prevToggle)}>Edit</button>
        </>
        :
        <>
            <AddBountyForm
                firstName= {bounty.firstName}
                lastName={bounty.lastName}
                living={bounty.living}
                bounty={bounty.bounty}
                type={bounty.type}
                _id={bounty._id}
                btnText='Submit Edit'
                submit ={props.editBounty}
            />
            <button onClick={()=>setEditToggle(prevToggle => !prevToggle)}>Close</button>
        </>
        }
        </div>
    ))

    return(
        <div>
            {bountyElements}
        </div>
    )
}

