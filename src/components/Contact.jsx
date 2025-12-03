import React from 'react'
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { LiaLinkedin } from 'react-icons/lia';
import { SiGmail } from 'react-icons/si';
import { FaFileAlt } from "react-icons/fa";
const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-200'
        >
            <div className="container mx-auto px-6">
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In
                    <span className='text-purple-700'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>My inbox is always open. Whether you have a question or just want to say hello,
                    I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/*Coontact Form */}
                    <div>
                        <form
                            action="https://getform.io/f/bllgjgyb"
                            method="POST"
                            className="space-y-6" >

                            <div>
                                <label className="block text-gray-300 mb-2">Your Name</label>
                                <input type="text"
                                    name="name"
                                    required
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none">
                                </textarea>
                            </div>

                            <button type="submit"
                                className="w-full px-6 py-3 bg-purple-700 rounded-lg font-medium hover:bg-purple-800 transition duration-300" >
                                Send
                            </button>
                        </form>
                    </div>

                    {/*Contact Information*/}
                    <div className='space-y-1'>
                        <div className="flex items-start">
                            <div className='text-purple text-2xl mr-5 my-7'>
                                <FaMapMarkerAlt />
                            </div>
                            <div className='my-6'>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Indore, (M.P)</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className='text-purple text-2xl mr-6 my-12'>
                                <FaEnvelope />
                            </div>
                            <div className='my-10'>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>

                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shruti210300@gmail.com"
                                    target="_blank"
                                    className="text-blue-400 hover:text-blue-500 transition">shruti210300@gmail.com</a>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <h3 className='text-2xl font-semibold text-purple-700 mb-10'>Follow Me</h3>
                            <div className='flex space-x-6'>
                                <a href="https://github.com/shruti-2103" className='w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple-200 transition duration-300'>
                                    <FaGithub />
                                </a>

                                <a href="https://www.linkedin.com/in/shruti-chourasiya-691a57284/" className='w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center text-cyan-500  hover:bg-cyan-50 transition duration-300'>
                                    <LiaLinkedin />
                                </a>

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shruti210300@gmail.com"
                                    className="w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center text-amber-400 hover:bg-amber-100 transition duration-300"
                                >
                                    <SiGmail />
                                </a>

                                <a href="/resume.pdf" download="Shruti_Resume.pdf" className='w-14 h-14  rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-blue-200 transition duration-300'>
                                    <FaFileAlt />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
