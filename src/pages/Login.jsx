import React from "react";
import "../Style/sidebar.css"; // Import your CSS file for styling

export default function Login({ sidebarOpen }) {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
                {/* Sidebar content for Login page */}
                <div className="contentContainer">
                    <h1>Login </h1>
            
                </div>
            </div>
            {/* Main content */}
            <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Add your main content here */}
                <h2>Login Page</h2>
                <p>
                <form action="/action_page.php">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"></input><br></br>
  <label for="pwd">Password:</label>
  <input type="password" id="pwd" name="pwd"></input><br></br>
  <input type="submit" value="Submit"></input>
                </form>

                </p>

            </div>
        </div>
        
    );
}