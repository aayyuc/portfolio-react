import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const skills = [
    { icon: '💻', title: 'Frontend', desc: 'React.js, Angular, Redux, Tailwind CSS, HTML5, CSS3', progress: 90 },
    { icon: '⚙️', title: 'Backend', desc: 'Node.js, FastAPI, Python, RESTful APIs, MySQL, MongoDB', progress: 85 },
    { icon: '🔧', title: 'Tools & Tech', desc: 'Git, Firebase Authentication, PyQt5, NumPy, Pandas', progress: 80 },
    { icon: '🤖', title: 'AI/ML', desc: 'GenAI Integration, Deep Learning, Data Analysis', progress: 75 }
  ]
  
  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

const SkillCard = ({ skill, index, isInView }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="skill-icon">{skill.icon}</div>
      <h3>{skill.title}</h3>
      <p>{skill.desc}</p>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.progress}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default Skills

