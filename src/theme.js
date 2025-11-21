import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF1493', // Deep Pink
      light: '#FF69B4', // Hot Pink
      dark: '#C71585',
    },
    secondary: {
      main: '#FF10F0', // Magenta
      light: '#FF69B4',
      dark: '#FF1493',
    },
    background: {
      default: '#000000',
      paper: 'rgba(20, 20, 20, 0.9)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#FFB6C1',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)',
          '&:hover': {
            boxShadow: '0 0 30px rgba(255, 20, 147, 0.8), 0 0 50px rgba(255, 105, 180, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(20, 20, 20, 0.8)',
          border: '1px solid rgba(255, 20, 147, 0.3)',
          borderRadius: '20px',
          boxShadow: '0 0 20px rgba(255, 20, 147, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(255, 20, 147, 0.8)',
            boxShadow: '0 10px 40px rgba(255, 20, 147, 0.4), 0 0 30px rgba(255, 105, 180, 0.3)',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#FF1493',
        },
        thumb: {
          boxShadow: '0 0 10px rgba(255, 20, 147, 0.8)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(255, 20, 147, 1)',
          },
        },
        track: {
          boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            background: 'rgba(20, 20, 20, 0.8)',
            border: '1px solid rgba(255, 20, 147, 0.3)',
            color: '#ffffff',
            '& fieldset': {
              borderColor: 'rgba(255, 20, 147, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 20, 147, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(255, 20, 147, 0.8)',
              boxShadow: '0 0 20px rgba(255, 20, 147, 0.3)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 182, 193, 0.7)',
            '&.Mui-focused': {
              color: '#FF69B4',
            },
          },
        },
      },
    },
  },
})

export default theme

