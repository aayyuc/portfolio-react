import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card, CardContent, Typography, LinearProgress, Box, Slider, Container } from '@mui/material'
import { Code, Settings, Build, Psychology } from '@mui/icons-material'

const SkillsWithSlider = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedSkill, setSelectedSkill] = useState(0)
  
  const skills = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Frontend',
      desc: 'React.js, Angular, Redux, Tailwind CSS, HTML5, CSS3',
      progress: 90,
      technologies: ['React.js', 'Angular', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      icon: <Settings sx={{ fontSize: 40 }} />,
      title: 'Backend',
      desc: 'Node.js, FastAPI, Python, RESTful APIs, MySQL, MongoDB',
      progress: 85,
      technologies: ['Node.js', 'FastAPI', 'Python', 'RESTful APIs', 'MySQL', 'MongoDB']
    },
    {
      icon: <Build sx={{ fontSize: 40 }} />,
      title: 'Tools & Tech',
      desc: 'Git, Firebase Authentication, PyQt5, NumPy, Pandas',
      progress: 80,
      technologies: ['Git', 'Firebase', 'PyQt5', 'NumPy', 'Pandas']
    },
    {
      icon: <Psychology sx={{ fontSize: 40 }} />,
      title: 'AI/ML',
      desc: 'GenAI Integration, Deep Learning, Data Analysis',
      progress: 75,
      technologies: ['GenAI', 'Deep Learning', 'Data Analysis', 'Machine Learning']
    }
  ]
  
  return (
    <section id="skills" className="skills" ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>
        
        <Box sx={{ marginBottom: 4 }}>
          <Slider
            value={selectedSkill}
            onChange={(e, newValue) => setSelectedSkill(newValue)}
            min={0}
            max={skills.length - 1}
            step={1}
            marks={skills.map((skill, index) => ({
              value: index,
              label: skill.title
            }))}
            sx={{
              color: '#FF1493',
              '& .MuiSlider-thumb': {
                width: 20,
                height: 20,
                boxShadow: '0 0 15px rgba(255, 20, 147, 0.8)',
                '&:hover': {
                  boxShadow: '0 0 25px rgba(255, 20, 147, 1)',
                },
              },
              '& .MuiSlider-track': {
                height: 6,
                boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)',
              },
              '& .MuiSlider-rail': {
                height: 6,
                background: 'rgba(255, 20, 147, 0.2)',
              },
              '& .MuiSlider-markLabel': {
                color: '#FFB6C1',
                fontSize: '0.875rem',
              },
            }}
          />
        </Box>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              index={index}
              isInView={isInView}
              isSelected={selectedSkill === index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

const SkillCard = ({ skill, index, isInView, isSelected }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Card
        sx={{
          height: '100%',
          background: isSelected 
            ? 'rgba(255, 20, 147, 0.1)' 
            : 'rgba(20, 20, 20, 0.8)',
          border: isSelected
            ? '2px solid rgba(255, 20, 147, 0.8)'
            : '1px solid rgba(255, 20, 147, 0.3)',
          borderRadius: '20px',
          padding: 3,
          transition: 'all 0.3s ease',
          boxShadow: isSelected
            ? '0 10px 40px rgba(255, 20, 147, 0.4), 0 0 30px rgba(255, 105, 180, 0.3)'
            : '0 0 20px rgba(255, 20, 147, 0.1)',
          '&:hover': {
            borderColor: 'rgba(255, 20, 147, 0.8)',
            boxShadow: '0 10px 40px rgba(255, 20, 147, 0.4), 0 0 30px rgba(255, 105, 180, 0.3)',
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              color: '#FF1493',
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {skill.icon}
          </Box>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              color: '#ffffff',
              marginBottom: 1,
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            {skill.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#e0e0e0',
              marginBottom: 2,
              fontSize: '0.9rem',
              textAlign: 'center',
            }}
          >
            {skill.desc}
          </Typography>
          <Box sx={{ marginTop: 3 }}>
            <LinearProgress
              variant="determinate"
              value={skill.progress}
              sx={{
                height: 8,
                borderRadius: 5,
                background: 'rgba(255, 255, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(90deg, #FF69B4, #FF1493, #FF10F0)',
                  borderRadius: 5,
                  boxShadow: '0 0 10px rgba(255, 20, 147, 0.6)',
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: '#FFB6C1',
                display: 'block',
                textAlign: 'right',
                marginTop: 1,
              }}
            >
              {skill.progress}%
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              marginTop: 2,
              justifyContent: 'center',
            }}
          >
            {skill.technologies.slice(0, 3).map((tech, i) => (
              <Typography
                key={i}
                variant="caption"
                sx={{
                  padding: '4px 12px',
                  background: 'rgba(255, 20, 147, 0.2)',
                  border: '1px solid rgba(255, 20, 147, 0.4)',
                  borderRadius: '12px',
                  color: '#FF69B4',
                  fontSize: '0.75rem',
                }}
              >
                {tech}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default SkillsWithSlider

