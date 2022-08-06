import React from "react";
import './post.css'
const Post = ({postImage,title,status})=> {
    return(
        <div className={`post_container ${status === "warning" ? "warning_post" : ""}`}>
            <div className="post__image__container">
                {status === "warning" && <div className="danger_layer"/>}
                <img src={postImage} alt="post" />
            </div>
            <div className="post_info">
                <h3 className="postTitle">{title}</h3>
                <p className="postStatus">{status}</p>
            </div>
        </div>
    )   
}

export default Post;