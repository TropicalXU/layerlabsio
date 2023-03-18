import React from 'react';
import Navbar from './Navbar';
import styles from '../styles';
import box from '../assets/package-box.png';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, imgVariants } from '../utils/motion';
import { TitleText } from './CustomTexts';
import { Link } from 'react-router-dom';

const ProjectDetail = (props) => {
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
                title={(<><span className='gradient-text'>{props.project.title}</span></>)} 
                textStyles="text-center text-white md:text-[65px] font-style-2
                text-[52px] mb-10"
              />
            </motion.div>
          </div>
        </div>
        <div className={`${styles.paddings} relative z-10`}>
          <Link className='bg-[#001233] rounded-full shadow-md text-white font-style px-6 py-3 mt-[60px]' to='/websites'><span className='fa fa-chevron-left mr-2'></span>Projects / <span className='gradient-text'>{props.project.title}</span></Link>
        </div>
        <div className={`${styles.xPaddings} relative z-10 mb-12`}>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <TitleText 
              title={(<>Website Launch Date</>)} 
              textStyles="md:text-[42px] font-style
              text-[36px]"
            />
            <h2 className='font-style text-[36px] text-grey font-semibold'>{props.project.launch}</h2>
          </motion.div>
        </div>
        <div className={`${styles.xPaddings} relative z-10 my-8`}>
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
              className='flex-[0.75] flex justify-center flex-col'
              initial='hidden'
              whileInView='show'
            >
              <div className='bg-[#f8f9fa] rounded-md p-12'>
                <TitleText 
                  title={(<>About the project</>)} 
                  textStyles="text-grey font-style md:text-[32px] 
                  text-[32px] mt-8"
                />
                <p className='font-style py-5'>{props.project.description}</p>
                <div className='md:w-2/3 flex items-center py-4 mb-2'>
                  <a href={props.project.url} className='bg-[#000] hover:bg-[#000000a4] rounded-full text-white px-6 py-2'>Visit Site<span className='fa fa-chevron-right ml-2'></span></a>
                  <a className='text-[36px]' href={props.project.github}><span className='fa fa-github fa-github-work ml-3'></span></a>
                </div>
              </div>
            </motion.div>
            <motion.div
                variants={fadeIn('left')}
                className={`flex-1 ${styles.flexCenter} md:order-1 order-2`}
              >
                <div className='shadow-xl'>
                  <img 
                    alt={props.project.title}
                    src={props.project.image}
                    className="w-[100%] h-[100%] rounded-md object-contain"
                  />
                </div>
              </motion.div>
          </motion.div>
        </div>
        <div className={`${styles.xPaddings} relative z-10 mt-8 mb-12`}>
          <div className='shadow-xl rounded-lg bg-gradient w-full pb-12'>
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: 'false', amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex
              lg:flex-row flex-col items-center gap-8`}
            >
              <div className={`${styles.paddings} relative z-10`}>
                <motion.div
                  variants={imgVariants('right')}
                  className={`flex ${styles.flexCenter}`}
                >
                  <img 
                    alt='package'
                    src={box}
                    className="w-[220px] h-[220] object-contain md:my-10"
                  />
                </motion.div>
              </div>
              <div className={`${styles.paddings} relative z-10`}>
                <motion.div
                  variants={fadeIn('right', 'tween', 0.25, 1)}
                  className='flex-[0.75] flex justify-center text-center flex-col'
                  initial='hidden'
                  whileInView='show'
                >
                  <TitleText 
                    title={(<>Interested in a personal or business website?</>)} 
                    textStyles="font-style md:text-[42px] 
                    text-[38px] text-white text-center md:mt-8"
                  />
                  <p className='text-center font-style text-[26px] py-4'>Check out our services packages!</p>
                  <div className='flex justify-center'>
                  <Link className='bg-[#000] text-white hover:bg-[#00000095] font-style md:w-1/5 rounded-full px-6 py-2 my-4' to='/contact'>More Details<span className='fa fa-chevron-right ml-2'></span></Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;