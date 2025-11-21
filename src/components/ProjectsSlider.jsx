import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { Card, CardContent, Typography, Chip, Box, IconButton, Container } from '@mui/material'
import { GitHub, Launch } from '@mui/icons-material'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const ProjectsSlider = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const projects = [
    {
      title: 'Raga-Ret: Tabla Stroke Analysis System',
      desc: 'Deep learning-based model for classifying tabla strokes with real-time analysis. Automated rhythmic pattern conversion to digital notation, increasing accuracy by 30%.',
      tags: ['Python', 'PyQt5', 'NumPy', 'Pandas', 'MIDI'],
      gradient: 'linear-gradient(135deg, #FF1493, #FF10F0)'
    },
    {
      title: 'Authenticator System',
      desc: 'Secure login/signup portal with Firebase Authentication and custom validation rules. Enhanced user security through password encryption and achieved 100% Lighthouse accessibility score.',
      tags: ['Tailwind CSS', 'Firebase', 'JavaScript'],
      gradient: 'linear-gradient(135deg, #FF69B4, #FF1493)'
    },
    {
      title: 'Interactive Recipe Book',
      desc: 'Client-side recipe management system supporting offline access and search filters. Utilized React hooks and local storage for persistent data management with optimized UX.',
      tags: ['React', 'CSS', 'Local Storage'],
      gradient: 'linear-gradient(135deg, #FF10F0, #FF69B4)'
    }
  ]
  
  return (
    <section id="projects" className="projects" ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  
  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(20, 20, 20, 0.9)',
        border: '1px solid rgba(255, 20, 147, 0.3)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px) scale(1.02)',
          borderColor: 'rgba(255, 20, 147, 0.8)',
          boxShadow: '0 20px 50px rgba(255, 20, 147, 0.4), 0 0 40px rgba(255, 105, 180, 0.3)',
        },
      }}
    >
      <Box
        sx={{
          height: 250,
          background: project.gradient,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            gap: 2,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 2,
          }}
        >
          <IconButton
            sx={{
              color: '#ffffff',
              background: 'rgba(255, 20, 147, 0.3)',
              '&:hover': {
                background: 'rgba(255, 20, 147, 0.6)',
                boxShadow: '0 0 20px rgba(255, 20, 147, 0.8)',
              },
            }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            sx={{
              color: '#ffffff',
              background: 'rgba(255, 20, 147, 0.3)',
              '&:hover': {
                background: 'rgba(255, 20, 147, 0.6)',
                boxShadow: '0 0 20px rgba(255, 20, 147, 0.8)',
              },
            }}
          >
            <Launch />
            </IconButton>
          </Box>
        </Box>
      <CardContent sx={{ flexGrow: 1, padding: 3 }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: '#ffffff',
            marginBottom: 2,
            fontWeight: 600,
            background: 'linear-gradient(135deg, #FF69B4, #FF1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#e0e0e0',
            marginBottom: 2,
            lineHeight: 1.8,
          }}
        >
          {project.desc}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 2 }}>
          {project.tags.map((tag, i) => (
            <Chip
              key={i}
              label={tag}
              sx={{
                background: 'rgba(255, 20, 147, 0.2)',
                border: '1px solid rgba(255, 20, 147, 0.5)',
                color: '#FF69B4',
                boxShadow: '0 0 10px rgba(255, 20, 147, 0.3)',
                '&:hover': {
                  background: 'rgba(255, 20, 147, 0.3)',
                  boxShadow: '0 0 15px rgba(255, 20, 147, 0.5)',
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectsSlider

