import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const CatIntroSection = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })
  
  
  // Content fade out
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0.2, 0.6], [0, -50])
  
  // Background color transition
  const bgOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0])
  
  return (
    <section ref={sectionRef} className="cat-intro-section">
      
      
      <motion.div
        className="intro-content"
        style={{
          opacity: contentOpacity,
          y: contentY
        }}
      >
        <motion.h1
          className="intro-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.span
            className="intro-line"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
          This is
          </motion.span>
          <motion.span
            className="intro-line highlight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
Ayushi Mahato
          </motion.span>
          <motion.span
            className="intro-line"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
software engineer          </motion.span>
        </motion.h1>
        <motion.p
          className="intro-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
        </motion.p>
      </motion.div>
      
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span>Scroll Down</span>
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>
      
      <motion.div
        className="intro-section-overlay"
        style={{ opacity: bgOpacity }}
      />
    </section>
  )
}

export default CatIntroSection

