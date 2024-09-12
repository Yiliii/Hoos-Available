import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import FindProfessor from "./FindProfessor";
import BrowseCourses from "./BrowseCourses";
import ProfilePage from "./ProfilePage";




function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"
                       element={<HomePage/>}/>
                <Route path="/BrowseCourses"
                       element={<BrowseCourses/>}/>
                <Route path="/FindProfessor"
                       element={<FindProfessor/>}/>
                <Route path="/ProfilePage"
                       element={<ProfilePage/>}/>
                <Route
                    path="*"
                    element={<Navigate to="./" />}
                />
            </Routes>
        </Router>
    );
}

export default App;