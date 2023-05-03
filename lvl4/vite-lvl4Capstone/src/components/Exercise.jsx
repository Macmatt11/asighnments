import React from "react";
import axios from "axios";

export default function Exercise(){
    
    //set state for the home form 
    const [exerciseData, setExerciseData] = React.useState({
        muscleTarget: '',
        equipmentUsed: '',
        image:''
    })
    
    // need to have inputs for user to select the bodypart,equipment and sets and reps as well as rest
    // will have to set inital state for formdata 
    // will have to have an onchange function to make them controlled 
    function handleChange(event){
        const {name,value} = event.target 
        setExerciseData(prevData=>({
            ...prevData,
            [name]:value
        }))
    }

    //set state to store api exercise 
    const [apiExercise, setApiExercise] = React.useState([])

    //added exercises 
    const[addedExercises, setAddedExercises] = React.useState([])

function handleSubmit(event){
event.preventDefault()
const options = {
    method: 'GET',
    url: 'https://exercises2.p.rapidapi.com/',
    params: {
        muscleTarget: `${exerciseData.muscleTarget}`,
        equipmentUsed: `${exerciseData.equipmentUsed}`,
        count: '1'
    },
    headers: {
        'X-RapidAPI-Key': '5ead6688dfmshf9bb1c90cfffe4ap188323jsnc82c5eb4a15e',
        'X-RapidAPI-Host': 'exercises2.p.rapidapi.com'
    }
    };
axios.request(options)
.then(response => setApiExercise(response.data),
setAddedExercises(prevExercise => [
    ...addedExercises,
    prevExercise
])
)
.catch(error=>console.log(error))
setExerciseData({
            muscleTarget: '',
            equipmentUsed: '',
            image:''
        })
}
console.log("api"+ apiExercise)
console.dir("addedexercise" + addedExercises)
    //set state for exercises 
    const exerciseElements = apiExercise.map((exercise,index)=>(
        <div key={index}>
            <img src={exercise.image}/>
            <h3>Exercise: {exercise.name}</h3>
            <h4>Targeted Muscle: {exercise.muscleTarget}</h4>
            <h4>Equipment Type: {exercise.equipmentUsed}</h4>
        </div>
    ))

    return(
        <div className="homeContainer">
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="muscleTarget">Select Target Muscle</label>
                    <br/>
                    <select value={exerciseData.muscleTarget} onChange={handleChange} name="muscleTarget" id="muscleTarget">
                        <option value= ''>--Choose--</option>
                        <option value= 'abductors'>abductors</option>
                        <option value= 'abs'>abs</option>
                        <option value= 'adductors'>adductors</option>
                        <option value= 'biceps'>biceps</option>
                        <option value= 'calves'>calves</option>
                        <option value= 'delts'>delts</option>
                        <option value= 'forearms'>forearms</option>
                        <option value= 'glutes'>glutes</option>
                        <option value= 'hamstrings'>hamstrings</option>
                        <option value= 'lats'>lats</option>
                        <option value= 'pectorals'>pectorals</option>
                        <option value= 'quads'>quads</option>
                        <option value= 'serratus-anterior'>serratus-anterior</option>
                        <option value= 'spine'>spine</option>
                        <option value= 'traps'>traps</option>
                        <option value= 'triceps'>triceps</option>
                        <option value= 'upper-back'>upper-back</option>
                    </select>
                    <br/>
                    <label htmlFor="equipmentUsed">Select Equipment (optional) </label>
                    <br/>
                    <select value={exerciseData.equipmentUsed} onChange={handleChange} name="equipmentUsed" id="equipmentUsed">
                        <option value= ''>--Choose--</option>
                        <option value='assisted'>assisted</option>
                        <option value='band'>band</option>
                        <option value='barbell'>barbell</option>
                        <option value='body-weight'>body-weight</option>
                        <option value='bosu-ball'>bosu-ball</option>
                        <option value='cable'>cable</option>
                        <option value='dumbbell'>dumbbell</option>
                        <option value='ez-barbell'>ez-barbell</option>
                        <option value='kettleball'>kettleball</option>
                        <option value='medicine-ball'>medicine-ball</option>
                        <option value='olympic-barbell'>olympic-barbell</option>
                        <option value='resistance-band'>resistance-band</option>
                        <option value='rope'>rope</option>
                        <option value='smith-machine'>smith-machine</option>
                        <option value='stability-ball'>stability-ball</option>
                        <option value='trap-bar'>trap-bar</option>
                    </select>
                    <button>Get Exercise</button>
                </form>
            </div>
            <div>
            {exerciseElements}
            </div>
        </div>
        
    )
}



// React.useEffect(() => {
//     const options = {
//         method: 'GET',
//         url: 'https://exercises2.p.rapidapi.com/',
//         params: {count: '100'},
//         headers: {
//             'X-RapidAPI-Key': '5ead6688dfmshf9bb1c90cfffe4ap188323jsnc82c5eb4a15e',
//             'X-RapidAPI-Host': 'exercises2.p.rapidapi.com'
//         }
//     };
//     axios.request(options)
//         .then(response=> setApiExercise(response.data))
//         .catch(error=>console.log(error))
// }, []);

// console.log(exerciseData)
// // will need to have a submit that when submit is pressed a get request occurs 
// function handleSubmit(event){
//     event.preventDefault()
//     setFilteredData(apiExercise.filter(exercise => 
//         exercise.muscleTarget === exerciseData.muscleTarget &&
//         exercise.equipmentUsed === exerciseData.equipmentUsed
//     )) 
//     setExerciseData({
//         muscleTarget: '',
//         equipmentUsed: '',
//         image:''
//     })
// }

// //will need to store that data into an array as state 
// const [filteredData, setFilteredData] = React.useState([])

// // then will need to map that out and have individual workouts 
// console.log(filteredData)
