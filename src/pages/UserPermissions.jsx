import React from "react";
import "../Style/sidebar.css"; // Import your CSS file for styling

export default function UserPermissions({ sidebarOpen }) {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
                {/* Sidebar content for User Permissions page */}
                <div className="contentContainer">
                    <h1>User Permissions</h1>
                    <tbody></tbody>
                <tc></tc>
                <td></td>
                </div>
            </div>
            {/* Main content */}
            <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Add your main content here */}
                <h2>User Permissions Page</h2>
                <h3>Permissions:  </h3>
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