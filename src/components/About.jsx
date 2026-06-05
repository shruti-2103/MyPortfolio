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
                                Hi, I'm Shruti Chourasiya, a Computer Science graduate passionate about Web Development. I enjoy building modern, responsive, and user-friendly web applications using clean and efficient code.</p>
                           <p className='text-gray-300 mb-6'>
                               Currently, I am focused on strengthening my skills in React, Node.js, Express.js, and MongoDB while working toward becoming a Mern-Stack Developer. I enjoy learning new technologies, improving UI/UX experiences, and solving real-world problems through code. </p>

                            <p className='text-gray-300 mb-6'>
                                Previously, I worked at Teleperformance as a Customer Support Executive, where I developed strong communication, teamwork, and problem-solving skills. I am always eager to learn, grow, and contribute to impactful projects.</p>

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
