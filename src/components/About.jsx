import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-lg text-text-muted leading-relaxed text-center"
                >
                    <p className="mb-6">
                        I am a final-year B.Tech AI & Data Science student with a strong interest in Data Analytics and AI.
                        I have gained experience in data cleaning, EDA, ETL, and building interactive dashboards using Power BI and Tableau.
                    </p>
                    <p>
                        Proficient in Python and SQL, I possess foundational knowledge of machine learning and deep learning concepts.
                        I am passionate about applying these skills to solve real-world problems and creating meaningful data-driven solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
