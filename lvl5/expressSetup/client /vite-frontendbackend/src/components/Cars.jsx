import React from 'react'
import AddCarForm from './AddCarForm'


export default function Cars(props){
    const{cars} = props 
    const [editToggle,setEditToggle] = React.useState(true)

//map out the cars 
    const carsElements = cars.map(car=>(
    <div key={car._id} className='car'>
    { editToggle ? //if true then this is displayed 
        <>
        <h1>Make: {car.make}</h1>
        <h2>Model: {car.model}</h2>
        <button className='delete-btn' onClick={()=> props.deleteCar(car._id)}>
        Delete</button>
        <button className='edit-btn' 
        onClick={()=>setEditToggle(prevToggle => !prevToggle)}>Edit</button>
        </>
        :
        <>
        <AddCarForm //if false this edit form is displayed 
            make={car.make}
            model={car.model}
            _id={car._id}
            btnText = "Submit Edit"
            submit={props.editCar}
        />
        <button onClick={()=>setEditToggle(prevToggle => !prevToggle)}>Close</button>
        </>
    }
    </div>))

    return(
        <div>
        {carsElements}
        </div>
    )
}