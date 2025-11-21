import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import CatIntroSection from './components/CatIntroSection'
import About from './components/About'
import SkillsWithSlider from './components/SkillsWithSlider'
import ProjectsSlider from './components/ProjectsSlider'
import ContactMUI from './components/ContactMUI'
import Footer from './components/Footer'
import theme from './theme'
import './styles/App.css'
import './styles/swiper.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Navigation />
        <CatIntroSection />
        <About />
        <SkillsWithSlider />
        <ProjectsSlider />
        <ContactMUI />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

