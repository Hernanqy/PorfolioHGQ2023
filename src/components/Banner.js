import React from 'react';
import Image from '../assets/yodes.jpg.jpg'



import {FaGithub, FaYoutube, FaDrribble, FaFacebook, FaInstagram, FaDribbble}from 'react-icons/fa'

import {TypeAnimation} from 'react-type-animation'

import { motion} from 'framer-motion';

import {fadeIn }from '../variants';

const Banner = () => {
  return (
  <section className="min-h-[85vh] lg:min-h[78vh] flex items-center " id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center  lg:gap-x-15'>
        <div className='flex-1 text-center font-secondary lg:mx-0'>
          <motion.h1 
          variants={fadeIn('up',0.4)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7}}
          className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'> Hernan <span>Quiroga</span></motion.h1>
          <motion.div variants={fadeIn('up',0.3)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>Soy </span>
            <TypeAnimation sequence={[
              'Desarrollador',
              2000,
              'Diseñador Web',
              2000,
              'Full Stack',
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
               />
              
          </motion.div>
           <motion.p 
           variants={fadeIn('up',0.5)} 
           initial='hidden' 
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7}}
           className='mb-8 max-w-lg mx-auto lg:mx-center'>
              Lorem ipsum dolor sit amet, consectetur
               </motion.p>
               <motion.div
               variants={fadeIn('up',0.6)} 
               initial='hidden' 
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7}}
               className='flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-center' >
                <button className='btn btn-lg'>Contacto</button>
                <a href='#' className='text-gradient btn-link'>Mi Porfolio</a>
               </motion.div>
               <motion.div 
               variants={fadeIn('up',0.7)} 
               initial='hidden' 
               whileInView={'show'}
               viewport={{ once: false, amount: 0.7}}
               className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-center mb-12'>
                <a href='#'>
                  <FaGithub />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='#'>
                  <FaDribbble />
                </a>
               </motion.div>
        </div>
        <motion.div 
        variants={fadeIn('down',0.5)} 
        initial='hidden' 
        whileInView={'show'}
        
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} className='rounded-full lg:w-[34rem]' alt=''/>
        </motion.div>
      </div>

    </div>
  </section>
  );
}
export default Banner;
