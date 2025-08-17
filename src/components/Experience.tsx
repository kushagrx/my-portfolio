import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "IBM",
      role: "Project Intern",
      period: "Jun 2025 – Jul 2025",
      points: [
        "Developed an AI-powered summarization engine for a cloud knowledge management system.",
        "Handled unstructured data and delivered customized, accurate summaries at scale using transformer-based models.",
      ],
      tags: ["NLP", "Transformers", "Cloud", "AI"],
      color: "from-gray-700 to-cyan-500",
    },
    {
      company: "BioPay",
      role: "Backend Developer Intern",
      period: "Feb 2025 – Apr 2025",
      points: [
        "Built and optimized Node.js + Express.js APIs, reducing authentication request time by ~30% for biometric systems (Fujitsu PalmSecure, Mantra MFS110).",
        "Integrated RESTful endpoints enabling secure data flows for 1,000+ real-time transactions.",
      ],
      tags: ["Node.js", "Express", "Performance", "REST"],
      color: "from-gray-800 to-gray-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
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
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400">Internships and professional roles</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                   style={{ background: `linear-gradient(to right, ${exp.color.split(' ')[1]}, ${exp.color.split(' ')[3]})` }} />
              
              <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                        <Building className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-slate-400">
                          <span className="font-semibold">{exp.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mt-6">
                      {exp.points.map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pointIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <ChevronRight className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <p className="text-slate-300 leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:max-w-xs">
                    {exp.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${exp.color} bg-opacity-20 text-white border border-current border-opacity-20`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;