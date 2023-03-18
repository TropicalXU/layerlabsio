import React from 'react'
import { footerVariants } from '../utils/motion';
import logo from '../assets/layers.png';
import styles from '../styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} footer py-8 relative shadow-inner`}
    >
      <div className={`${styles.innerWidth} mx-auto flex md:flex-col flex-row gap-8`}>
        <div className="flex items-center justify-between flex-wrap my-[60px]">
          <div className='flex flex-row items-center w-full md:w-1/5 mb-12 md:mb-0'>
          <img alt='layerlabs logo' src={logo} className='w-[60px] h-[60px]' />
            <p className='text-[28px] font-normal font-style font-grey ml-4'>Layerlabs</p>
          </div>
          <div className='flex flex-col mx-2 md:mx-0 my-4 md:my-0'>
            <p className='text-[18px] font-normal font-style font-grey'>Website</p>
            <ul className='list-none font-style text-grey text-[14px] py-2'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/info'>Info</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <p className='text-[18px] font-normal font-style font-grey'>Services</p>
            <ul className='list-none font-style text-grey text-[14px] py-2'>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/standard-package'>Standard Package</Link></li>
              <li><Link to='/advanced-package'>Advanced Package</Link></li>
              <li><Link to='/business-package'>Business + Package</Link></li>
            </ul>
          </div>
          <div className='flex flex-col my-2 md:my-0'>
            <p className='text-[18px] font-normal font-style font-grey'>Work</p>
            <ul className='list-none font-style text-grey text-[14px] py-2'>
              <li><Link to='/websites'>Websites</Link></li>
              <li><Link to='/project-detail/0'>Shirley's Art Studio</Link></li>
              <li><Link to='/project-detail/1'>Krypt</Link></li>
              <li><Link to='/project-detail/2'>Metaversus</Link></li>
            </ul>
          </div>
          <div className='flex flex-col sm:flex-wrap'>
            <p className='text-[18px] font-normal font-style font-grey text-center'>Socials.</p>
            <div className='flex flex-row mt-5'>
              <a className='hover:text-[#0000006e]'  href="https://medium.com/@seanhackettdev"><i className="fa fa-brands fa-medium fa-lg"></i></a>
              <a className='hover:text-[#0000006e]' href="https://www.instagram.com/layerlabs.io"><i className="fa fa-brands fa-instagram fa-lg mx-4"></i></a>
              <a className='hover:text-[#0000006e]' href="https://github.com/TropicalXU"><i className="fa fa-brands fa-github fa-lg"></i></a>
              <a className='hover:text-[#0000006e]' href="https://www.linkedin.com/in/seanhackett2022/"><i className="fa fa-brands fa-linkedin fa-lg mx-4"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.innerWidth} mx-auto flex md:flex-col flex-col gap-8`}>
        <div className='flex justify-center'>
          <p className='font-normal font-style'>info@layerlabs.io</p>
          <div className="md:mb-[50px] h-[2px] bg-black opacity-10" />
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <p className='font-normal font-style text-[14px] py-4 md:py-0'>© 2023 Layerlabs. All rights reserved.</p>
          <Link to='/terms-and-conditions' className='font-normal font-style text-[12px] hover:text-[#00000078]'>Terms And Conditions</Link>
          <Link to='/privacy-policy' className='font-normal font-style text-[12px] hover:text-[#00000078]'>Privacy Policy</Link>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;