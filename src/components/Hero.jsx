import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import CheckboxForm from './Checkbox';

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleSelectedIndex = () => {
    setSelectedIndex();
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} 
        absolute inset-0 top-[120px] 
        max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center itKTems-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Shubs</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I Develop 3D Visuals, user
              <br className="sm:block hidden" /> interfaces and web applications
              and blockchain.
            </p>
          </div>
          <div className="flex justify-center items-center p-10">
            <form>
              <div className="flex gap-5">
                <label>Computer</label>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-10 h-10"
                />
              </div>
            </form>
            <CheckboxForm handleSelectedIndex />
          </div>
        </div>
      </div>
      <ComputersCanvas modelSelector={selectedIndex} />
      <div
        className="absolute xs:bottom-10 
      bottom-32 w-full flex justify-center items-center "
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary 
          flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 27, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
