import React, { useEffect, useRef } from 'react';
import { useFormContext } from '../context/FormContextProvider';
import Arrow from './ui/Arrow';
import Tick from './ui/Tick';
import Upload from './ui/Upload';
import UploadArrow from './ui/UploadArrow';
import { motion } from 'framer-motion';
import { Qvariants, reverseVariants } from '../variants';

interface Props {
  number: number;
}

const ResumeQuestion = ({ number }: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { setTab, isReversed, setIsReversed } = useFormContext();

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        buttonRef.current?.click();
      }
    };
    document.addEventListener('keypress', (e) => keyHandler(e));

    return () => document.removeEventListener('keypress', (e) => keyHandler(e));
  });

  const handleClickForward = () => {
    setIsReversed(false);
    setTab((state) => state + 1);
  };

  return (
    <motion.main
      className='question'
      variants={isReversed ? reverseVariants : Qvariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h1 className='title'>
        Do you have a Resume / CV you'd like to share? If so, please upload
        <div className='question__number'>
          {number} <Arrow />
        </div>
      </h1>
      <div className='input--file'>
        <input type='file' className='file' />
        <div className='file__info'>
          <div className='upload_image--wrapper'>
            <div className='upload-arrow'>
              <UploadArrow />
            </div>
            <Upload />
          </div>
          <p className='file__info--para1'>
            <strong className='blue'>Choose file</strong> or{' '}
            <strong>drag here</strong>
          </p>
          <p className='file__info--para2'>Size limit: 10MB</p>
        </div>
      </div>
      <div className='button--wrapper'>
        <button ref={buttonRef} className='button' onClick={handleClickForward}>
          OK <Tick />
        </button>
      </div>
    </motion.main>
  );
};

export default ResumeQuestion;
