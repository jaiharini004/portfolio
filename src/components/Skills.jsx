import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        "Python", "MySQL", "Java (Basics)",
        "Large Language Models (LLMs)", "RAG", "Prompt Engineering", "APIs", "n8n Workflows",
        "Machine Learning", "Deep Learning", "TensorFlow", "Keras", "CNNs",
        "Data Cleaning", "EDA", "ETL", "Pandas", "NumPy", "Matplotlib", "Excel",
        "Power BI", "Tableau", "Streamlit", "Git", "GitHub", "Firebase"
    ];

    return (
        <section id="skills" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent mb-4">Technical Skills</h2>
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
                            className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10 shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all"
                        >
                            <span className="text-text-muted font-medium">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
