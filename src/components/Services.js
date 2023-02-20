import React from 'react';

import { BsFillArrowLeftCircleFill,BsArrowUpRight } from 'react-icons/bs'

import {motion} from 'framer-motion';

import {fadeIn} from '../variants'

const services = [ 
  {
name: 'Desarrollador Front End Full Stack',
discription: 'Realice mis estudios en la Universidad Nacional del Centro (UTN)',
link : 'Saber mas',
},
  {
name: 'React',
discription: 'Realice mi especializacion en CoderHouse',
link : 'Saber mas',
},
  {
name: 'Boostrap-Material UI-Taildwind',
discription: 'Realice esta especializacion en CoderHouse',
link : 'Saber mas',
},
]


const Services = () => {
  return (
  <section className='section' id='services'>
    
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport= {{once:false, amount: 0.3}}
      className='flex-1 lg:bg-services bg-contain bg-no-repeat mix-blend-lighten'>

      </motion.div>
        <motion.div
        variants={fadeIn('left', 0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport= {{once:false, amount: 0.3}}>
        
        <h2 className='h2 text-cyan-400 mb-6'>Lo que me apasiona</h2>
      <h3 className='h3 max-w-[455px] mb-16'>
        Soy un desarrolador web full stack independiente con 2 años de experiencia.
        En mi formacion adquiri conocimientos sobre :
        HTML-CSS3-JAVASCRIPT-MONGO DB-MYSQL-BOOSTRAP-GITHUB-REACT-NODEJS.
      </h3>
      <button className='btn btn-sm'>Mi trabajo</button>
      </motion.div>
      <div className='flex-1'>
<div>
  {services.map((service, index) => {
    const { name,discription, link } = service;
    
    return (
    
    <div className='border-b border-white/20 h-[146px] mb-38px flex' key={index}>
      <div className='max-w-[476px]'>
        <h4 className='text-[20px] tracking-wider font-semibold mb-6'>{name}</h4>
        <p className='font-secondary leading-tight'>{discription}</p>
        </div>
        <div className='flex flex-col flex-1 items-end
        '> 
          <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
            <BsArrowUpRight/>
          </a>
          <a href='#' className='text-gradient text-sm'>{link}</a>
        </div>
      </div>
      );
  })};
</div>
      </div>
    </div>
    </div>
    
    </section>);
};

export default Services;
