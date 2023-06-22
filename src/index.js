import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import {BrowserRouter as Router} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    palette: {
      primary: {
        main: '#2e7d32',
      },
      secondary: {
        main: '#ff3d00',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: 38,
            fontWeight: 'bold',
            marginBottom: 16,
            display: 'flex',
            fontFamily: 'Arial'
          },
        },
        variants:[
          {
            props: {variant: 'secondary'},
            style: {
              fontSize: 24,
            }
          }
        ] 
      },
      MuiButton: {
        styleOverrides: {
          root: {
            margin: '16px 0',
            fontWeight: 'bold',
            '&.MuiButton-primary': {
              color: 'white',
              background: '#2e7d32',
              '&:hover': {
                background: '#1b5e20',
              },
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: '16px 0',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            margin: '4px',
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: '#fafafa',
            },
          },
        },
      },
    },
  });
root.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
)