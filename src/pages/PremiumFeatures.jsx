import React from "react";
import "../Style/sidebar.css"; // Import your CSS file for styling

export default function PremiumFeatures({ sidebarOpen }) {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
                {/* Sidebar content for PremiumFeatures page */}
                <div className="contentContainer">
                    <h1>PremiumFeatures </h1>
            
                </div>
            </div>
            {/* Main content */}
            <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Add your main content here */}
                <h2>Features</h2>
           <p>You can change background color, image, calender desgin, and graphical elements</p>
            </div>
        </div>
    );
}