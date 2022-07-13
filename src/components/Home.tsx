import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import homeImg from '../assets/home.png';
import { useFormContext } from '../context/FormContextProvider';
import { Qvariants } from '../data/variants';

const Home = () => {
  const { setTab } = useFormContext();

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        buttonRef.current?.click();
      }
    };
    document.addEventListener('keypress', (e) => keyHandler(e));

    return () => document.removeEventListener('keypress', (e) => keyHandler(e));
  });

  return (
    <motion.main className='home' variants={Qvariants} exit='exit'>
      <figure className='home__img--wrapper'>
        <img src={homeImg} className='home__img' alt='home page' />
      </figure>
      <h1 className='title'>Front-end Developer at Somewhere</h1>
      <div className='button--wrapper'>
        <button
          ref={buttonRef}
          className='button'
          onClick={() => setTab((state) => state + 1)}
        >
          Apply Now
        </button>
        <p className='button__helper'>
          press <strong>Enter ↵</strong>
        </p>
      </div>
    </motion.main>
  );
};

export default Home;
