import React from 'react';
import { motion } from 'framer-motion';
import skinDetectionImg from '../assets/skin_detection.png';
import amazonSalesImg from '../assets/amazon_sales.png';
import hireYouImg from '../assets/hireyou.png';
import sportsAnalyticsImg from '../assets/sports_analytics.png';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Based Skin Disease Detection System',
            description: 'A CNN-based skin disease classification system using transfer learning, trained on 3000+ images and deployed with Streamlit.',
            tags: ['CNN', 'Deep Learning', 'Streamlit', 'Python'],
            link: '#',
            image: skinDetectionImg
        },
        {
            title: 'HireYou',
            description: 'A Web application for role-based placement preparation using HTML, CSS, and JavaScript for role-specific practice and interview readiness.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Web App'],
            link: '#',
            image: hireYouImg
        },
        {
            title: 'Amazon Sales Analytics Dashboard',
            description: 'Power BI dashboard using Power Query and DAX to analyze sales trends, top categories, and regional performance.',
            tags: ['Power BI', 'DAX', 'Power Query'],
            link: '#',
            image: amazonSalesImg
        },
        {
            title: 'Sports Analytics Dashboard',
            description: 'Power BI-based dashboard using EDA and KPIs to evaluate player and match performance across teams and seasons.',
            tags: ['Power BI', 'EDA', 'KPIs'],
            link: '#',
            image: sportsAnalyticsImg
        },
    ];

    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
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
                            className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white/5 group"
                        >
                            <div className="h-48 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-primary px-3 py-1 rounded-full text-xs text-accent border border-accent/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
