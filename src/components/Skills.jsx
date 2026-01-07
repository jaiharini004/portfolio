import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        "Python", "SQL", "Java (Basics)",
        "Data Cleaning", "ETL", "EDA", "Excel",
        "Machine Learning", "Deep Learning", "TensorFlow", "Keras",
        "Power BI", "Tableau", "MySQL",
        "Streamlit", "Git", "GitHub", "Firebase"
    ];

    return (
        <section id="skills" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-secondary px-6 py-3 rounded-lg border border-white/5 shadow-sm hover:border-accent/50 transition-colors"
                        >
                            <span className="text-gray-200 font-medium">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
