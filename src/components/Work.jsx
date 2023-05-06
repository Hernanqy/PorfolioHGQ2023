import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import "./Work.css"
import Img1 from "../assets/portada_malon.png";
import Img2 from "../assets/portadagracita.png";
import Img3 from "../assets/Tecnologia Educativa.jpg";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-11">
            <div>
              <h2 className="h2 leading-tight text-cyan-600 ">
                Mis ultimos
                <br />
                trabajos
              </h2>
              <p className="max-w-sm mb-16">
                Trabajos realizados con las siguientes tecnologias:
                         
              </p>
              <ol>
                <li>Html</li>
                <li>Css</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
              </ol>
              
              
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all first-line:duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <button className="btn btn-sm"><a href='https://hernanqy-malon.vercel.app/'>Ver el proyecto</a></button>
                
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">Malon Grande</span>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-10">
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all first-line:duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
              <button className="btn btn-sm"><a href='https://gravita-v2.vercel.app/'>Ver el proyecto</a></button>
                
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">Gravita</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all first-line:duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
              <button className="btn btn-sm"><a href='https://educatec.vercel.app/'>Ver el proyecto</a></button>
                <span className="text-gradient">Tecnologia Educativa</span>
                
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">React-Bootstrap</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
