import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "React", "React Native", "Node.js", "Express.js", "Expo CLI"],
      color: "bg-gray-700",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "bg-cyan-600",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "SupaBase"],
      color: "bg-gray-800",
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["REST APIs", "Postman", "Git", "GitHub", "Vercel"],
      color: "bg-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-300 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-2 text-sm font-medium rounded-lg ${category.color} bg-opacity-20 text-white border border-slate-600/30 hover:bg-opacity-30 transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Proficiency Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { skill: "Cloud Architecture", level: 85, color: "from-blue-500 to-cyan-500" },
                { skill: "Full Stack Development", level: 90, color: "from-purple-500 to-pink-500" },
                { skill: "DevOps & CI/CD", level: 80, color: "from-green-500 to-emerald-500" },
              ].map((item) => (
                <div key={item.skill} className="text-center">
                  <h4 className="text-white font-semibold mb-3">{item.skill}</h4>
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgb(51 65 85)"
                        strokeWidth="2"
                      />
                      <motion.path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgb(34 211 238)"
                        strokeWidth="2"
                        strokeDasharray={`${item.level}, 100`}
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{ strokeDasharray: `${item.level}, 100` }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{item.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;