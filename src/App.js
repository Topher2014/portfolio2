import './App.css'
import Contact from './Components/Contact'
import Blogs from './Components/Blogs'
import Projects from './Components/Projects'
import Header from './Components/Header'
import About from './Components/About'
import HireMe from './Components/HireMe'
import Home from './Components/Home'
import TopherEmby from './Components/TopherEmby'
import { Typography, Container, Box } from '@mui/material'
import Skills from './Components/Skills'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/TopherEmby' element={<TopherEmby />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App