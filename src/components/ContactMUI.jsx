import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  IconButton,
  Paper
} from '@mui/material'
import { Email, Phone, LocationOn, LinkedIn, GitHub } from '@mui/icons-material'

const ContactMUI = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  return (
    <section id="contact" className="contact" ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04</span>
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  background: 'rgba(20, 20, 20, 0.8)',
                  border: '1px solid rgba(255, 20, 147, 0.3)',
                  borderRadius: '20px',
                  padding: 4,
                  height: '100%',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ffffff',
                    marginBottom: 2,
                    fontWeight: 600,
                  }}
                >
                  Let's work together
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#e0e0e0',
                    marginBottom: 4,
                    lineHeight: 1.8,
                  }}
                >
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </Typography>
                
                <Box sx={{ marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                    <Email sx={{ color: '#FF1493', fontSize: 28 }} />
                    <Typography sx={{ color: '#FFB6C1' }}>
                      ayushimahato.work@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                    <Phone sx={{ color: '#FF1493', fontSize: 28 }} />
                    <Typography sx={{ color: '#FFB6C1' }}>
                      +91 7667644074
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: '#FF1493', fontSize: 28 }} />
                    <Typography sx={{ color: '#FFB6C1' }}>
                      Bengaluru, Karnataka, India
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <IconButton
                    href="https://www.linkedin.com/in/ayushiimahato"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#FFB6C1',
                      background: 'rgba(20, 20, 20, 0.8)',
                      border: '1px solid rgba(255, 20, 147, 0.3)',
                      '&:hover': {
                        borderColor: 'rgba(255, 20, 147, 0.8)',
                        boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)',
                        color: '#FF69B4',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    href="https://github.com/ayushimahato"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#FFB6C1',
                      background: 'rgba(20, 20, 20, 0.8)',
                      border: '1px solid rgba(255, 20, 147, 0.3)',
                      '&:hover': {
                        borderColor: 'rgba(255, 20, 147, 0.8)',
                        boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)',
                        color: '#FF69B4',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <GitHub />
                  </IconButton>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
            >
              <Paper
                elevation={0}
                sx={{
                  background: 'rgba(20, 20, 20, 0.8)',
                  border: '1px solid rgba(255, 20, 147, 0.3)',
                  borderRadius: '20px',
                  padding: 4,
                }}
              >
                <TextField
                  fullWidth
                  name="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  fullWidth
                  name="email"
                  label="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  fullWidth
                  name="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  margin="normal"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  fullWidth
                  name="message"
                  label="Your Message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  margin="normal"
                  sx={{ marginBottom: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #FF69B4, #FF1493, #FF10F0)',
                    color: '#ffffff',
                    padding: '14px 32px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #FF1493, #FF10F0)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Paper>
            </motion.form>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ContactMUI

