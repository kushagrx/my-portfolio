import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: "University of Petroleum and Energy Sciences, Dehradun",
      degree: "B.Tech CSE in Cloud Computing",
      period: "Aug 2022 – May 2026",
      type: "University",
      color: "from-gray-700 to-cyan-500",
    },
    {
      school: "Apeejay School Pitampura, Delhi 110034",
      degree: "CBSE Class XII 75% , Class X 88%",
      // period: "2022 – May 2026",
      type: "High School",
      color: "from-gray-800 to-gray-600",
    },
  ];

  const certifications = [
    "AWS Cloud Practitioner Essentials",
    "AWS Academy Cloud Web Application Builder",
    "Getting Started with DevOps on AWS",
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

  const itemVariants = {
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

  return (
    <section id="education" className="py-20 bg-slate-900">
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
              Education & Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-400">Academic background and professional certifications</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                       style={{ background: `linear-gradient(to right, ${edu.color.split(' ')[1]}, ${edu.color.split(' ')[3]})` }} />
                  
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} bg-opacity-20 flex-shrink-0`}>
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{edu.school}</h4>
                        <p className="text-slate-300 mb-2">{edu.degree}</p>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <span className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${edu.color} bg-opacity-20 text-white border border-current border-opacity-20`}>
                          {edu.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-cyan-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                      <p className="text-slate-300 group-hover:text-white transition-colors duration-300">{cert}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AWS Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl"
            >
              <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-orange-400">☁️</span>
                AWS Specialization
              </h4>
              <p className="text-slate-300 text-sm">
                Focused on cloud architecture, web application development, and DevOps practices on Amazon Web Services platform.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;