import React from 'react'

export default function BlogPost(props){
    console.log(props)
    return (
        <section className='postBox'>
            <div className='postDiv'>
                <h2>{props.item.title}</h2>
                <h3> {props.item.subTitle} </h3>
                <p>Posted By <span className='parSpan'>
                    <a className='authorLink'>{props.item.author} </a>
                    </span> on {props.item.date}
                </p>
                <hr/>
            </div>
        </section>
    )
}