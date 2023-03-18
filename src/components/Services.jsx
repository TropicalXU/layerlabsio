import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles';

import { MdCancel } from 'react-icons/md'
import { BsPatchCheckFill, BsArrowDownRightCircle, BsArrowDownLeftCircle } from 'react-icons/bs'
import { packageData, includedCards } from '../constants';
import { staggerContainer, fadeIn, imgVariants } from '../utils/motion';
import { TitleText, HeaderText } from './CustomTexts';
import wireframing from '../assets/wireframing.jpg';
import design from '../assets/design.jpg';
import develop from '../assets/develop.jpg';
import test from '../assets/test.jpg';
import box from '../assets/package-box.png';

function Services() {
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
                  title={(<>Choose from 3 custom packages...</>)} 
                  textStyles="text-center text-white md:text-[48px] 
                    text-[32px]"
                />
                <div className='flex flex-wrap justify-center'>
                  {packageData.map((data, index) => (
                    <motion.div 
                    key={data.id}
                    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                    initial='hidden'
                    whileInView='show'
                    className=' shadow-lg rounded-xl  w-[340px] h-[510px] xs:h-[100%] mt-[60px] mx-5 flex flex-col justify-center items-center p-[20px] bg-gradient'
                    >
                      <img alt={data.title} src={data.img} className='w-[70px] h-[70px] my-4' />
                      <h1 className='font-semibold text-white font-style text-[32px]'>{data.title}</h1>
                      <p className='font-normal text-white font-style text-center pt-3'>{data.subtitle}</p>
                      <p className='text-white'>________________</p>
                      <ul className='list-none text-white text-center bg-[#00000012] rounded-xl p-5 my-2'>
                        <li><span className='fa fa-check mr-2'></span>{data.list1}</li>
                        <li className='py-3'><span className='fa fa-check mr-2'></span>{data.list2}</li>
                        <li><span className='fa fa-check mr-2'></span>{data.list3}</li>
                      </ul>
                      <Link className='bg-[#fff] hover:bg-[#000] hover:text-white font-style rounded-full px-6 py-2 my-4' to={data.link}>More Details<span className='fa fa-chevron-right ml-2'></span></Link>
                    </motion.div>
                  ))}
                </div>
                <TitleText 
                  title={(<>What's included?</>)} 
                  textStyles="text-center text-white md:text-[48px] 
                    text-[32px] mt-[90px]"
                />
                <div className='flex flex-wrap justify-center mb-[40px]'>
                  {includedCards.map((cards, index) => (
                    <motion.div 
                      key={cards.id}
                      variants={fadeIn('up', 'tween', index * 0.5, 0.75)}
                      initial='hidden'
                      whileInView='show'
                      className='bg-[#6c717b37] shadow-2xl rounded-xl  w-[290px] h-[260px] mt-[60px] mx-5 flex flex-col justify-center items-center p-[20px]'
                    >
                      <img alt={cards.title} className='w-[120px] h-[120px]' src={cards.img} />
                      <p className='text-white font-style uppercase pt-4'>{cards.title}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
          </div>
 
        <div className={`${styles.xPaddings} relative z-10 mt-8`}>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <TitleText 
              title={(<>Custom Websites vs Template Websites</>)} 
              textStyles="text-center text-white md:text-[48px] 
              text-[32px] my-5"
            />
            <div className='flex flex-wrap justify-center mb-[80px]'>
              <motion.div 
                variants={fadeIn('left', 'spring', 0.5, 0.75)}
                initial='hidden'
                whileInView='show'
                className='border-[.5px] shadow-lg rounded-xl h-full w-full  md:w-[510px] md:h-[340px] mt-[50px] md:mx-5 flex flex-col justify-center items-center p-[10px]'
              >
                <h1 className='text-[36px] font-style text-white font-semibold'>Custom</h1>
                <ul className='list-none md:text-center text-white p-5'>
                  <li className='flex flex-row items-center'><BsPatchCheckFill className='mr-2 text-[#41a1ef]' />Flexibility to choose your own design and functionality</li>
                  <li className='flex flex-row items-center py-3'><BsPatchCheckFill className='mr-2 text-[#41a1ef]' />Higher security built in</li>
                  <li className='flex flex-row items-center'><BsPatchCheckFill className='mr-2 text-[#41a1ef]' />Built in Search Engin Optimization(SEO)</li>
                  <li className='flex flex-row items-center py-3'><BsPatchCheckFill className='mr-2 text-[#41a1ef]' />Your site will be tested for all browser and device types</li>
                </ul>
              </motion.div>
              <motion.div 
                variants={fadeIn('left', 'spring', 0.5, 0.75)}
                initial='hidden'
                whileInView='show'
                className='border-[.5px] shadow-lg rounded-xl h-full w-full  md:w-[510px] md:h-[340px] mt-[50px] md:mx-5 flex flex-col justify-center items-center p-[10px]'
              >
                <h1 className='text-[36px] font-style text-white font-semibold'>Template</h1>
                <ul className='list-none md:text-center text-white p-5'>
                  <li className='flex flex-row items-center'><MdCancel className='mr-2 text-[#e94747]' />Limited options for design & functionality</li>
                  <li className='flex flex-row items-center py-3'><MdCancel className='mr-2 text-[#e94747]' />Slower site speed</li>
                  <li className='flex flex-row items-center'><MdCancel className='mr-2 text-[#e94747]' />Not always built with mobile responsiveness</li>
                  <li className='flex flex-row items-center py-3'><MdCancel className='mr-2 text-[#e94747]' />Organic SEO not built in</li>
                </ul>
              </motion.div>
            </div>
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
            <TitleText 
              title={(<>Web Development Process..</>)} 
              textStyles=" md:text-[56px] 
              text-[36px] text-center mb-[40px] md:mb-[80px]"
            />
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'tween', 0.25, 1)}
            className='flex-[0.75] bg-[#eceff478] rounded-xl flex flex-wrap justify-around items-center flex-col md:flex-row mb-[30px] md:mb-[60px]'
            initial='hidden'
            whileInView='show'
          >
            <div className='p-[40px] md:p-[80px] rounded-lg md:w-[440px] w-full'>
            <h1 className='text-white bg-gradient rounded-2xl text-[22px] font-style md:w-2/3 p-5'><span className='flex flex-row items-center'><BsArrowDownRightCircle className='mr-2' />PHASE 1</span></h1>
              <HeaderText 
                title={(<>Discovery</>)}
                textStyles="gradient-text"
              />
              <ul className='list-none mt-[20px]'>
                <li><span className='fa fa-bolt mr-2'></span>Create a roadmap</li>
                <li className='my-2'><span className='fa fa-bolt mr-2'></span>Gather Material</li>
                <li><span className='fa fa-bolt mr-2'></span>Set a deadline</li>
              </ul>
            </div>
            <motion.div
              variants={imgVariants('right')}
              className={`flex ${styles.flexCenter}`}
            >
             <div className='md:w-[460px] my-4'>
                <img 
                  alt='design stage'
                  src={design}
                  className="rounded-lg shadow-2xl border-[6px] border-[#fff] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'tween', 0.25, 1)}
            className='flex-[0.75] flex flex-wrap justify-around flex-col md:flex-row mb-[60px]'
            initial='hidden'
            whileInView='show'
          >
            <motion.div
              variants={imgVariants('left')}
              className={`flex ${styles.flexCenter} md:order-1 order-3`}
            >
              <div className='md:w-[490px] my-4'>
                <img 
                  alt='wireframing'
                  src={wireframing}
                  className="rounded-lg shadow-xl border-[6px] border-[#fff] object-contain"
                />
              </div>
            </motion.div>
            <div className='p-[40px] md:p-[80px] rounded-lg md:w-[440px] md:order-3 order-1'>
            <h1 className='text-white bg-gradient rounded-2xl text-[22px] font-style md:w-2/3 p-5'><span className='flex flex-row items-center'><BsArrowDownLeftCircle className='mr-2' />PHASE 2</span></h1>
              <HeaderText 
                title={(<>Wireframing</>)}
                textStyles="gradient-text"
              />
              <ul className='list-none mt-[20px]'>
              <li><span className='fa fa-bolt mr-2'></span>Identify the goal of the website</li>
                <li className='my-2'><span className='fa fa-bolt mr-2'></span>Understand the userflow</li>
                <li><span className='fa fa-bolt mr-2'></span>Determine the website wireframe size</li>
                <li className='my-2'><span className='fa fa-bolt mr-2'></span>Provide detailed wireframing concepts</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'tween', 0.25, 1)}
            className='flex-[0.75] bg-[#eceff478] rounded-xl flex flex-wrap justify-around items-center flex-col md:flex-row mb-[30px] md:mb-[60px]'
            initial='hidden'
            whileInView='show'
          >
            <div className='p-[40px] md:p-[80px] rounded-lg md:w-[440px]'>
            <h1 className='text-white bg-gradient rounded-2xl text-[22px] font-style md:w-2/3 p-5'><span className='flex flex-row items-center'><BsArrowDownRightCircle className='mr-2' />PHASE 3</span></h1>
              <HeaderText 
                title={(<>Design</>)}
                textStyles="gradient-text"
              />
              <ul className='list-none mt-[20px]'>
                <li><span className='fa fa-bolt mr-2'></span>Creating a visual style</li>
                <li className='my-2'><span className='fa fa-bolt mr-2'></span>Choosing color palettes</li>
                <li><span className='fa fa-bolt mr-2'></span>Designing the user navigation and site flow</li>
              </ul>
            </div>
            <motion.div
              variants={imgVariants('right')}
              className={`flex ${styles.flexCenter}`}
            >
             <div className='md:w-[460px] my-4'>
                <img 
                  alt='design'
                  src={design}
                  className="rounded-lg shadow-2xl border-[6px] border-[#fff] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'tween', 0.25, 1)}
            className='flex-[0.75] flex flex-wrap justify-around flex-col md:flex-row mb-[30px] md:mb-[60px]'
            initial='hidden'
            whileInView='show'
          >
            <motion.div
              variants={imgVariants('left')}
              className={`flex ${styles.flexCenter} md:order-1 order-3`}
            >
              <div className='md:w-[490px] my-4'>
                <img 
                  alt='develop'
                  src={develop}
                  className="rounded-lg shadow-2xl border-[6px] border-[#fff] object-contain"
                />
              </div>
            </motion.div>
            <div className='p-[40px] md:p-[80px] rounded-lg md:w-[440px] md:order-3 order-1'>
            <h1 className='text-white bg-gradient rounded-2xl text-[22px] font-style md:w-2/3 p-5'><span className='flex flex-row items-center'><BsArrowDownLeftCircle className='mr-2' />PHASE 4</span></h1>
              <HeaderText 
                title={(<>Development</>)}
                textStyles="gradient-text"
              />
              <ul className='list-none mt-[20px]'>
                <li><span className='fa fa-bolt mr-2'></span>Building the framework</li>
                <li className='my-2'><span className='fa fa-bolt mr-2'></span>Implementing the code</li>
                <li><span className='fa fa-bolt mr-2'></span>Administering SEO</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'tween', 0.25, 1)}
            className='flex-[0.75] bg-[#eceff478] rounded-xl flex flex-wrap justify-around items-center flex-col md:flex-row'
            initial='hidden'
            whileInView='show'
          >
            <div className='p-[40px] md:p-[80px] rounded-lg md:w-[440px]'>
            <h1 className='text-white bg-gradient rounded-2xl text-[22px] font-style md:w-2/3 p-5'><span className='flex flex-row items-center'><BsArrowDownRightCircle className='mr-2' />PHASE 5</span></h1>
              <HeaderText 
                title={(<>Testing</>)}
                textStyles="gradient-text"
              />
              <ul className='list-none mt-[20px]'>
                <li><span className='fa fa-bolt mr-2'></span>Testing site performance</li>
                <li className='my-2'><span className='fa fa-bolt mr-2'></span>Reviewing site responsiveness</li>
                <li><span className='fa fa-bolt mr-2'></span>Assessing the application security</li>
              </ul>
            </div>
            <motion.div
              variants={imgVariants('right')}
              className={`flex ${styles.flexCenter}`}
            >
              <div className='md:w-[490px] my-4'>
                <img 
                  alt='testing'
                  src={test}
                  className="rounded-lg shadow-xl border-[6px] border-[#fff] object-contain"
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

export default Services;