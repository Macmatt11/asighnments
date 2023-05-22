import React from 'react'

export default function AddCarForm(props){
    
    const [inputs,setInputs] = React.useState({
        make: props.make || '',
        model: props.model || ''
    })

    function handleChange(e){
    const {name,value} = e.target 
    setInputs(prev => ({
        ...prev, 
        [name] : value 
    }))
    }
console.log(inputs)
    //submit 
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)//inputs is the new movie object state 
        setInputs({
            make: '',
            model: ''
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name='make' value={inputs.make} onChange={handleChange} placeholder='Make'/>
            <input name='model' value={inputs.model} onChange={handleChange} placeholder='Model'/>
            <button>{props.btnText}</button>
        </form>
    )
}