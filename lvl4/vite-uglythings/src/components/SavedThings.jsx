import React from "react"
import { ThingsContext } from "../ThingsProvider"
import axios from "axios"

export default function SavedThings(props){

    const {apiData,setApiData} = React.useContext(ThingsContext)

    function handleDelete(index) { //takes an index parameter and is used to delete a specific item from apiData array
        const filteredItems = apiData.filter((item, thingIndex)=> thingIndex !== index)//item represents the current thing being processed by filter(), 
        //while thingIndex represents its index in the array.
        setApiData(filteredItems) //updates the state of the component by setting the apiData state to the filteredItems array
        axios.delete(`https://api.vschool.io/mathewmacias/thing/${apiData[index]._id}`)
        .then(response => {
            console.log('Successfully Deleted')
        })
        .catch(error => console.log(error))
    }

    //setting state for edit  button 
const [thingEdit, setThingEdit]= React.useState(null)// the meme that will be edited identified by index. default index is null
const [editTitle, setEditTitle] = React.useState('')// state of edited toptext 
const [editDescription, setDescription] = React.useState('')//state of edited bottom txt 

//function for editing text 
function saveThingEdit(index) {
    const updatedThing = apiData.map((uglyThing, thingIndex) => {
    if (thingIndex === index) {
        return {
        ...uglyThing,
        title: editTitle,
        description: editDescription
        };
    }
    return uglyThing;
    });
    axios
    .put(`https://api.vschool.io/mathewmacias/thing/${apiData[index]._id}`, updatedThing[index])
    .then(res => {
        setApiData(updatedThing);
        setThingEdit(null);
        setEditTitle('');
        setDescription('');
    })
    .catch(err => console.log(err));
}

    const uglyElements = apiData.map((thing,index) => (
        <div key={index} className="addedThing">
            <img src={thing.imgUrl} />
            { thingEdit === index ?
                <div>
                    <input type="text" onChange={(e)=>setEditTitle(e.target.value)} value ={editTitle} placeholder="Title" className="title"/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value ={editDescription} placeholder="Description" className="desctiption"/>
                </div>
                :
                <div>
                    <h2>{thing.title}</h2>
                    <p>{thing.description}</p>
                </div>
            }
            <button  onClick={() => handleDelete(index)} className="thingBtn">Delete</button> 
            <button  onClick={() => setThingEdit(index)} className="thingBtn">Edit Text</button>
            <button  onClick={()=> saveThingEdit(index)} className="thingBtn">Save</button>
        </div>
        )) 

    return(
        <div className="savedThings">
        {uglyElements}
        </div>
    )
}