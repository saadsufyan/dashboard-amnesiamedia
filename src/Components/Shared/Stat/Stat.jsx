import React from 'react';
import './stat.css'
const Stat = ({icon,quantity,title,status="normal"})=> {
    return(
        <div className={`stat__container ${status === "warning" ? "warning_stat" : ""}`}>
            <div className="stat_icon">
                <img src={icon} alt="icon" />
            </div>
            <div className='stat_details'>
                <h2 className='quantity'>
                    {quantity}
                </h2>
                <p className='title'>{title}</p>
            </div>
        </div>
    )
}

export default Stat