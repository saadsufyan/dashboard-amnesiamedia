import React from "react";
import './user.css';
import Avatar from '../Shared/Avatar/Avatar';

const User = ({greet,userName,userImage})=> {
    return(
        <div className="user__container">
            <Avatar className="avatar"/>
            <div>
                <span className="greet">{greet || "Good Day 👋"}</span>
                <h2 className="user__name">{userName || "Adam Macy"}</h2>
            </div>
        </div>
    )
}

export default User;