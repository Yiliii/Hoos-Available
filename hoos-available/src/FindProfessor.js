import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";



const FindProfessor = () => {
    const renderList = (dept) => {
        if (dept.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
            return (
                <>
                    <Accordion.Item eventKey={dept.id}>
                        <Accordion.Header id={dept.name}>{dept.name}</Accordion.Header>
                        <Accordion.Body>
                            <Link to={"/ProfilePage"} className="Professor"> Professor 1</Link>
                            <Link to={"/ProfilePage"} className="Professor"> Professor 2</Link>
                            <Link to={"/ProfilePage"} className="Professor"> Professor 3</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                </>
            )
    }
    const departments = [
        {name: "African American and African Studies", id: "0"},
        {name: "American Sign Language Program", id: "1"},
        {name: "American Studies", id: "2"},
        {name: "Anthropology", id: "3"},
        {name: "Art", id: "4"},
        {name: "Astronomy", id: "5"},
        {name: "Biology", id: "6"},
        {name: "Chemistry", id: "7"},
        {name: "Classics", id: "8"},
        {name: "Cognitive Science", id: "9"},
        {name: "Creative Writing", id: "10"},
        {name: "Drama", id: "11"},
        {name: "East Asian Languages", id: "12"},
        {name: "Economics", id: "13"}
    ];
        const [filter, setFilter] = useState('');

    const items = departments.map((dept) => renderList(dept))
    return(
        <>
            <head>
                <meta charSet="UTF-8" />
                <title>Homepage</title>
            </head>
            <body className="boxsections-body">
            <div className="top-container">
                <h1 className="professor-title">Find Professors By Department</h1>
            </div>
            <input type="text"
                   id="userInput"
                   value = {filter}
                   onChange = {event => setFilter(event.target.value)}
                   placeholder="Search for departments"/>
            <Accordion id="department-container" className="p-3">
                {items}
            </Accordion>
            </body>
        </>
    );
}

export default FindProfessor;