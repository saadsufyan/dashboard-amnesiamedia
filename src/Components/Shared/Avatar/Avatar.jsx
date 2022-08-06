import React from 'react'
import fallBackAvatar from '../../../assets/Images/avatar.png'
import './avatar.css'
const Avatar = ({img=fallBackAvatar,className="",style={}})=> {
    return(
        <div className={`avatar__container ${className}`} style={{...style}}>
            <img src={img} alt="avatar" />
        </div>
    )
}

export default Avatar