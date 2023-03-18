import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import Spline from '@splinetool/react-spline';

import { links } from '../constants';
import { staggerContainer, textVariant, fadeIn, imgVariants } from '../utils/motion';
import { Link } from 'react-router-dom';
import { TitleText, HeaderText } from '../components/CustomTexts';

export const HomeHero = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
        >
            <div className='flex flex-col sm:flex-row relative z-10'>
                <div className='md:w-1/3'>
                    <motion.h2
                        variants={textVariant(1.1)}
                        className='text-white font-style-2 text-[22px] md:text-[36px] pt-5'
                    >
                        Layerlabs.io
                    </motion.h2>
                    <motion.h1 
                        variants={textVariant(1.2)}
                        className='font-style-2 my-3 text-white text-[64px] md:text-[72px] mb-[40px]'
                    >
                        Step into the future of web <span className='gradient-text'>design</span>.
                    </motion.h1>
                    <Link className='btn font-style text-white bg-slate-500 hover:bg-slate-600 rounded-full px-6 py-2' to='/services'>Services<span className='fa fa-chevron-right ml-2'></span></Link>
                </div>
                <div className={`md:w-2/3 h-[600px] mt-12`}>
                    <Spline scene="https://prod.spline.design/HgY6xL-NA4gxfBOB/scene.splinecode" />
                </div>
            </div>
        </motion.div>
        <div className={`${styles.xPaddings} ${styles.yPaddings} flex flex-wrap justify-center bg-[#001233]`}>
            {links.map((link) => (
                <a key={link.id} href={link.url} className='font-style text-[16px] md:text-[22px] text-white bg-slate-500 hover:bg-slate-600 rounded-full px-12 py-3 mx-6 my-4'>
                    {link.title} <i className={`${link.icon} fa-2xl`}></i>
                </a>
            ))}
        </div>
        <div className={`${styles.xPaddings} flex justify-center bg-[#001233] py-6`}>
            <h6 className='text-white font-style'>info@layerlabs.io</h6>
        </div>
    </section>
);

export const HomeInterested = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex
            lg:flex-row flex-col gap-8 mt-[20px]`}
        >
            <motion.div
                variants={fadeIn('right', 'tween', 0.25, 1)}
                className='flex-[0.75] flex justify-center flex-col md:w-1/2'
                initial='hidden'
                whileInView='show'
            >
                <TitleText
                    title={(<>Interested in a personal website?</>)}
                    textStyles="gradient-text md:text-[66px] 
                    text-[56px]"
                />
                <p className='font-normal font-style mt-5'>Showcase your work online with a Personal website just for you. What is a personal website? Well essentialy it's a unique way to showcase your work and provide professional information about you. When deciding on building a personal website you must ask yourself why this is important to you, maybe you already have the answer. By finding a purpose you can start getting to work on what information you would like to share and display for your audience. What are some benefits of having a personal website?</p>
                <ul className='list-unstyled font-style mt-6'>
                    <li><span className='fa fa-check gradient-text mr-3'></span>Stand out from the crowd</li>
                    <li><span className='fa fa-check gradient-text mr-3'></span>Create trust and credibility</li>
                    <li><span className='fa fa-check gradient-text mr-3'></span>Showcase your creativity</li>
                    <li><span className='fa fa-check gradient-text mr-3'></span>Generate opportunities</li>
                    <li><span className='fa fa-check gradient-text mr-3'></span>Expand your network</li>
                </ul>
            </motion.div>
            <motion.div
                variants={fadeIn('right')}
                className={`flex-1 ${styles.flexCenter} md:w-1/2`}
            >
                <div className={`h-[500px] w-full`}>
                    <Spline scene="https://prod.spline.design/v0bZcYqAItDKbyqD/scene.splinecode" />
                </div>
            </motion.div>
        </motion.div>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex
            lg:flex-row flex-col gap-8 my-[60px]`}
        >
            <motion.div
                variants={imgVariants('left')}
                className={`flex-1 ${styles.flexCenter} md:order-1 order-2 md:w-1/2`}
            >
                <div className={`h-[500px] w-full`}>
                    <Spline scene="https://prod.spline.design/2ao2lBMR7WcKB7bl/scene.splinecode" />
                </div>
            </motion.div>  
            <motion.div
                variants={fadeIn('left', 'tween', 0.25, 1)}
                className='flex-[0.75] flex justify-center flex-col md:order-2 order-1 mb-[60px] md:w-1/2'
                initial='hidden'
                whileInView='show'
            >
                <TitleText
                    title={(<>Interested in a website for your business?</>)}
                    textStyles="gradient-text md:text-[66px] 
                    text-[56px]"
                />
                <p className='font-normal font-style mt-5'>A website for your business can act as a portal to your customers creating 24/7 on demand awareness to your brand and products. It serves as a window in which you can showcase your marketable skills and connect with a targeted audience. When factoring in the costs, a website may seem like a luxury that may not seem neccessary. However investing in a website for your business can go a long way in setting you up for long-term success. It can be an incredibly important asset with a positive ROI when executed correctly. Word of mouth can only get you so far, having a website acts as advertisement in itself. Lets look at some of the main reasons why you should consider having an online presense for your business.</p>
                <ul className='list-unstyled font-style mt-6'>
                    <li><span className='fa fa-check gradient-text mr-3'></span>Attract new customers</li>
                    <li><span className='fa fa-check gradient-text mr-3'></span>27/7 availability of your products and services</li>
                    <li><span className='fa fa-check gradient-text mr-3'></span>Brand visibility and recognition</li>
                    <li><span className='fa fa-check gradient-text mr-3'></span>Generate opportunities</li>
                    <li><span className='fa fa-check gradient-text mr-3'></span>Online credibility</li>
                </ul>
            </motion.div>
        </motion.div>

    </section>
);

