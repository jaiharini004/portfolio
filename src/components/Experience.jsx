import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: 'B.Tech in Artificial Intelligence and Data Science (CGPA: 8.46)',
            company: 'K.L.N. College of Engineering, Sivagangai, Tamil Nadu',
            duration: '2022 - 2026',
            description: 'Pursuing final-year engineering with core focus on AI, data science, and applied machine learning.',
        },
        {
            role: 'Higher Secondary Schooling (Percentage: 80%)',
            company: 'Sri Sarada Vidyavanam Girls Matric Higher Secondary School, Madurai, Tamil Nadu',
            duration: '2022',
            description: 'Completed higher secondary education with strong academic foundation in science and mathematics.',
        },
        {
            role: 'Vote of Thanks Speaker - AISTHETICKA 2025',
            company: 'K.L.N. College of Engineering',
            duration: '2025',
            description: 'Delivered the Vote of Thanks at the national-level technical symposium, demonstrating communication and leadership skills.',
        },
    ];

    return (
        <section id="experience" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent mb-4">Education & Activities</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-accent/30 bg-white/5 backdrop-blur-sm p-6 rounded-r-xl border-y border-r border-white/10 shadow-sm hover:shadow-accent/10 transition-all"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                            <div className="mb-1 text-sm text-accent">{exp.duration}</div>
                            <h3 className="text-xl font-bold text-text">{exp.role}</h3>
                            <div className="text-lg text-text-muted mb-4">{exp.company}</div>
                            <p className="text-text-muted">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
