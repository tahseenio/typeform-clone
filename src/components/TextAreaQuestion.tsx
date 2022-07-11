import { useCallback, useEffect, useRef } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useFormContext } from '../context/FormContextProvider';
import Arrow from './ui/Arrow';
import Tick from './ui/Tick';
import { motion } from 'framer-motion';
import { Qvariants } from '../variants';

interface Props {
  number: number;
  question: string;
  buttonText?: string;
  helperText?: string;
}

const TextAreaQuestion = ({
  number,
  question,
  buttonText = 'OK',
  helperText = 'Enter ↵',
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const { pages, tab, setTab } = useFormContext();

  // const keyHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  //   console.log('PRESSING');
  //   if (e.shiftKey && e.key === 'Enter') {
  //     console.log(textAreaRef.current!.clientHeight + 50);
  //     textAreaRef.current!.style.height = `${
  //       textAreaRef.current!.clientHeight + 48
  //     }px`;
  //   }
  // };

  const keyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (tab === pages.length - 2) {
        if (e.ctrlKey === true) {
          buttonRef.current?.click();
        }
      }
      if (e.key === 'Enter' && tab !== pages.length - 2) {
        buttonRef.current?.click();
      }
    },
    [tab, pages.length]
  );

  useEffect(() => {
    document.addEventListener('keypress', (e) => keyHandler(e));

    return () => document.removeEventListener('keypress', (e) => keyHandler(e));
  }, [keyHandler]);

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
      <ReactTextareaAutosize
        ref={textAreaRef}
        className='textarea'
        placeholder='Type your answer here...'
      />
      {/* <p className='textarea--helper'>
        <strong>Enter ↵</strong> to make a line break
      </p> */}
      <div className='button--wrapper'>
        <button
          ref={buttonRef}
          className='button'
          onClick={() => setTab((state) => state + 1)}
        >
          {buttonText} <Tick />
        </button>
        <p className='button__helper'>
          press <strong>{helperText}</strong>
        </p>
      </div>
    </motion.main>
  );
};

export default TextAreaQuestion;
