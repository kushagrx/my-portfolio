import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Smartphone, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Campus Navigation System",
      stack: ["React", "CSS", "Java Spring Boot", "Graph Theory"],
      description: "Engineered a campus navigation tool using Dijkstra's algorithm to optimize routes and reduce travel time across campus locations.",
      highlights: [
        "Dynamic graph model of campus layout",
        "Efficient route computations with real-time updates",
        "Interactive map interface with turn-by-turn directions",
      ],
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      link: "https://github.com/vansh1306/campus-navigation-system",
    },
    {
      name: "Cloud Based Knowledge Management System",
      stack: ["Cloud", "NLP", "Transformers", "IBM Watson"],
      description: "Scalable knowledge management platform to organize and retrieve large volumes of corporate data with IBM collaboration.",
      highlights: [
        "AI summarization engine using transformer-based models",
        "Automatic extraction and condensation of key insights from unstructured documents",
        "Cloud-native architecture handling 10,000+ documents",
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      link: "https://github.com/kushagrx/cloudbasedkms",
    },
    {
      name: "GTD Productivity Mobile App",
      stack: ["React Native", "Expo", "JavaScript", "AsyncStorage"],
      description: "Cross-platform app implementing 'Getting Things Done' principles with rapid task capture, smart inbox, and context-aware filters.",
      highlights: [
        "Custom fonts, dark theme, and intuitive FAB for task entry",
        "Smart categorization with project-based organization",
        "Offline-first architecture with seamless sync",
      ],
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      link: "https://github.com/kushagrx/MobileAppDev/tree/master/apptest05",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400">Selected work showcasing my technical expertise</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                   style={{ background: `linear-gradient(to right, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }} />
              
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20`}>
                    <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <motion.div
                      key={highlightIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: highlightIndex * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0`} />
                      <p className="text-slate-400 text-sm leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.button
                    onClick={() => window.open(project.link, '_blank')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} bg-opacity-20 text-white rounded-lg border border-current border-opacity-20 hover:bg-opacity-30 transition-all duration-300`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View Project</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;