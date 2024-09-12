import React, { useEffect } from 'react';
import './ProfessorProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profPicture from './images/profile-picture.png'

const ProfessorProfile = () => {
    useEffect(() => {
        // Dynamically load Google Maps API script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBCf5wuH1-3yr4NixUu8Ssi4HseiwHnpiM&callback=initMap`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            // Google Maps initialization
            function initMap() {
                var address = "85 Engineers Way, Charlottesville, VA 22904";
                var geocoder = new window.google.maps.Geocoder();

                geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status === 'OK') {
                        var map = new window.google.maps.Map(document.getElementById('map'), {
                            center: results[0].geometry.location,
                            zoom: 17,
                            mapTypeId: window.google.maps.MapTypeId.SATELLITE
                        });

                        var marker = new window.google.maps.Marker({
                            position: results[0].geometry.location,
                            map: map,
                            title: 'Office'
                        });
                    } else {
                        console.error('Geocode was not successful for the following reason: ' + status);
                    }
                });
            }

            // Attach the initMap function to the global window object
            window.initMap = initMap;
        };

        document.head.appendChild(script);

        // Email button click event listener
        const emailButtonClickHandler = () => {
            // Replace 'email@example.com' with the email address
            var emailTo = 'email@example.com';
            window.location.href = 'mailto:' + emailTo;
        };

        document.getElementById('emailButton').addEventListener('click', emailButtonClickHandler);

        // Cleanup function
        return () => {
            // Remove the event listener when the component unmounts
            if(document.getElementById('emailButton'))
                document.getElementById('emailButton').removeEventListener('click', emailButtonClickHandler);
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="professor-profile">
            <div className="side-panel">
                <img src={profPicture} width='50%'></img>
                <div className="contact-info">
                    <h1>Professor Name</h1>
                    <h4>Contact Information</h4>
                    <p>Phone: 123-4567<br />Email: professor@virginia.edu<br />Office: Rice Hall, Room 209</p>
                </div>
                <button type="button" id="emailButton" className="btn btn-primary">Send an Email</button>
                <div className="links">
                    <h4>Helpful Links</h4>
                    <a href="https://vagrades.com/uva">VA Grade</a>
                    <a href="https://thecourseforum.com/">Course Forum</a>
                    <a href="https://www.ratemyprofessors.com">Rate My Professors</a>
                </div>
            </div>

            <div className="main-content">
                <div className="top-section">
                    <div className="map-container">
                        <div id="map"></div>
                    </div>
                    <div className="location-and-hours">
                        <div className="location">
                            <h2>Location</h2>
                            <p>Rice Hall, Room 209</p>
                            <br />
                        </div>
                        <div className="hours">
                            <h2>Office Hours</h2>
                            <p>Tuesdays and Thursdays: 3:30pm-5:00pm<br />Wednesdays: 12:00pm-2:00pm</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="classes">
                        <h2>Classes</h2>
                        <ul>
                            <li>Spring 2023: CS 3100 | Data Structures and Algorithms 2</li>
                            <li>Summer 2018: CS 2102 | Discrete Math</li>
                            <li>Summer 2018: CS 4102 | Algorithms</li>
                            <li>Spring 2018: CS 2190 | Computer Science Seminar</li>
                            <li>Fall 2017: CS 4102 | Algorithms</li>
                        </ul>
                    </div>
                    <div className="research">
                        <h2>Ongoing Research</h2>
                        <ul>
                            <li>Algorithms</li>
                            <li>Compression</li>
                            <li>Complexity Theory</li>
                            <li>Automata Theory</li>
                            <li>CS Education</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessorProfile;