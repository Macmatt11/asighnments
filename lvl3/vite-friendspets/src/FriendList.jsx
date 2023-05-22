import React from "react"
import Friend from './Friend'
import data from "./data"

export default function FriendList(){
    console.log(data)
    const friend = data.map(item =>{
        return(
            <Friend
                key = {item.id}
                item = {item}
            />
        )
    })
    return(
    <div>
        <div className="friendListDiv">
            {friend}
        </div>
    </div>
    )
}