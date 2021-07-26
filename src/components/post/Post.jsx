import React from 'react'
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://picsum.photos/200/300" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">React</span>
                    <span className="postCat">JavaScript</span>
                    <span className="postCat">Express Js</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Odio ipsam voluptates repudiandae laborum, earum dolorem voluptatem
                  libero odit facere placeat tempore doloremque minima tenetur perspiciatis
                   officiis quas eos ex voluptas.
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Odio ipsam voluptates repudiandae laborum, earum dolorem voluptatem
                  libero odit facere placeat tempore doloremque minima tenetur perspiciatis
                   officiis quas eos ex voluptas.
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Odio ipsam voluptates repudiandae laborum, earum dolorem voluptatem
                  libero odit facere placeat tempore doloremque minima tenetur perspiciatis
                   officiis quas eos ex voluptas.
                   </p>
        </div>
    )
}
