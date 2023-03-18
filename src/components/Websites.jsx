import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import styles from '../styles';
import { projects } from '../constants';
import logo from '../assets/layers.png';
import { Link } from 'react-router-dom';

import { staggerContainer, imgVariants, fadeIn } from '../utils/motion';
import { TitleText, HeaderText } from './CustomTexts';

const Websites = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='bg-[#001233]'>
          <Navbar />
          <div className={`${styles.paddings} relative z-10`}>
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: 'false', amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
              <TitleText 
                title={(<><span className='gradient-text'>Layerlabs</span> Websites.</>)} 
                textStyles="text-center text-white md:text-[65px] font-style-2
                text-[62px] mb-10"
              />
            </motion.div>
 
              {projects.map((proj, index) => (
                proj.id % 2 === 0 ? (
                  <>
                      <motion.div
                        key={proj.id}
                        variants={staggerContainer}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: 'false', amount: 0.25 }}
                        className={`${styles.innerWidth} ${styles.yPaddings} mx-auto flex
                          lg:flex-row flex-col gap-8`}
                      >
                        <motion.div
                          variants={fadeIn('right', 'tween', 0.25, 1)}
                          className='flex-[0.75] flex justify-center flex-col'
                          initial='hidden'
                          whileInView='show'
                        >
                          <HeaderText 
                            title={(<>{`${proj.title}`}</>)}
                            textStyles="text-white"
                          />
                          <p className='text-white font-style text-normal py-[40px]'>{proj.intro}</p>
                          <div className='w-2/3 flex items-center'>
                            <Link to={`/project-detail/${proj.id}`} className='btn btn-gradient font-style text-center my-5'>View <span className='fa fa-chevron-right ml-2'></span></Link>
                            <a className='text-[36px]' href={proj.github}><span className='fa fa-github fa-github-work text-white ml-3'></span></a>
                          </div>
                        </motion.div>
                      <motion.div
                        variants={fadeIn('left')}
                        className={`flex-1 ${styles.flexCenter}`}
                      >
                        <img 
                            alt={proj.title}
                            src={proj.image}
                            className="w-[100%] h-[100%] rounded-lg shadow-xl object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  </>
                )
                : (
                  <>
                    <motion.div
                      variants={staggerContainer}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: 'false', amount: 0.25 }}
                      className={`${styles.innerWidth} mx-auto flex
                      lg:flex-row flex-col gap-8 my-[80px]`}
                    >
                      <motion.div
                          variants={fadeIn('right')}
                          className={`flex-1 ${styles.flexCenter} order-2 md:order-1 `}
                      >
                        <img 
                            alt={proj.title}
                            src={proj.image}
                            className="w-[100%] h-[100%] rounded-lg shadow-xl object-contain"
                        />
                      </motion.div> 
                      <motion.div
                          variants={fadeIn('left', 'tween', 0.25, 1)}
                          className='flex-[0.75] flex justify-center flex-col order-1 md:order-2'
                          initial='hidden'
                          whileInView='show'
                      >
                        <HeaderText 
                            title={(<>{`${proj.title}`}</>)}
                            textStyles="text-white"
                        />
                        <p className='text-white font-style text-normal py-[40px]'>{proj.intro}</p>
                        <div className='w-2/3 flex items-center'>
                          <Link to={`/project-detail/${proj.id}`} className='btn btn-gradient font-style text-center my-5'>View <span className='fa fa-chevron-right ml-2'></span></Link>
                          <a className='text-[36px]' href={proj.github}><span className='fa fa-github fa-github-work text-white ml-3'></span></a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </>
                )
              ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default Websites;