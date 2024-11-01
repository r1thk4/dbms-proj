import './App.css'
import FAHome from "./components/FAHome/FAHome"
import LoginPage from './components/LoginPage/LoginPage'
import StudentHome from "./components/StudentHome/StudentHome"
import WardenHome from "./components/WardenHome/WardenHome"
import AdminHome from "./components/AdminHome/AdminHome"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"

function App() {
    const [name, setName] = useState(localStorage.getItem("name") || "Username");
    const [userID, setUserID] = useState(localStorage.getItem("userID") || "202XBXXABCD");

    const handleCred = (name, userID) => {
        setName(name);
        setUserID(userID);
        localStorage.setItem("name", name);
        localStorage.setItem("userID", userID);
    }

    const handleLogOut = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("userID");

        setName("Username");
        setUserID("202XBXXABCD");
    }

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<LoginPage  handleCred={handleCred}/>}/>
                    <Route exact path="/student/home" element={<StudentHome  name={name} userID={userID} onLogOut={handleLogOut}/>}/>
                    <Route exact path="/fa/home" element={<FAHome  name={name} userID={userID} onLogOut={handleLogOut}/>}/>
                    <Route exact path="/warden/home" element={<WardenHome  name={name} userID={userID} onLogOut={handleLogOut}/>}/>
                    <Route exact path="/admin/home" element={<AdminHome  name={name} userID={userID} onLogOut={handleLogOut}/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
