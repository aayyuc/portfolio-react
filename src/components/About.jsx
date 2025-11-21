import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container, Grid, Paper, Typography, Box } from '@mui/material'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <section id="about" className="about" ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#e0e0e0',
                    marginBottom: 2,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  Detail-oriented Full Stack Developer with hands-on experience in Angular, React, and FastAPI, 
                  specializing in building scalable, secure, and responsive web applications. Demonstrated success 
                  in integrating GenAI powered solutions and optimizing API workflows to enhance efficiency.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#e0e0e0',
                    marginBottom: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  Collaborative team player with strong problem-solving and time management skills, eager to contribute 
                  to innovative, growth-focused organizations. Currently working as a Software Developer Intern at 
                  Rockwell Automation / Knowledge Lens.
                </Typography>
                <motion.div className="stats" variants={itemVariants}>
                  <StatItem target={3} label="Projects" />
                  <StatItem target={1} label="Year Experience" />
                  <StatItem target={60} label="Team Members Led" />
                </motion.div>
              </motion.div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              className="about-image"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <motion.img
                  src={'/assets/gif_0_1763703889.gif'}
                  alt={'Profile'}
                  onError={(e) => { e.currentTarget.src = '/assets/profile.svg' }}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: 500,
                    height: 500,
                    borderRadius: 50,
                    boxShadow: '0 20px 60px rgba(255, 20, 147, 0.3)',
                    objectFit: 'cover',
                    background: 'linear-gradient(135deg, #FF69B4, #FF1493)'
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

const StatItem = ({ target, label }) => {
  const [count, setCount] = React.useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  React.useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isInView, target])
  
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default About

