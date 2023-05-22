import React from 'react'
import BlogPost from './BlogPost'
import data from './data'

export default function BlogList(){
    console.log(data)
    const blogLists = data.map(item => {
        return(
            <BlogPost
                key = {item.id}
                item = {item}

            />
        )
    })
    return(
        <div>
            {blogLists}
        </div>
    )
}