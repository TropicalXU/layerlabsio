import React, { Component } from 'react';
import Navbar from './Navbar';
import styles from '../styles';
import { motion } from 'framer-motion';
import message from '../assets/chat1.png';
import Spline from '@splinetool/react-spline';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Card, CardBody, FormGroup, Label, Form, Input, Button  } from 'reactstrap';

import { cardData } from '../constants';
import { staggerContainer, imgVariants, fadeIn } from '../utils/motion';
import { HeaderText, TitleText } from './CustomTexts';

const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_APP_USER_ID;

class Contact extends Component  {
  constructor(props) {
    super(props);
    emailjs.init('XzO3t2yESPY2_NIVz');
    this.state = {
        user_name: '',
        user_email: '',
    };
  }

  render() {

    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    };

    const RenderContactForm = () => {
      return (
        <>
           <motion.form
              className='flex flex-col border-[.5px] shadow-lg rounded-xl p-[50px] h-[680px] bg-[#fff]'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleOnSubmit}
            >
              <div className='flex justify-center py-[30px]'>
                <img alt='message icon' src={message} className='w-[90px] h-[90px] flex justify-center' />
              </div>
              <label className='font-style py-2' htmlFor="user_email"><span className='fa fa-envelope mr-2'></span>Email<span className='text-[#e94747]'> *</span></label>
              <input 
                className='bg-[#8d99ae22] rounded-lg py-2 px-2' 
                type="text" 
                name="user_email" 
                id='user_email'
                placeholder=' @email.com' 
                innerRef={(input) => this.user_email = input}
                required
              />
              <label className='font-style py-2 mt-4' htmlFor="user_name"><span className='fa fa-user mr-2'></span>Full Name<span className='text-[#e94747]'> *</span></label>
              <input 
                className='bg-[#8d99ae22] rounded-lg py-2 px-2' 
                type="text" 
                name="user_name" 
                id='user_name'
                placeholder=' Full Name' 
                innerRef={(input) => this.user_name = input}
                required
              />
              <label className='font-style py-2 mt-4' htmlFor="user_message"><span className='fa fa-envelope mr-2'></span>Message<span className='text-[#e94747]'> *</span></label>
              <textarea 
                className='bg-[#8d99ae22] rounded-lg py-2 px-2' 
                name="user_message" 
                id='user_message'
                rows={12} 
                placeholder=' Message...' 
                required
              >
              </textarea>
              <button className='btn btn-block bg-black rounded-full hover:bg-[#000000a6] font-style text-white px-4 py-2 mt-4' type="submit">Submit</button>
            </motion.form>
        </>
      )
    }
    
      return (
        <>
          <div className='overflow-hidden'>
            <div className='bg-[#001233]'>
              <Navbar />
              <div className={`${styles.xPaddings} flex md:flex-row flex-col relative z-10 md:mt-[60px]`}>
                <motion.div
                  variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: 'false', amount: 0.25 }}
                  className={`${styles.innerWidth} mx-auto flex flex-col justify-center p-5`}
                >
                  <TitleText 
                    title={(<>Interested in your own personal or business website? </>)}
                    textStyles="text-white text-center text-[42px] md:text-[72px] mx-5"
                  />
                </motion.div>
              </div>
              <div className={`${styles.paddings} flex md:flex-row flex-col relative z-10`}>
                <motion.div
                  variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: 'false', amount: 0.25 }}
                  className={`${styles.innerWidth} mx-auto flex flex-wrap flex-col justify-center items-center`}
                >
                  <p className='text-white gradient-text text-center text-[36px] md:text-[42px] font-style-2 text-normal mt-5'>Contact for a quote.</p>
                  <motion.div
                  variants={imgVariants('left')}
                  className={`flex-1 ${styles.flexCenter}`}
                  >
                    <div className='h-[600px] md:w-[600px]'>
                    <Spline scene="https://prod.spline.design/SocCK6tTMc6lrPrT/scene.splinecode" />
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: 'false', amount: 0.25 }}
                  className={`${styles.innerWidth} mx-auto`}
                >
                  <RenderContactForm />
                </motion.div>
              </div>
            </div>
            <div className={`${styles.paddings} relative z-10 mb-[30px]`}>
              <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: 'false', amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
              >
                <div className='flex flex-wrap justify-center'>
                  {cardData.map((data, index) => (
                    <motion.div 
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
          </div>
        </>
      );
  } 
}

export default Contact;