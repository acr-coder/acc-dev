import React from 'react'
import './singlePost.css'

export default function SinglePost() {
    return (
        <div className="container singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://picsum.photos/id/1002/600/400" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet 
                    <div className="singlePostEdit">
                    <span className="singlePostIcon">Edit</span>
                    <span className="singlePostIcon">Delete</span>
                    
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>İsa</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Sunt, adipisci, sapiente laborum nobis labore quia, provident voluptatem dolor
                      aliquam ut deserunt libero enim tenetur cum.
                     Accusantium autem placeat ullam velit.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Sunt, adipisci, sapiente laborum nobis labore quia, provident voluptatem dolor
                      aliquam ut deserunt libero enim tenetur cum.
                     Accusantium autem placeat ullam velit.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Sunt, adipisci, sapiente laborum nobis labore quia, provident voluptatem dolor
                      aliquam ut deserunt libero enim tenetur cum.
                     Accusantium autem placeat ullam velit.</p>
            </div>
        </div>
    )
}