export const HomeProjects = ({project1, project3}) => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
        >
            <TitleText 
                title={(<>Check out some of my work <span className='gradient-text text-[48px]'>.</span></>)} 
                textStyles="text-center text-white md:text-[56px] 
                text-[38px]"
                className='text-center'
            />
        </motion.div>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex
            lg:flex-row flex-col gap-8 mt-[90px]`}
        >
            <motion.div
                variants={fadeIn('right', 'tween', 0.25, 1)}
                className='flex-[0.75] flex justify-center flex-col'
                initial='hidden'
                whileInView='show'
            >
                <HeaderText 
                    title={(<>{`${project1.title}`}</>)}
                    textStyles="text-white"
                />
                <p className='text-white font-style text-normal py-[40px]'>{project1.intro}</p>
                <div className='w-2/3 flex items-center'>
                    <Link to={`/project-detail/${project1.id}`} className='btn btn-gradient font-style text-center my-5'>View <span className='fa fa-chevron-right ml-2'></span></Link>
                    <a className='text-[36px]' href={project1.github}><span className='fa fa-github fa-github-work text-white ml-3'></span></a>
                </div>
            </motion.div>
            <motion.div
                variants={fadeIn('right')}
                className={`flex-1 ${styles.flexCenter}`}
            >
                <img 
                    src={project1.image}
                    className="w-[100%] h-[100%] rounded-lg shadow-xl object-contain"
                />
            </motion.div>
        </motion.div>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex
            lg:flex-row flex-col gap-8 my-[110px]`}
        >
            <motion.div
                variants={fadeIn('left')}
                className={`flex-1 ${styles.flexCenter} md:order-1 order-2`}
            >
                <img 
                    src={project3.image}
                    className="w-[100%] h-[100%] rounded-lg shadow-xl object-contain"
                />
            </motion.div> 
            <motion.div
                variants={fadeIn('left', 'tween', 0.25, 1)}
                className='flex-[0.75] flex justify-center flex-col md:order-2 order-1'
                initial='hidden'
                whileInView='show'
            >
                <HeaderText 
                    title={(<>{`${project3.title}`}</>)}
                    textStyles="text-white"
                />
                <p className='text-white font-style text-normal py-[40px]'>{project3.intro}</p>
                <div className='w-2/3 flex items-center'>
                    <Link to={`/project-detail/${project3.id}`} className='btn btn-gradient font-style text-center my-5'>View <span className='fa fa-chevron-right ml-2'></span></Link>
                    <a className='text-[36px]' href={project3.github}><span className='fa fa-github fa-github-work text-white ml-3'></span></a>
                </div>
            </motion.div>
        </motion.div>
        <div className='flex justify-center my-12'>
            <Link className='btn font-style text-white bg-slate-500 hover:bg-slate-400 rounded-full px-6 py-2' to='/websites'>View All<span className='fa fa-chevron-right ml-2'></span></Link>
        </div>
    </section>
);