import React from 'react'
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-0 px-6'>
                {/*Heading*/}
                <h2 className='text-3xl font-bold text-center mb-4'>About
                    <span className='text-purple-700'>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

                {/* image+ my journey */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* image */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full  object-cover'
                            src={assets.profileImg} alt='Profile' />
                    </div>
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'>

                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>
                                Hi, I'm Shruti Chourasiya from Indore. I completed my Bachelor of Science in Computer Scienc. My interest in web development has driven me to build modern, responsive, and user-focused websites with clean code and smooth perfomance. I love continuously learning and exploring new tools—whether it's UI/UX, animations, or building scalable components. My goal is to become a full-stack developer and work on impactful real-world projects.</p>

                            <p className='text-gray-300 mb-6'>I'm a quick learner and adapt well to fast-changing environments. I’ve also worked at Teleperformance as a Customer Support Executive, which strengthened my communication and problem-solving skills.
                                I'm open to new opportunities. You can download my CV for more details and Feel free to visit my LinkedIn and GitHub to explore my projects and professional journey.</p>

                            {/* Cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                            <div className='text-purple text-4xl mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-400'>{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    )
}

export default About