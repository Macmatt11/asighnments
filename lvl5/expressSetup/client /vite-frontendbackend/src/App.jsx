import {useEffect,useState}from 'react'
import './App.css'
import axios from 'axios'
import Cars from './components/Cars'
import AddCarForm from './components/AddCarForm'

function App() {
const [cars,setCars] = useState([])

//get request 
function getCars(){
  axios.get('/api/cars')
.then(res => setCars(res.data))
.catch(err => console.log(err.response.data.errMsg))//errMsg is whatver the msg was called in server. here that message will be displayed in the front end 
}

//store get data to state on first render
useEffect(()=>{
getCars()
},[])
console.log(cars)

//post new car
function addCar(newCar){
axios.post('/api/cars', newCar)
.then(res=>{
  setCars(prevCars=>[...prevCars, res.data])
}) //resetting state to an [] w/prev data and the new response data 
.catch(err => console.log(err))
}

//delete
function deleteCar(carId){
  axios.delete(`/api/cars/${carId}`)//taking this id and removing from data base 
  .then(res=> setCars(prevCars=> prevCars.filter(car=> car._id !== carId)))//we only want to return the car if its id does not equal the carId we asked to delete 
  .catch(err=>console.log(err))
}

//put request (edit)
function editCar(updates, carId){//updates parameter in the editCar function receives its data from the inputs object, which contains the updated values entered in the form fields. since we used the same form for the updates 
axios.put(`/api/cars/${carId}`, updates)
.then(res=> {
  setCars(prevCars=> prevCars.map(car=> car._id !== carId ? car : res.data))
})//means if the id was not updated is true then keep the same car but if the id is the selected id then return the response data 
.catch(err=> console.log(err))
}

//filter makes w/query 
function handleFilter(e){
  if(e.target.value === 'reset'){
    getCars()
  }else{
  axios.get(`/api/cars/search/make?make=${e.target.value}`)
  .then(res=>setCars(res.data))
  .catch(err=> console.log(err))
}
  }

  return (
    <div className='carContainer'>
      <AddCarForm
        submit={addCar}
        cars={cars}
        btnText = "Add Car"
      />
      <h4>Filter by Make</h4>
      <select onChange={handleFilter} className='filter-form'>
        <option value={'reset'}>All Cars</option>
        <option value={'toyota'}>Toyota</option>
        <option value={'nissan'}>Nissan</option>
        <option value={'mazda'}>Mazda</option>
        <option value={'mitsubishi'}>Mitsubishi</option>
      </select>
      <Cars 
        cars={cars}
        deleteCar={deleteCar}
        editCar={editCar}
      />
    </div> 
  )
}

export default App
