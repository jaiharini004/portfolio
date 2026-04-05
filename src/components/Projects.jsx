import React from 'react';
import { motion } from 'framer-motion';
import skinDetectionImg from '../assets/skin_detection.png';
import smartBrowserImg from '../assets/smartbrowser.png';
import hireYouImg from '../assets/hireyou.png';
import sportsAnalyticsImg from '../assets/sports_analytics.png';
import xRayImg from '../assets/xray.png';

const Projects = () => {
    const projects = [
        {
            title: 'SmartBrowser: AI-Powered Multi-Modal Browser Automation',
            description: 'Built an agentic browser assistant that reads page context, plans next actions, and executes multi-step web tasks using interchangeable LLM providers.',
            tags: ['LLMs', 'Automation', 'Browser AI','Gradio', 'Python'],
            link: 'https://github.com/jaiharini004?tab=repositories',
            image: smartBrowserImg
        },
        {
            title: 'AI-Based Skin Disease Detection System',
            description: 'Developed a transfer-learning pipeline for skin condition recognition and wrapped it in a Streamlit app for quick, user-friendly predictions.',
            tags: ['CNN', 'Deep Learning', 'Streamlit', 'Python'],
            link: 'https://github.com/jaiharini004/AI-Skin-Disease-Detection',
            image: skinDetectionImg
        },
        {
            title: 'HireYou',
            description: 'Created a role-based placement prep platform with focused practice tracks and an interface designed to keep interview preparation structured and simple.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Web App'],
            link: 'https://github.com/jaiharini004/HireYou-harini',
            image: hireYouImg
        },
        {
            title: 'X-Ray Image Search Using Deep Learning',
            description: 'Implemented a dual-query retrieval workflow where users can search X-ray cases using either natural language prompts or reference images.',
            tags: ['Multimodal', 'Deep Learning', 'Computer Vision', 'Python'],
            link: 'https://github.com/jaiharini004/X--Ray-Image-Search-Using-Deep-Learning',
            image: xRayImg
        },
        {
            title: 'Sports Analytics Dashboard',
            description: 'Designed an interactive Power BI report to compare teams, players, and season trends through KPI-driven views and drill-down performance analysis.',
            tags: ['Power BI', 'EDA', 'KPIs'],
            link: 'https://github.com/jaiharini004?tab=repositories',
            image: sportsAnalyticsImg
        },
    ];

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent mb-4">Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-accent/20 transition-all border border-white/10 group hover:-translate-y-2"
                        >
                            <div className="h-48 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-text-muted mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-primary px-3 py-1 rounded-full text-xs text-accent border border-accent/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold py-2 px-6 rounded-full transition-all shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] hover:-translate-y-1 text-sm"
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
