import React from 'react'

export default function Form(props){

const badge = props.formBadge.map((input,index)=> (
    <div key={index} className={props.formBadge.length === 1 ? 'single': 'multiple'}>

        <h2 className='idTitle'>Super Hero ID Badge:</h2>
        <h4 className='badgeName'> Name: {input.firstName} {input.lastName}</h4>
        <h4 className='badgeBirth'>Birth Place: {input.birthPlace}</h4> <h4 className='badgePwr'>Super power: {input.superPower}</h4> 
        <h4 className='badgeEmail'>Email: {input.email}</h4> <h4 className='badgePhone'>Phone: {input.phoneNumber}</h4> <p>{input.comments}</p>
    </div> ))
console.log(badge)
    return(
        <div className= "mainInputDiv">
            <form onSubmit={props.handleSubmit}>
                <input
                    placeholder= 'First Name'
                    type = 'text'
                    name = 'firstName'
                    value= {props.item.firstName}
                    onChange = {props.handleChange}
                    className = 'firstNameInput'
                    required
                />
                <input
                    required
                    placeholder='Last Name'
                    type = 'text'
                    name = 'lastName'
                    value = {props.item.lastName}
                    onChange = {props.handleChange}
                    className = 'lastNameInput'
                />
                < input
                    placeholder='Birth Place'
                    type = 'text'
                    name = 'birthPlace'
                    value = {props.item.birthPlace}
                    onChange = {props.handleChange}
                    className = 'birthPlaceInput'
                    required
                />
                <input
                    required
                    placeholder='Super Power'
                    type = 'text'
                    name = 'superPower'
                    value = {props.item.superPower}
                    onChange = {props.handleChange}
                    className = 'superPower'
                />
                <input
                    required
                    placeholder='Email'
                    type = 'email'
                    name = 'email'
                    value = {props.item.email}
                    onChange = {props.handleChange}
                    className = 'emailInput'
                />
                <input
                    required
                    placeholder='Phone Number'
                    type = 'tel'
                    name = 'phoneNumber'
                    value = {props.item.phoneNumber}
                    onChange = {props.handleChange}
                    className = 'phonenumberBox'
                    pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
                    onInvalid={(event) => event.target.setCustomValidity('Enter phone number in this format: 1234567890')}
                    onInput={(event) => event.target.setCustomValidity('')}
                    
                />
                <textarea
                    value={props.item.comments}
                    placeholder="Describe Powers"
                    onChange={props.handleChange}
                    name="comments"
                    required
                    className='commentBox'
                />
                <button className='submitbtn'>Submit</button> <button className="clearBtn"type="button" onClick={props.handleClick}>Clear</button>
            </form>
            <div className='badgeList'>
                    {badge}
            </div>
        </div>
    )
}