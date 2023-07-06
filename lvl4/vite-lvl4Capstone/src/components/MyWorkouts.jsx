import React from "react";
import { useNavigate,Link} from "react-router-dom"
import { MyWorkoutContext } from "../WorkoutProvider";


export default function MyWorkouts(){

    const {myWorkouts, setMyWorkouts, setAddedExercises} =React.useContext(MyWorkoutContext)

    const navigate = useNavigate();

    function deleteFromMyWorkoutsList(exercise,id){//In summary, the deleteFromMyWorkoutsList function takes in an exercise object and an id, adds the exercise to the addedExercises state, and then removes the corresponding exercise from the myWorkouts state using the removedItemsFromMyWorkout function.
        setAddedExercises(prev => [...prev, exercise])
        removedItemsFromMyWorkout(id)
    }

    function removedItemsFromMyWorkout(exerciseId){//takes in an index, removes the corresponding exercise from the list of myWorkouts (which is stored in the component's state), and updates the state accordingly.
        setMyWorkouts(prev=> prev.filter(item => exerciseId !== item.id ))
    }
    
    const savedElements = myWorkouts.map((exercise)=>{
        return(
            <div key={exercise.id} className="myWorkoutsBox">
                <h3 className="myWorkoutTitle">{exercise.name}</h3>
                <div className="image-overlay"></div>
                <Link className="myWorkout" to={`/myWorkouts/${exercise.id}`}>
                        <img src={exercise.gifUrl} className="myWorkoutImg"/>
                </Link> 
                
                <button onClick={() => deleteFromMyWorkoutsList(exercise, exercise.id)} className="remove">Remove</button>
            </div>
        ) 
    }
    )



    return(
        <div className="myWorkoutsContainer"> 
        <h2 className="mainTitle">My<span>Workouts</span></h2>
        {savedElements}
        <button className="homeBtn" onClick={()=> navigate('/')}>Home</button>
        <button className="backBtn" onClick={()=> navigate(-1)}>Back</button>
        </div>
    )
}