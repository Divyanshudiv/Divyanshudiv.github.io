import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const contactLinks = [
    {
      label: 'Email',
      href: 'mailto:f20221129@goa.bits-pilani.ac.in',
      icon: '✉️',
      description: 'Get in touch directly'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/divyanshu-singh-130951250',
      icon: '💼',
      description: 'Professional network'
    },
    {
      label: 'GitHub',
      href: 'https://www.github.com/Divyanshudiv',
      icon: '💻',
      description: 'Code repositories'
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=fbleo8UAAAAJ&hl=en',
      icon: '🎓',
      description: 'Research publications'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's <span className="text-gradient-ocean">Connect</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and research.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{link.label}</h3>
                <p className="text-gray-400 text-sm">{link.description}</p>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-500/30 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-300 mb-6">
                Whether it's research, development, or just sharing ideas about the future of AI and technology.
              </p>
              <motion.a
                href="mailto:f20221129@goa.bits-pilani.ac.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold px-8 py-3 rounded-full hover:from-primary-600 hover:to-accent-600 transition-all"
              >
                Send me an Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-6 h-6 bg-primary-400 rounded-full opacity-30"
        animate={{
          y: [-10, 10, -10],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-20 right-20 w-8 h-8 bg-accent-400 rounded-full opacity-20"
        animate={{
          y: [10, -10, 10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default ContactSection;