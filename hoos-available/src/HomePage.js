import React from 'react';
import {Link} from "react-router-dom";
import "./styles.css";


const HomePage = () => {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <title>Homepage</title>
            </head>
            <body className="home-body">

                <div className="top-container">
                    <div className="uva-logo">
                        <img src={require("./images/vsabre.png")} width="15%" />
                    </div>
                    <h1 className="title">Hoos Available</h1>
                    <input type="text" placeholder="Search for a professor or class" />
                    <button type="submit">
                        <img src={require("./images/search-icon.png")} width="14px" />
                    </button>
                </div>
                <div className="boxes-container">
                    <Link to={"/FindProfessor"} className="box-left">
                        <img className="box-button-icon" src={require("./images/Iconsmind-Outline-Professor.ico")}/>
                        <span className="box-text">Find Professors</span>
                    </Link>
                    <Link to={"/BrowseCourses"} className="box-right">
                        <img className="box-button-icon" src={require("./images/book-outline.png")}/>
                        <span className="box-text">Browse Courses</span>
                    </Link>
                </div>
            </body>
        </>
    );
};

export default HomePage;