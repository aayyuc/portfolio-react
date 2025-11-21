import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const projects = [
    {
      title: 'Raga-Ret: Tabla Stroke Analysis System',
      desc: 'Deep learning-based model for classifying tabla strokes with real-time analysis. Automated rhythmic pattern conversion to digital notation, increasing accuracy by 30%.',
      tags: ['Python', 'PyQt5', 'NumPy', 'Pandas', 'MIDI']
    },
    {
      title: 'Authenticator System',
      desc: 'Secure login/signup portal with Firebase Authentication and custom validation rules. Enhanced user security through password encryption and achieved 100% Lighthouse accessibility score.',
      tags: ['Tailwind CSS', 'Firebase', 'JavaScript']
    },
    {
      title: 'Interactive Recipe Book',
      desc: 'Client-side recipe management system supporting offline access and search filters. Utilized React hooks and local storage for persistent data management with optimized UX.',
      tags: ['React', 'CSS', 'Local Storage']
    }
  ]
  
  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">3</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="project-image">
        <motion.div
          className="project-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <a href="#" className="project-link">View Project →</a>
        </motion.div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

