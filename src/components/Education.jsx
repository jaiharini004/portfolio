import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            school: 'K.L.N. College of Engineering',
            degree: 'B.Tech in Artificial Intelligence and Data Science',
            year: '2022–2026',
            grade: 'CGPA: 8.37 (up to 6th Semester)',
            location: 'Sivagangai, Tamil Nadu'
        },
        {
            school: 'Sri Sarada Vidyavanam Girls Matric Higher Secondary School',
            degree: 'HSC (Class XII)',
            year: '2022',
            grade: 'Percentage: 80%',
            location: 'Madurai, Tamil Nadu'
        },
    ];

    return (
        <section id="education" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent mb-4">Education</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all hover:-translate-y-1 shadow-lg"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-text">{edu.school}</h3>
                                <span className="text-accent font-semibold">{edu.year}</span>
                            </div>
                            <h4 className="text-xl text-text-muted mb-2">{edu.degree}</h4>
                            <div className="flex flex-col md:flex-row md:items-center justify-between text-text-muted/80">
                                <p>{edu.location}</p>
                                <p className="font-medium text-accent/80">{edu.grade}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
