import React from "react";
import "../Style/sidebar.css"; // Import your CSS file for styling

export default function UserData({ sidebarOpen }) {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
                {/* Sidebar content for User Data page */}
                <div className="contentContainer">
                    <h1>User Data</h1>
                    <tbody></tbody>
                <tc></tc>
                <td></td>
                </div>
            </div>
            {/* Main content */}
            <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Add your main content here */}
                <h2>User Data Page</h2>
                <h3>User logs </h3>
                <table className="logs-table">
                </table>
                        <thead>
                            </thead>
                <tbody></tbody>
                <tc></tc>
                <td></td>
            </div>
        </div>
    );
}