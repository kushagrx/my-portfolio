import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "kushagrabisht10@gmail.com",
      href: "mailto:kushagrabisht10@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/kushagrx",
      href: "https://github.com/kushagrx",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/kushagra-bisht",
      href: "https://www.linkedin.com/in/kushagra-bisht-29984b27a/",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9311508608",
      href: "tel:+919311508608",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "New Delhi, India",
      href: "#",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-300 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative block"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10`} />
              
              <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 text-center">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${contact.color} bg-opacity-20 mb-4`}>
                  <div className="text-white">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                <p className="text-slate-300 text-sm break-all">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to work together?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            </p>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're looking for an intern, have a project in mind, or want to discuss the latest in cloud technology and development, I'd love to hear from you.
            </p>
            <motion.a
              href="mailto:kushagrabisht10@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-800 to-cyan-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-700/50 text-center"
        >
          <p className="text-gray-400">
            © 2025 Kushagra Bisht.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;