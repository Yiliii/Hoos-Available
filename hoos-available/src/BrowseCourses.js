import React from 'react';
import './styles.css';

const BrowseCourses = () => {
    return (
        <>
          <meta charSet="UTF-8"/>
            <title>Homepage</title>
            <body className="boxsections-body">
            <div className="top-container">
                <h1 className="professor-title">Browse Courses</h1>
            </div>
            <div className="courses-option-container">
                <select>
                    <option className="Semester">Semester</option>
                    <option className="Fall 2023"> Term</option>
                    <option className="Spring 2024"> Term</option>
                    <option className="Fall 2024"> Term</option>
                </select>
                <select>
                    <option className="Department">Department</option>
                    <option className="APMA"> Department</option>
                    <option className="ECON"> Department</option>
                    <option className="BIO"> Department</option>
                </select>
                <select>
                    <option className="CourseNumber">CourseNumber</option>
                    <option className={"2100"}> Number</option>
                    <option className={"2120"}> Number</option>
                    <option className={"2130"}> Number</option>
                </select>
            </div>
            <div className="course-list">
                <div className="course">African American Studies</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">American Sign Language Program</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">American Studies</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">Antropology</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">Art</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">Astronomy</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">Biology</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">Chemistry</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">Classics</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">Cognitive Science</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">Creative Writing</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">East Asian Languages</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            <div className="course-list">
                <div className="course">Economics</div>
                <button className="courseButton"> View Department Courses</button>
            </div>
            </body>
        </>
    );
}

export default BrowseCourses;