import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import img1 from '../assets/wireframing1.jpg';
import img2 from '../assets/discover.jpg';
import img3 from '../assets/seo.jpg';
import img4 from '../assets/database.jpg';
import img5 from '../assets/protection.jpg';
import img6 from '../assets/online-payment.jpg';
import businessPackage from '../assets/business-package.jpg';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillPicture } from 'react-icons/ai';
import { SiMaterialdesignicons } from 'react-icons/si';

import styles from '../styles';
import { staggerContainer, imgVariants, fadeIn } from '../utils/motion';
import { TitleText } from './CustomTexts';

const BusinessPackage = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='bg-[#001233]'>
          <Navbar />
          <div className={`${styles.paddings} relative z-10`}>
            <Link className='bg-[#fff] rounded-full font-style px-6 py-3 mt-[60px]' to='services'><span className='fa fa-chevron-left mr-2'></span>Services / <span className='gradient-text'>Business +</span></Link>
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
              <motion.div
                  variants={fadeIn('right', 'tween', 0.25, 1)}
                  className='flex-[0.75] flex justify-center flex-col'
                  initial='hidden'
                  whileInView='show'
              >
                <h1 className='text-center text-white font-style text-[48px]'>Business<span className='gradient-text'>+</span></h1>
                <div className={`${styles.paddings} relative z-10`}>
                <ul className='list-none text-white font-styles text-[16px] md:text-[20px]'>
                  <li><h5 className='py-3'><span className='fa fa-check gradient-text mr-4'></span>Up to 15 individually designed high <span className='ml-8 md:ml-0'>end pages</span></h5></li>
                  <li><h5 className='py-3'><span className='fa fa-check gradient-text mr-4'></span>Mobile first designed approach.</h5></li>
                  <li><h5 className='py-3'><span className='fa fa-check gradient-text mr-4'></span>UI/UX Wireframing Process: <span className='ml-8 md:ml-0'>Detailed <span className='md:ml-8 ml-0'>Wireframes</span> & User</span> <span className='ml-8 md:ml-0'>Persona</span></h5></li>
                  <li><h5 className='py-3'><span className='fa fa-check gradient-text mr-4'></span>High level interactivity & animation</h5></li>
                  <li><h5 className='py-3'><span className='fa fa-check gradient-text mr-4'></span>Basic database integration</h5></li>
                  <li><h5 className='py-3'><span className='fa fa-check gradient-text mr-4'></span>Advanced SEO integration</h5></li>
                  <li><h5 className='py-3'><span className='fa fa-check gradient-text mr-4'></span>Site backup & security</h5></li>
                  <li><h5 className='py-3'><span className='fa fa-check gradient-text mr-4'></span>Additional business functionality <span className='ml-8 md:ml-0'>and plugin</span> <span className='ml-0 md:ml-8'>features</span></h5></li>
                  <li><h5 className='py-3'><span className='fa fa-check gradient-text mr-4'></span>Managed website launch & support</h5></li>
                </ul>
                </div>
              </motion.div>
              <motion.div
                variants={imgVariants('right')}
                className={`flex-1 ${styles.flexCenter} items-center`}
              >
                <div className='rounded-lg shadow-2xl'>
                  <img 
                    alt='business image'
                    src={businessPackage}
                    className="w-[100%] h-[100%] rounded-lg object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className={`${styles.paddings} relative z-10`}>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <div className='flex flex-wrap justify-center'>
                <motion.div 
                  variants={fadeIn('right', 'spring', 0.5, 0.75)}
                  initial='hidden'
                  whileInView='show'
                  className='border-[.5px] shadow-lg rounded-xl  w-[340px] h-[290px] mt-[30px] mx-5 flex flex-col justify-center items-center p-[10px]'
                > 
                  <BsFillPencilFill className='text-[22px] mb-3' />
                  <p className='font-semibold font-style text-[32px]'>Plan</p>
                  <p className='text-center text-grey pt-4'>Create and design a roadmap of what you hope to achieve for your website.</p>
                </motion.div>
                <motion.div 
                  variants={fadeIn('right', 'spring', 0.6, 0.75)}
                  initial='hidden'
                  whileInView='show'
                  className='border-[.5px] shadow-lg rounded-xl  w-[340px] h-[290px] mt-[30px] mx-5 flex flex-col justify-center items-center p-[10px]'
                > 
                  <AiFillPicture className='text-[22px] mb-3' />
                  <p className='font-semibold font-style text-[32px]'>Visualize</p>
                  <p className='text-center text-grey pt-4'>Gather images and material to help you visualize and plan your website.</p>
                </motion.div>
                <motion.div 
                  variants={fadeIn('right', 'spring', 0.7, 0.75)}
                  initial='hidden'
                  whileInView='show'
                  className='border-[.5px] shadow-lg rounded-xl  w-[340px] h-[290px] mt-[30px] mx-5 flex flex-col justify-center items-center p-[10px]'
                > 
                  <SiMaterialdesignicons className='text-[22px] mb-3' />
                  <p className='font-semibold font-style text-[32px]'>Design</p>
                  <p className='text-center text-grey pt-4'>Establish a theme, choose your color palettes and construct your brand.</p>
                </motion.div>
            </div>
          </motion.div>
        </div>
        <div className={`${styles.paddings2} relative z-10`}>
          <div className='bg-[#f8f9fa] rounded-md'>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <TitleText 
              title={(<>Business<span className='gradient-text'>+</span> Package Details</>)} 
              textStyles="text-center text-grey font-style md:text-[42px] 
              text-[52px] mt-14"
            />
            <div className={`${styles.paddings2} relative z-10`}>
              <div className='bg-[#ffffff] shadow-md rounded-xl pb-12'>
              <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: 'false', amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-wrap md:flex-row md:justify-around`}
              >
                <div className='flex flex-col md:w-1/3 text-center my-4 md:my-6'>
                  <TitleText 
                    title={(<>Collabarative Designs</>)} 
                    textStyles="text-center gradient-text font-style md:text-[26px] 
                    text-[22px] py-5 mt-8"
                  />
                  <motion.div
                    variants={fadeIn('left')}
                    className={`flex-1 ${styles.flexCenter} items-center`}
                  >
                    <div className='md:w-[320px]'>
                      <img 
                        alt='collab designs'
                        src={img1}
                        className="rounded-lg shadow-xl border-[6px] border-[#fff] object-contain"
                      />
                    </div>
                  </motion.div>
                  <p className='font-style text-grey px-10 pt-4'>Choose from 5-15 individually designed custom & collabarative pages.</p>
                </div>
                <div className='flex flex-col md:w-1/3 text-center my-4 md:my-6'>
                  <TitleText 
                    title={(<>Fully Responsive</>)} 
                    textStyles="text-center gradient-text font-style md:text-[26px] 
                    text-[22px] py-5 mt-8"
                  />
                  <motion.div
                    variants={fadeIn('left')}
                    className={`flex-1 ${styles.flexCenter} items-center`}
                  >
                    <div className='md:w-[320px]'>
                      <img 
                        alt='responsive design'
                        src={img2}
                        className="rounded-lg shadow-xl border-[6px] border-[#fff] object-contain"
                      />
                    </div>
                  </motion.div>
                  <p className='font-style text-grey px-10 pt-4'>A responsive web design that adapts to all screen sizes.</p>
                </div>
                <div className='flex flex-col md:w-1/3 text-center my-4 md:my-6'>
                  <TitleText 
                    title={(<>Advanced SEO</>)} 
                    textStyles="text-center gradient-text font-style md:text-[26px] 
                    text-[22px] py-5 mt-8"
                  />
                  <motion.div
                    variants={fadeIn('left')}
                    className={`flex-1 ${styles.flexCenter} items-center`}
                  >
                    <div className='md:w-[320px]'>
                      <img 
                        alt='SEO'
                        src={img3}
                        className="rounded-lg shadow-xl border-[6px] border-[#fff] object-contain"
                      />
                    </div>
                  </motion.div>
                  <p className='font-style text-grey px-10 pt-4'>In depth Search Engine Optimization improving website traffic to your site.</p>
                </div>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: 'false', amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-wrap md:flex-row md:justify-around`}
              >
                <div className='flex flex-col md:w-1/3 text-center my-4 md:my-6'>
                  <TitleText 
                    title={(<>Database Integration</>)} 
                    textStyles="text-center gradient-text font-style md:text-[26px] 
                    text-[22px] py-5 mt-8"
                  />
                  <motion.div
                    variants={fadeIn('left')}
                    className={`flex-1 ${styles.flexCenter} items-center`}
                  >
                    <div className='md:w-[320px]'>
                      <img 
                        alt='database'
                        src={img4}
                        className="rounded-lg shadow-xl border-[6px] border-[#fff] object-contain"
                      />
                    </div>
                  </motion.div>
                  <p className='font-style text-grey px-10 pt-4'>Scalable data storage and managment including ongoing support.</p>
                </div>
                <div className='flex flex-col md:w-1/3 text-center my-4 md:my-6'>
                  <TitleText 
                    title={(<>Advanced Security</>)} 
                    textStyles="text-center gradient-text font-style md:text-[26px] 
                    text-[22px] py-5 mt-8"
                  />
                  <motion.div
                    variants={fadeIn('left')}
                    className={`flex-1 ${styles.flexCenter} items-center`}
                  >
                    <div className='md:w-[320px]'>
                      <img 
                        alt='website security'
                        src={img5}
                        className="rounded-lg shadow-xl border-[6px] border-[#fff] object-contain"
                      />
                    </div>
                  </motion.div>
                  <p className='font-style text-grey px-10 pt-4'>Advanced website security to ensure the protection against unauthorized access.</p>
                </div>
                <div className='flex flex-col md:w-1/3 text-center my-4 md:my-6'>
                  <TitleText 
                    title={(<>Integrated Payments</>)} 
                    textStyles="text-center gradient-text font-style md:text-[26px] 
                    text-[22px] py-5 mt-8"
                  />
                  <motion.div
                    variants={fadeIn('left')}
                    className={`flex-1 ${styles.flexCenter} items-center`}
                  >
                    <div className='md:w-[320px]'>
                      <img 
                        alt='integrated payments'
                        src={img6}
                        className="rounded-lg shadow-xl border-[6px] border-[#fff] object-contain"
                      />
                    </div>
                  </motion.div>
                  <p className='font-style text-grey px-10 pt-4'>Integrated payment features and functionality to recieve secure payments.</p>
                </div>
              </motion.div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessPackage;