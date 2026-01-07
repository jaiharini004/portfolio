import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode, FiDownload, FiMail } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';


const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >

                    {/* Header */}
                    <h1 className="text-5xl md:text-7xl font-bold text-text mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-accent to-accent-purple bg-clip-text text-transparent">Jai Harini K S</span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="inline-block ml-4 text-4xl"
                        >
                        </motion.span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-text-muted mb-8 font-light">
                        AI & Data Science Enthusiast
                    </h2>

                    <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                        Passionate about Data Analytics, AI, and building interactive dashboards.
                        Experienced in data cleaning, EDA, ETL, and Machine Learning.
                        Building intelligent solutions that make a difference.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                        <a
                            href="#projects"
                            className="bg-gradient-to-r from-accent to-accent-purple text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-1"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="bg-transparent border border-text-muted/30 text-text hover:border-accent hover:text-accent font-bold py-3 px-8 rounded-full transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Social Icons (Small, distinct from footer) */}
                    <div className="flex justify-center gap-6 text-2xl text-text-muted">
                        <a href="https://github.com/jaiharini004" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FiGithub /></a>
                        <a href="https://www.linkedin.com/in/jaiharini004/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FiLinkedin /></a>
                        <a href="https://leetcode.com/u/Harini-Suresh" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors"><FiCode /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
