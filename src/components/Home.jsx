import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import styles from '../styles';

import { cardData } from '../constants';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText } from './CustomTexts';

import { HomeHero, HomeInterested, HomeProjects } from '../sections/HomeSections';

const Home = ({project1, project3}) => {
  return (
    <>
        <div className='overflow-hidden'>
            <div className='bg-[#001233]'>
                <Navbar />
                <HomeHero />
            </div>
            <div className={`${styles.paddings} relative z-10`}>
                <motion.div
                    variants={staggerContainer}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: 'false', amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto flex flex-col`}
                >
                    {/* <TitleText 
                        title={(<>Bring your visions to life with <span className='gradient-text'>Layerlabs..</span></>)} 
                        textStyles="text-center md:text-[56px] 
                        text-[68px]"
                    /> */}
                    <div className='flex flex-wrap justify-center'>
                    {cardData.map((data, index) => (
                        <motion.div 
                            key={data.id}
                            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                            initial='hidden'
                            whileInView='show'
                            className='border-[.5px] shadow-lg rounded-xl  w-[340px] h-[290px] mt-[50px] mx-5 flex flex-col justify-center items-center p-[10px]'
                        >
                            <i className={`${data.icon} ml-2`}></i>
                            <p className='font-semibold font-style text-[32px]'>{data.title}</p>
                            <p className='text-center text-grey pt-4'>{data.subtitle}</p>
                        </motion.div>
                    ))}
                    </div>
                </motion.div>
            </div>
            <HomeInterested />
            <div className='bg-[#001233]'>
                <HomeProjects project1={project1} project3={project3} />
            </div>
        </div>
    </>

  );
}

export default Home;