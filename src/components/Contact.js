import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-cyan-600 font-medium mb-2 tracking-wide">
                Contacto
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Trabajemos <br /> Juntos
              </h2>
            </div>
          </motion.div>

          <motion.form
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className="bg-transparent border-b py-3 out-line-none w-full placeholder:text-white focus:border-cyan-500 transition-all"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="bg-transparent border-b py-3 out-line-none w-full placeholder:text-white focus:border-cyan-500 transition-all"
              type="text"
              placeholder="Email"
            />
            <textarea className="bg-transparent border-b py-3 out-line-none w-full placeholder:text-white focus:border-cyan-500 transition-all resize-none mb-12" placeholder="Aqui el mensaje" ></textarea>
            <button className="btn btn-lg">Enviar Mensaje</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
