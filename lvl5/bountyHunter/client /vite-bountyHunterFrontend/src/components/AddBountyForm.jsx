import React from "react";


export default function AddBountyForm(props){
    //input data state
    const defaultState = {
        firstName:props.firstName || '', 
        lastName:props.lastName || '', 
        living:props.living || null, 
        bounty: props.bounty || null,
        type: props.type || ''
    }
    const [inputData, setInputData] = React.useState(defaultState)

    //need handlechange to control inputs 
    function handleChange(e){
        const {name,value} = e.target
        setInputData(prevData=>({
            ...prevData,
            [name] : value 
        }))
    }
    console.log(inputData)

    //submit
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputData, props._id)
        setInputData(defaultState)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="firstName" value={inputData.firstName} onChange={handleChange} placeholder="First Name"/>
            <input name="lastName" value={inputData.lastName} onChange={handleChange} placeholder="Last Name"/>
            <input name="living" value={inputData.living} onChange={handleChange} placeholder="Living: True or False"/>
            <input name="bounty" value={inputData.bounty} onChange={handleChange} placeholder="Bounty" type="number"/>
            <input name="type" value={inputData.type} onChange={handleChange} placeholder="Type: Jedi or Sith"/>
            <button className="submit-btn">{props.btnText}</button>
        </form>
    )
}