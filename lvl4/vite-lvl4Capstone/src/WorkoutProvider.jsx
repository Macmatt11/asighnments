import React from "react"
import axios from 'axios'


//create context to send all data to every component when needed 
const MyWorkoutContext = React.createContext()

function WorkoutProvider(props){
//set state for the home form 
const [exerciseData, setExerciseData] = React.useState({
    target: '',
    equipment: '',
    gifUrl:''
})

//state for myworkouts
const [myWorkouts, setMyWorkouts]= React.useState([])

// will have to have an onchange function to make inputs controlled 
function handleChange(event){
    const {name,value} = event.target 
    setExerciseData(prevData=>({
        ...prevData,
        [name]:value
    }));
    
}
console.log('exercisedata',exerciseData)

//added exercises 
const[addedExercises, setAddedExercises] = React.useState([])


//function for submit 
function handleSubmit(event) {
event.preventDefault();
const options = { //houses the key for api used 
method: "GET",
url: `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseData.target}`,//sets the target muscle to whatever is selected 
headers: {
    "X-RapidAPI-Key": "5ead6688dfmshf9bb1c90cfffe4ap188323jsnc82c5eb4a15e",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
}
};
// if statement states if the muscle group and equipment have a value then perform this axios request that filters the data
if(exerciseData.target !== '' && exerciseData.equipment !== ''){
axios.request(options)
.then((response) => {
const filteredExercises = response.data.filter((exercise) => {// data is filters data for workouts with equipment that match the users selected equipment
    return exercise.equipment === exerciseData.equipment; 
});
    setAddedExercises(filteredExercises);//the filtered data is pushed into the added exercise array
    setExerciseData({
    target: "",
    equipment: "",
    gifUrl: ""
    });
})
.catch((error) => console.log(error));
//this else if states that if the muscle group has a value but the equipment doesnt then perform a request that isnt filtered for the equipment type 
}else if(exerciseData.target !== '' && exerciseData.equipment === ''){
    axios.request(options)
    .then((response) => {
    setAddedExercises(response.data);
    setExerciseData({
    target: '',
    equipment: '',
    gifUrl:''
})
})
.catch(error=>console.log(error))
}
}


    return(
        <MyWorkoutContext.Provider value={{
            myWorkouts,
            setMyWorkouts,
            addedExercises,
            setAddedExercises,
            handleSubmit,
            handleChange,
            exerciseData
        
        }}>
            {props.children}
        </MyWorkoutContext.Provider>
    )
}


export {WorkoutProvider, MyWorkoutContext}