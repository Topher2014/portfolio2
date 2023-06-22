import './App.css'
import Contact from './Components/Contact'
import Blogs from './Components/Blogs'
import Projects from './Components/Projects'
import Header from './Components/Header'
import About from './Components/About'
import HireMe from './Components/HireMe'
import { Typography, Container, Box } from '@mui/material'

function App() {

    return (
        <Box>
        {/* <Container>
            <Typography>bleg</Typography>
        </Container> */}

        <div>
            <div className='header' id='Header'>
            <Header />
            </div>
            <div className='section' id='About'>
            <About />
            </div>
            <div className='section' id='Projects'>
            <Projects />
            </div>
            <div className='section' id='Contact'>
            <Contact />
            </div>
        </div>
        </Box>

    )
}

export default App