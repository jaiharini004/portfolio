import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                        Hi, I'm <span className="text-accent">Jai Harini K S</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl md:text-2xl text-text-muted mb-8"
                    >
                        Final-Year B.Tech AI & Data Science Student
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
                    >
                        Passionate about Data Analytics, AI, and building interactive dashboards. Experienced in data cleaning, EDA, ETL, and Machine Learning.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex space-x-4 justify-center md:justify-start"
                    >
                        <a href="#contact" className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full transition-colors">
                            Contact Me
                        </a>
                        <a href="#projects" className="border border-accent text-accent hover:bg-accent/10 font-bold py-3 px-8 rounded-full transition-colors">
                            View Work
                        </a>
                    </motion.div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20"></div>
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
