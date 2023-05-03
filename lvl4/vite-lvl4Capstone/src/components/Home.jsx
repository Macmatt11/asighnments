import React from "react";

export default function Home(){
    //set state for the home form 
    const [exerciseData, setExerciseData] = React.useState({
        bodyPart: '',
        equipment: '',
        sets: 5,
        reps: 10,
        rest: 60
    })
    return(
        <div className="homeContainer">
        </div>
    )
}