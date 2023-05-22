import React from "react";
import { useParams, useNavigate } from "react-router-dom"
import { MyWorkoutContext } from "../WorkoutProvider";

export default function MyWorkoutDetails() {
    const { myWorkouts } = React.useContext(MyWorkoutContext);

    const { myWorkoutId } = useParams();
    const navigate = useNavigate();
    
    console.log('myWorkoutId', myWorkoutId)

    const foundWorkout = myWorkouts.find(exercise => exercise.id === myWorkoutId);
    console.log('myworkouts',myWorkouts )
    console.log('foundworkout', foundWorkout)
        return (
    <div className="myWorkoutDetailsContainer">
        <div className="addedExerciseDetails">
            <img src={foundWorkout.gifUrl} className="exerciseImgDetails" />
            <h4 className="exerciseTitle"><span>Exercise:</span> {foundWorkout.name}</h4>
            <h4 className="muscle"><span>Targeted Muscle:</span>{foundWorkout.target}</h4>
            <h4 className="equipment"><span>Equipment Type:</span>{foundWorkout.equipment}</h4>
        </div>
        <button className="goBackHomeBtn" onClick={()=> navigate('/')}>Home</button>
        <button className="goBackBtn" onClick={() => navigate('/myWorkouts')}>Go back to My Workouts</button>
    </div>
    );
}
