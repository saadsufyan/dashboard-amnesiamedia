import React from "react";
import './progressbar.css'
const ProgressBar = ({ title, color, bgColor, completePercent,className }) => {
    return (
        <div className={`progressbar__container ${className ? className : ""}`}>
            <span className="progress__title" style={{color}}>{title || "Progress"}</span>
            <div className="progressbar" style={{ backgroundColor: bgColor}}>
                <div className="progress__completed" style={{ background: color, width: `${completePercent || 100}%`,height:"100%" }} />
            </div>
        </div>
    )
}

export default ProgressBar