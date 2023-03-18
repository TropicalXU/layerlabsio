import React, { useState } from 'react';
import logo from '../assets/layers.png';
import close from '../assets/close2.svg';
import menu from '../assets/menu.svg';
import { motion } from 'framer-motion';

import { navVariants } from '../utils/motion';
import { NavLink, Link } from 'react-router-dom';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import {RiCodeFill} from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const LightNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className='w-full flex py-6 items-center navbar px-2'
      >
        <Link className='flex flex-row items-center' to='/'><img src={logo} alt='layerlabs' className='w-[60px] h-[60px] ml-6' />
          <span className='font-normal text-[24px] font-style ml-4'>Layerlabs</span>
        </Link>
        <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
            <li className='text-[16px] font-normal font-style cursor-pointer mx-12'><NavLink to='/'>Home</NavLink></li>
            <li className='text-[16px] font-normal font-style cursor-pointer mx-12'><NavLink to='/services'>Services</NavLink></li>
            <li className='text-[16px] font-normal font-style cursor-pointer mx-12'><NavLink to='/websites'><span className='flex flex-row items-center'>Websites <RiCodeFill className='ml-2'/></span></NavLink></li>
        </ul>
        <ul className='list-none sm:flex hidden justify-end items-center mr-4'>
            <li className='text-[16px] font-normal font-style cursor-pointer mx-4'><NavLink to='/info'><span className='flex flex-row items-center'>Info <BsFillInfoCircleFill className='ml-2' /></span></NavLink></li>
            <li className='text-[16px] font-normal font-style text-white cursor-pointer mx-4'><NavLink to='/contact'><span className='flex items-center bg-slate-500 hover:bg-slate-600 rounded-full px-4 py-2'>Request a quote <TbMessageCircle2Filled className='ml-2' /></span></NavLink></li>
        </ul>
        <div className='sm:hidden flex flex-1
          justify-end items-center'>
          <img 
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </motion.nav>
      <motion.div 
        variants={navVariants}
        initial="hidden"
        whileInView={`${toggle ? 'show' : 'hidden'}`}
        className={`${toggle ? 'flex' : 'hidden'} p-6 
        top-20 right-0 mx-4 min-w-[140px] justify-center sm:hidden`}
      >
        <ul className='list-none text-center font-style cursor-pointer'>
          <li className='font-normal py-2 '>Home</li>
          <li className='font-normal py-2'><Link to='/services'>Services</Link></li>
          <li className='font-normal py-2'><Link to='/websites'><span className='flex flex-row justify-center items-center'>Websites <RiCodeFill className='ml-2' /></span></Link></li>
          <li className='font-normal py-2'><NavLink to='/info'><span className='flex flex-row justify-center items-center'>Info <BsFillInfoCircleFill className='ml-2' /></span></NavLink></li>
          <li className='font-normal text-white py-2'><NavLink to='/contact'><span className='flex items-center bg-slate-500 hover:bg-slate-600 rounded-full px-4 py-2'>Request a quote <TbMessageCircle2Filled className='ml-2' /></span></NavLink></li>
        </ul>
      </motion.div>
   </>
  );
}

export default LightNav;