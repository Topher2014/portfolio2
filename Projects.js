import TopherEmby from '../Assets/TopherEmby.png'
import FlatIron from '../Assets/FlatIron.png'
import OnlyKyle from '../Assets/OnlyKyles.png'
import {Container, Typography} from "@mui/material"

function Projects() {
    return (
        // <div id='Projects' className='section'>
        <Container>

            <h2> Projects </h2>
            <div className='project-section'>
                <h3> TopherEmby </h3>
                <img src={TopherEmby} alt='TopherEmby' />
                <p> Web application to enable movie and television file request consolidation for administrators servicing user created group and friend networks in conjunction with programs like Emby, Plex, and Jellyfin  </p>
                <ul>
                    <li> Designed and implemented fullstack app using Python Flask, JavaScript XML, and MUI </li>
                </ul>
            </div>
            <div className='project-section'>
                <h3> OnlyKyles </h3>
                <img src={OnlyKyle} alt='OnlyKyles' />
                <p> A CLI application made for an orphanage where adopters can create user accounts, view current and past adoptees, and adopt currently available adoptees. </p>
                <ul>
                    <li> Employed SQLite and SQLAlchemy to test and manipulate data </li>
                </ul>
            </div>
            <div className='project-section'>
                <h3> Flat and Iron Abs </h3>
                <img src={FlatIron} alt='Flat and Iron Abs' />
                <p> Gym web application where trainers and customers can create accounts, add workouts to their schedule, and leave reviews </p>
                <ul>
                    <li> Designed frontend components with React and CSS to fetch and render backend data </li>
                </ul>
            </div>
        </Container>
        // </div>
    )
}
export default Projects