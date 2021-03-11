import React from 'react'
import './../css/Sidebar.css';

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="dashboard_img">
                <img src="./Images/dashboard.svg" />
            </div>
            <div className="help_center">
                <img src="./Images/help_center.svg" />
                <p>Help Center</p>
                <p>...</p>
                <p>More</p>
            </div>
        </div>
    )
}

export default Sidebar;