import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import Bounties from './components/Bounties'
import AddBountyForm from './components/AddBountyForm'

function App() {
//state for saving api data 
const [bounties, setBounties] = React.useState([])

//get request function
function getBounties(){
  axios.get('/api/bounty')
  .then(res=>setBounties(res.data))
  .catch(err=>console.log(err))
}
console.log( 'bounties',bounties)

//store get data to state on first render 
React.useEffect(()=>{
  getBounties()
},[])

//post new bounty 
function addBounty(newBounty){
  axios.post('/api/bounty', newBounty)
  .then(res=>{
    setBounties(prevBounties=> [...prevBounties, res.data])
  })
  .catch(err => console.log(err))
}

//delete bounty
function deleteBounty(bountyId){
axios.get(`/api/bounty/${bountyId}`)
.then(res=>setBounties(prevBounties=>prevBounties.filter(bounty=>bounty._id !== bountyId)))
.catch(err=>console.log(err))
}

//put request(edit)
function editBounty(updates,bountyId){
  axios.put(`/api/bounty/${bountyId}`, updates)
  .then(res=>{
    setBounties(prevBounty=> prevBounty.map(bounty=> bounty._id !== bountyId ? bounty : res.data))
  })//means if the id was not updated is true then keep the same car but if the id is the selected id then return the response data 
  .catch(err=>console.log(err))
}
  return (
    <div className='bountyContainer'>
      <AddBountyForm
        submit={addBounty} 
        bounties= {bounties}
        btnText = "Add Bounty"
      />
      <Bounties
        bounties={bounties}
        deleteBounty={deleteBounty}
        editBounty={editBounty}
      />
    </div>
  )
}

export default App

//get request to diplay data onto dom [x]
//post request [x]
//delete request []
//put request []
//edit button []