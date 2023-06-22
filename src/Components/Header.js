import React ,{useState} from 'react';
import { Link} from 'react-scroll';
import Image from '../Assets/Portrait.jpg';
import Resume from '../Assets/Resume.pdf'

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  console.log(isNavExpanded)
  const openPdf = () => {
    window.open(Resume, '_blank');
  }
  return (
      <nav className="nav">
      {/* <div className='link-container'> */}
      <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */} 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"/>
          </svg>
        </button>
        {/* <div  className={isNavExpanded ? "link-container expanded" : "link-container"}> */}
        <div  className= "link-container">
        <ul>
          <li>
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-100} duration={500} >
              About
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-145} duration={500} >
              Projects
            </Link>
          </li>
          {/* <li>
            <Link activeClass="active" to="Blogs" spy={true} smooth={true} offset={-145} duration={500} >
              Blogs 
            </Link>
          </li> */}
          <li>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-145} duration={500} >
              Contact 
            </Link>
          </li>
          <li>
            <Link onClick={openPdf}>Resume</Link>
          </li>
        </ul>
      </div>
      <div className='info-container'>
        <h1>Welcome to my website</h1>
        <p>Here you can learn all about me and my work.</p>
      </div>
      <div className="portrait-container">
        <img
          className="portrait-img"
          src={Image}
          alt="Portrait"
        />
      </div>
      </nav>
  );
}

export default Header;

