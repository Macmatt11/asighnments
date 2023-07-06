import React from "react";
import axios from "axios";
import { MyWorkoutContext } from "../WorkoutProvider";
import { useNavigate} from "react-router-dom"

export default function Exercise(){
    const {handleChange,handleSubmit,exerciseData, addedExercises, setMyWorkouts,setAddedExercises} =React.useContext(MyWorkoutContext)
    
    function handleDelete(exerciseId) { //takes in an index, removes the corresponding exercise from the list of added exercises (which is stored in the component's state), and updates the state accordingly.
        setAddedExercises(prev=> prev.filter(item => exerciseId !== item.id )) 
    }

    const exerciseElements = addedExercises.map((exercise)=>{
        console.log()
        return (
            <div key={exercise.id} className="addedExercise"> 
            <button onClick={() => handleDelete(exercise.id)} className="xBtn">x</button>
            <img src={exercise.gifUrl} className="exerciseImg"/>
            <h4 className="exerciseTitle">Exercise: {exercise.name}</h4>
            <h4 className="muscle">Targeted Muscle: {exercise.target}</h4>
            <h4 className="equipment">Equipment Type: {exercise.equipment}</h4>
            <button className="saveButton" onClick={() => saveToMyWorkouts(exercise, exercise.id)}>Save to My Workouts</button>
            </div>
            )}
            
            )

function saveToMyWorkouts(exercise,id){ //takes in an exercise object and an id, adds the exercise to the myWorkouts state, and then deletes the corresponding exercise from the list of added exercises (which is stored in the component's state) using the handleDelete function.
    setMyWorkouts(prev => [...prev, exercise])
    handleDelete(id)
} 

const navigate = useNavigate();

    return(
        <div className="exerciseContainer">
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <label className="targetLabel" htmlFor="target">Select Target Muscle</label>
                    <br/>
                    <select required value={exerciseData.target} onChange={handleChange} name="target" id="target">
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
                        <option value= 'spine'>spine</option>
                        <option value= 'traps'>traps</option>
                        <option value= 'triceps'>triceps</option>
                    </select>
                    <br/>
                    <label className="equipmentLabel" htmlFor="equipment">Select Equipment (optional) </label>
                    <br/>
                    <select value={exerciseData.equipment} onChange={handleChange} name="equipment" id="equipment">
                        <option value= ''>--Choose--</option>
                        <option value='assisted'>assisted</option>
                        <option value='band'>band</option>
                        <option value='barbell'>barbell</option>
                        <option value='body weight'>body-weight</option>
                        <option value='cable'>cable</option>
                        <option value='dumbbell'>dumbbell</option>
                        <option value='ez barbell'>ez-barbell</option>
                        <option value='kettleball'>kettleball</option>
                        <option value='medicine ball'>medicine-ball</option>
                        <option value='olympic barbell'>olympic-barbell</option>
                        <option value='resistance band'>resistance-band</option>
                        <option value='rope'>rope</option>
                        <option value='smith-machine'>smith-machine</option>
                        <option value='stability ball'>stability-ball</option>
                        <option value='trap bar'>trap-bar</option>
                    </select>
                    <button className="getExerciseBtn">Get Exercise</button>
                </form>
            </div>
            <div className="addedExerciseBox">
            {exerciseElements}
            </div>
            <button className="myWorkoutBtn" onClick={() => navigate('/myWorkouts')}>Go back to My Workouts</button>
        </div>
        
    )
}


