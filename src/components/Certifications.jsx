import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certifications = [
        {
            title: "Python for Data Science",
            issuer: "Cognitive Class",
            description: "Gained hands-on experience in Python programming for data analysis."
        },
        {
            title: "SQL and Relational Databases",
            issuer: "Cognitive Class",
            description: "SQL queries practiced, database design, normalization, and data analysis using DB2."
        },
        {
            title: "Google Analytics",
            issuer: "Google",
            description: "Analyzed user behavior, events, and performance metrics for business insights."
        }
    ];

    return (
        <section id="certifications" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-sm hover:shadow-accent/20 transition-all hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-bold text-text mb-2">{cert.title}</h3>
                            <p className="text-accent font-medium mb-3">{cert.issuer}</p>
                            <p className="text-text-muted text-sm">{cert.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
