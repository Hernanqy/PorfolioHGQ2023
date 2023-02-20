import React from "react";
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inVew] = useInView ({
    threshold: 0.5
  });
  return (
    <section className="section mb-10 lg:mb-1" id="about" ref={ref}>
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          <motion.div
          variants={fadeIn('right, 2')}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className="flex-1 bg-about bg-contain bg-no-repeat  h-[600px]
         bg-center"></motion.div>

          <motion.div className="flex-1"
          variants={fadeIn('left, 0.1')}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          
          >
            <h2 className="h2 text-cyan-300">Sobre mi</h2>
            <h3 className="h3 mb-4">Formacion constante con espiritu creativo.
            </h3>
            <p className="mb-6">Desde muy joven el mundo de la tecnologia me apasiona y siempre estuve vinculado con ella de una manera u otra, por razones economicas tuve que realizar muchos trabajos no vinculados con el area pero ellos me dieron mucha expericia de vida.
            Hace unos años pude lograr capacitarme en la prestigiosa Universidad Tecnica Nacional y sigo haciendolo permanentemente.
            Soy casado, padre de tres niños a los que amo profundamente y paso mi tiempo libre con ellos.
            Me gusta el futbol y las reuniones de amigos.
            
            </p>
                      
              <div className=" flex gap-x-6 lg:gap-10 mb-12 mt-3">
                <div className="text-[48px] font-tertiary text-gradient mb-2">
                  {
                    inVew ?
                    <CountUp start={0} end= {2} duration={1}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">Años de <br /> experiencia

                </div>
                <div className="text-[48px] font-tertiary text-gradient mb-2">
                  {
                    inVew ?
                    <CountUp start={1} end= {3} duration={1}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">Proyectos <br /> subidos a Github

                </div>
                <div className="text-[48px] font-tertiary text-gradient mb-2">
                  {
                    inVew ?
                    <CountUp start={0} end= {2} duration={1}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">Expectativas <br /> infinito

                </div>
              
            
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contacto</button>
              <a href="#" className="text-gradient btn-link"> Mi Porfolio

              </a>
            </div>
            </motion.div> 
            
          
        </div>
      </div>
    </section>
  );
};

export default About;
