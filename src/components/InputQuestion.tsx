import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useFormContext } from '../context/FormContextProvider';
import { Qvariants, reverseVariants } from '../variants';

import Arrow from './ui/Arrow';
import Tick from './ui/Tick';

interface Props {
  number: number;
  question: string;
}

type FormData = {
  Q1: string;
};

interface FormProps {
  Q1: string;
}

const InputQuestion = ({ number, question }: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { formData, setFormData, isReversed, setTab, setIsReversed } =
    useFormContext();

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

  const { register, handleSubmit } = useForm<any>();
  const onSubmit = (data: any) => {
    if (!!formData[number - 1]) {
      const newArr = formData.map((item) => {
        if (item[`Q${number}`]) {
          return {
            ...data,
          };
        } else return item;
      });
      setFormData(newArr);
    } else {
      setFormData([...formData, { ...data }]);
    }
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
        {question}
        <div className='question__number'>
          {number} <Arrow />
        </div>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register(`Q${number}`)}
          defaultValue={formData[number - 1]?.[`Q${number}`] ?? ''}
          className='input'
          placeholder='Type your answer here...'
        />
        <div className='button--wrapper'>
          <button
            type='submit'
            ref={buttonRef}
            className='button'
            onClick={handleClickForward}
          >
            OK <Tick />
          </button>
          <p className='button__helper'>
            press <strong>Enter ↵</strong>
          </p>
        </div>
      </form>
    </motion.main>
  );
};

export default InputQuestion;
