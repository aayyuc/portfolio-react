import React from 'react'
import { motion } from 'framer-motion'
import { Container, Typography } from '@mui/material'

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{
            color: '#FFB6C1',
            textAlign: 'center',
          }}
        >
          &copy; 2025 Ayushi Mahato. All rights reserved.
        </Typography>
      </Container>
    </motion.footer>
  )
}

export default Footer

