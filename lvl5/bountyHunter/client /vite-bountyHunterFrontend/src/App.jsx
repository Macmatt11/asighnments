import React from 'react'
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
  .catch(err=>console.log(err.response.data))
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
  .catch(err => console.log(err.response.data))
}

//delete bounty
function deleteBounty(bountyId){
axios.get(`/api/bounty/${bountyId}`)
.then(res=>setBounties(prevBounties=>prevBounties.filter(bounty=>bounty._id !== bountyId)))
.catch(err=>console.log(err.response.data))
}

//put request(edit)
function editBounty(updates,bountyId){
  axios.put(`/api/bounty/${bountyId}`, updates)
  .then(res=>{
    setBounties(prevBounty=> prevBounty.map(bounty=> bounty._id !== bountyId ? bounty : res.data))
  })//means if the id was not updated is true then keep the same car but if the id is the selected id then return the response data 
  .catch(err=>console.log(err.response.data))
}

//filter w/queries
function handleTypeFilter(e){
  if(e.target.value === 'reset'){
    getBounties()
  }else{
  axios.get(`/api/bounty/search/type?type=${e.target.value}`)
  .then(res=>setBounties(res.data))
  .catch(err=> console.log(err.response.data))
}
  }

function filterAlive(e){
if(e.target.value === 'reset'){
  getBounties()
}else{
  axios.get(`/api/bounty/search/living?living=${e.target.value}`)
  .then(res=>setBounties(res.data))
  .catch(err=> console.log(err.response.data))
}
}
  return (
    <div className='bountyContainer'>
      <AddBountyForm
        submit={addBounty} 
        bounties= {bounties}
        btnText = "Add Bounty"
      />
      <h4>Filter by Living status</h4>
      <select onChange={filterAlive} className='filter-form'>
        <option value={'reset'}>All Bounties</option>
        <option value={true}>Alive</option>
        <option value={false}>Terminated</option>
      </select>
      <h4>Filter by Jedi or Sith </h4>
      <select onChange={handleTypeFilter} className='filter-form'>
        <option value={'reset'}>All Bounties</option>
        <option value={'jedi'}>Jedi</option>
        <option value={'sith'}>Sith</option>
      </select>
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