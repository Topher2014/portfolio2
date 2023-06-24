import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import {BrowserRouter as Router} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    palette: {
      primary: {
        main: '#3D3D3D',
      },
      secondary: {
        main: '#282828',
      },
    },
    typography: {
      h1: {
        fontSize: '4rem',
        color: '#E1E1E1',
      },
      h2: {
        fontSize: '3rem',
        color: '#E1E1E1',
      },
      h3: {
        fontSize: '2rem',
        color: '#E1E1E1',
      },
      h4: {
        fontSize: '1.5rem',
        color: '#E1E1E1',
      }    
    },
  });
root.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
)