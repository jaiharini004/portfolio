import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent mb-4">Contact</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                        {/* Email */}
                        <a href="mailto:jaiharini004@gmail.com" className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center hover:border-accent/50 transition-all group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-accent group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold text-text mb-2">Email</h3>
                            <p className="text-text-muted">jaiharini004@gmail.com</p>
                        </a>

                        {/* Phone */}
                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold text-text mb-2">Phone</h3>
                            <p className="text-text-muted">+91 8807927795</p>
                        </div>

                        {/* Location */}
                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold text-text mb-2">Location</h3>
                            <p className="text-text-muted">Madurai, India</p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-text mb-6">Follow Me</h3>
                        <div className="flex justify-center gap-8">
                            <a
                                href="https://github.com/jaiharini004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-4xl text-blue-500 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                            >
                                <FiGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jaiharini004/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-4xl text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.6)]"
                            >
                                <FiLinkedin />
                            </a>
                            <a
                                href="https://leetcode.com/u/Harini-Suresh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-4xl text-green-500 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                            >
                                <FiCode />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
