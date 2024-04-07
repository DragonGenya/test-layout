import React from "react";
import "../Style/sidebar.css"; // Import your CSS file for styling

export default function UserSharedTasks({ sidebarOpen }) {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
                {/* Sidebar content for User Shared Tasks page */}
                <div className="contentContainer">
                    <h1>User Tasks</h1>
                    <tbody></tbody>
                <tc></tc>
                <td></td>
                </div>
            </div>
            {/* Main content */}
            <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Add your main content here */}
                <h2>User Shared Tasks Page</h2>
                <h3>Tasks:  </h3>
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