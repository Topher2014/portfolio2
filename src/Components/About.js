import Image from '../Assets/Portrait2.jpg'
import book1 from '../Assets/chapter-house-dune.jpg'
import book2 from '../Assets/fingerprint_of_gods.jpg'
import book3 from '../Assets/economics.jpg'
import python_img from '../Assets/technologies/python.png'
import flask_img from '../Assets/technologies/flask.png'
import javascript_img from '../Assets/technologies/javascript.png'
import react_img from '../Assets/technologies/react.png'
import html_img from '../Assets/technologies/html.png'
import css_img from '../Assets/technologies/css.png'
import mui_img from '../Assets/technologies/mui.png'
import numpy_img from '../Assets/technologies/numpy.png'
import pandas_img from '../Assets/technologies/pandas.png'
import github_img from '../Assets/technologies/github2.png'
import node_img from '../Assets/technologies/node.png'
import render_img from '../Assets/technologies/render.png'
const books = [book1, book2, book3]

function About() {
    console.log(books)
    return (
        <div id='About' className="section" >
        {/* <div id='About' > */}
            <div className='about-section'>
                <h2> Topher Ludlow </h2>
                <p> Software engineer experienced in Python with Flask and JavaScript based programming. Developed skills in communication, professionalism, and customer service through experience with the US Army National Guard and State of California.  Eager to apply expertise somewhere demanding and challenging where I can grow my skills. I hope to also contribute my capabilities to non-profits and open source projects. </p>
                    <img className='about-img' src={Image} alt='bleg'></img>
            </div>
            <div className='skills-section'>
                    <h2> Skills </h2>
                <div className='row'>
                    <div className='column'>
                        <img src={python_img} alt='python' ></img>
                    </div>
                    <div className='column'>
                        <img src={flask_img} alt='flask' ></img>
                    </div>
                    <div className='column'>
                        <img src={javascript_img} alt='javascript' ></img>
                    </div>
                    <div className='column'>
                        <img src={react_img} alt='react' ></img>
                    </div>
                    <div className='column'>
                        <img src={html_img} alt='html' ></img>
                    </div>
                    <div className='column'>
                        <img src={css_img} alt='css' ></img>
                    </div>
                    <div className='column'>
                        <img src={mui_img} alt='mui' ></img>
                    </div>
                    <div className='column'>
                        <img src={numpy_img} alt='numpy' ></img>
                    </div>
                    <div className='column'>
                        <img src={pandas_img} alt='pandas' ></img>
                    </div>
                    <div className='column'>
                        <img src={github_img} alt='github' ></img>
                    </div>
                    <div className='column'>
                        <img src={node_img} alt='node' ></img>
                    </div>
                    <div className='column'>
                        <img src={render_img} alt='render' ></img>
                    </div>
                </div>
            </div>
            <div className='books-section'>
                <h2> Books I'm reading </h2>
                <div className='books'>
                    {books.map((book, index) => {
                        return (
                                <img key={index} src={book} alt={book}></img>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default About