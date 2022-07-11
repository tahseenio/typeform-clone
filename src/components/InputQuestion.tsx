import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useFormContext } from '../context/FormContextProvider';
import { Qvariants } from '../variants';

import Arrow from './ui/Arrow';
import Tick from './ui/Tick';

interface Props {
  number: number;
  question: string;
}

const InputQuestion = ({ number, question }: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { setTab } = useFormContext();

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
    <motion.main
      className='question'
      variants={Qvariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h1 className='title'>
        {question}
        <div className='question__number'>
          {number} <Arrow />
        </div>
      </h1>
      <input className='input' placeholder='Type your answer here...' />
      <div className='button--wrapper'>
        <button
          ref={buttonRef}
          className='button'
          onClick={() => setTab((state) => state + 1)}
        >
          OK <Tick />
        </button>
        <p className='button__helper'>
          press <strong>Enter ↵</strong>
        </p>
      </div>
    </motion.main>
  );
};

export default InputQuestion;