import React from 'react';
import { motion, Variants } from 'framer-motion';
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300">
              🚀 Open to Internships & Full-time
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Kushagra Bisht
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Cloud & DevOps Enthusiast • Full Stack Developer • Mobile App Creator
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate about building scalable systems, containerized applications, and clean user experiences. 
            Built AI-powered summarization engines and high-performance backend services that serve thousands of users.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-slate-600 rounded-lg font-semibold text-slate-300 hover:bg-slate-800 transition-all duration-300"
            >
              Experience
            </motion.a>
            <motion.a
              href="/Kushagra_Bisht_resume.pdf"
              download="Kushagra_Bisht_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-slate-600 rounded-lg font-semibold text-slate-300 hover:bg-slate-800 transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;