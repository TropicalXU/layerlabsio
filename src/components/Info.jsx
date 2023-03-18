import React from 'react';
import Navbar from './Navbar';
import styles from '../styles';
import { motion } from 'framer-motion';
import logo from '../assets/layers.png'
import layerlabs from '../assets/layerlabs.png'

import { TitleText } from './CustomTexts';
import { staggerContainer, imgVariants, fadeIn } from '../utils/motion';
import { FcInfo } from 'react-icons/fc';
import { techLogos } from '../constants';

const Info = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='mt-2 mx-2'>
          <div className='about-header'>
            <Navbar />
            <div className={`${styles.paddings} relative z-10`}>
              <div className='flex text-center'>
                <motion.div
                  variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: 'false', amount: 0.25 }}
                  className={`${styles.innerWidth} mx-auto flex flex-col`}
                >
                  <TitleText
                    title={(<>Layerlabs</>)}
                    textStyles="text-white md:text-[66px] 
                    text-[62px]"
                  />
                  <TitleText
                    title={(<>Step into the future of web <span className='gradient-text'>design</span>.</>)}
                    textStyles="text-white md:text-[42px] 
                    text-[36px]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className={`${styles.paddings} relative z-10`}>
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: 'false', amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex
              lg:flex-row flex-col gap-8`}
            >
              <div className='bg-[#f8f9fa] rounded-md md:w-1/3 p-12'>
                <TitleText 
                  title={(<>Layerlabs.io</>)} 
                  textStyles="text-grey font-style md:text-[32px] 
                  text-[38px] mt-8"
                />
                <motion.div
                  variants={fadeIn('up', 'tween', 0.25, 1)}
                  initial='hidden'
                  whileInView='show'
                >
                  <p className='font-style py-4 mb-3'>
                    Hi, my name is Sean Hackett and welcome to my website Layerlabs. There are many layers to consider as a Full Stack Web Developer from writing the back-end code to building the framework of the application, planning and designing the front-end to full deployment of the website.
                    As an individual I am very creative yet also curious. When I began my journey into web development that curiosity to discover and learn all aspects of the development proccess in building a full scale custom web application was very evident. I created this website with my love for web development specifically creation & design.
                  </p>
                  <a className='bg-[#000] rounded-full text-white px-6 py-2' href='#personal-profile'>Personal Profile<span className='fa fa-chevron-down ml-2'></span></a>
                </motion.div>
              </div>
              <motion.div
                variants={fadeIn('left')}
                className={`flex-1 ${styles.flexCenter} md:order-1 order-2`}
              >
                <div className='rounded-lg shadow-xl'>
                  <img 
                    alt='layerlabs logo'
                    src={layerlabs}
                     className="w-[100%] h-[100%] rounded-md object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className={`${styles.xPaddings} my-8 relative z-10`}>
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: 'false', amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex
              lg:flex-row flex-col gap-8`}
            >
              <div className='bg-[#001233] w-full rounded-xl md:p-12 py-4'>
                <TitleText 
                  title={(<>Why choose <span className='gradient-text'>Layerlabs?</span></>)} 
                  textStyles="text-white text-center font-style md:text-[56px] 
                  text-[38px] mt-8"
                />
                <div className='shadow-sm rounded-xl p-12 mt-6'>
                  <motion.div
                    variants={staggerContainer}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: 'false', amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto flex
                    lg:flex-row flex-col gap-8`}
                  >
                    <motion.div
                      variants={fadeIn('right', 'tween', 0.25, 1)}
                      className='md:w-2/3'
                      initial='hidden'
                      whileInView='show'
                    >
                      <p className='font-style text-white py-4 mb-3'>
                        At Layerlabs I want to bring my own touch giving you the best and most responsive custom website design possible. What you want from a website can vary yet what matters most is the experience yourself and your users have. A clean, cutting edge design is what we aim to achieve. Whether you're looking for a personal website, portfolio, or business I've got it handled. Every detail matters, from layout and design to color palettes, security and much more I am with you every step of the way. Check out the discover page to get inspired or view my previous work for reference.
                      </p>
                    </motion.div>
                    <motion.div
                      variants={imgVariants('up')}
                      className={`flex-1 ${styles.flexCenter} md:order-1 order-2`}
                    >
                      <img 
                        alt='layerlabs logo'
                        src={logo}
                        className="w-[220px] h-[220px] object-contain"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className={`${styles.xPaddings} py-5 relative z-10`} id='personal-profile'>
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: 'false', amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex
              lg:flex-row flex-col gap-8`}
            >
              <TitleText 
                title={(<><span className='flex flex-row items-center'>Developer Info<FcInfo className='text-[22px] ml-2' /></span></>)} 
                textStyles="text-grey text-center font-style md:text-[42px] 
                text-[38px] mt-8"
              />
            </motion.div>
          </div>
          <div className={`${styles.xPaddings} py-5 relative z-10`}>
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: 'false', amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex
              lg:flex-row flex-col gap-8`}
            >
              <div className='bg-gradient shadow-xl w-full rounded-xl md:p-12'>
                <div className='bg-gradient shadow-sm rounded-xl p-12 mt-6'>
                  <motion.div
                    variants={staggerContainer}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: 'false', amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto flex
                    lg:flex-row flex-col gap-8`}
                  >
                    <div className='md:w-1/2'>
                      <TitleText 
                        title={(<>Sean Hackett</>)} 
                        textStyles="text-white font-style md:text-[36px] 
                        text-[38px] mt-8"
                      />
                      <motion.div
                        variants={fadeIn('left', 'tween', 0.25, 1)}
                        className='flex-[0.75] flex justify-center flex-col'
                        initial='hidden'
                        whileInView='show'
                      >
                        <h1 className='py-8 font-style text-[26px]'>Full Stack Web Developer</h1>
                        <h2 className='font-style text-[22px]'>Skills:</h2>
                        <p className='font-style font-semibold text-white text-[26px] pt-4'>HTML, CSS, Javascript, React, Tailwind, Express.js, Node.js, MongoDB, Figma..</p>
                        <div className='flex flex-row'>
                          <a className='my-6 text-[36px] text-white' href="https://github.com/TropicalXU"><i className='fa fa-github'></i></a>
                          <a className='my-6 text-[36px] text-[#2f67d8]' href="https://www.linkedin.com/in/seanhackett2022/"><span className='fa fa-linkedin ml-3'></span></a>
                        </div>
                      </motion.div>
                    </div>
                    <div className='md:w-1/2'>
                      <motion.div
                        variants={fadeIn('left', 'tween', 0.25, 1)}
                        className='flex-[0.75] flex justify-center flex-col'
                        initial='hidden'
                        whileInView='show'
                      >
                        <p className='font-style text-white'>As a Full Stack Web Developer I specialize in creating and maintaining high-performance web applications. My expertise lies in utilizing modern web technologies such as React, CSS , Tailwind, Javascript, Next.js, Node.js, Express, MongoDB, Git, Github, Heroku, Figma & Spline to deliver engaging and user-friendly websites and web applications. I am well-versed in both front-end and back-end development and have a deep understanding of the entire web development process, from design and development to deployment and maintenance. I am always eager to learn new technologies and stay up to date with the latest industry trends. I am passionate about staying up to date with the latest web development trends and technologies and am always eager to learn and grow as a developer. I am a team player, able to work effectively with cross-functional teams to understand the business requirements and deliver on-time and on-budget solutions.</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className={`${styles.paddings} relative z-10`}>
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: 'false', amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
              <div className='flex flex-wrap justify-center mb-[40px]'>
                {techLogos.map((logos, index) => (
                  <motion.div 
                    variants={fadeIn('up', 'tween', index * 0.5, 0.75)}
                    initial='hidden'
                    whileInView='show'
                    className='my-5 mx-5 flex flex-col justify-between items-center px-5'
                  >
                    <img alt='tech logos' className='w-[90px] h-[90px] my-2' src={logos.img} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;