import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useFormContext } from '../context/FormContextProvider';
import { Qvariants, reverseVariants } from '../data/variants';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSelector } from '../data/schema';

import Arrow from './ui/Arrow';
import Tick from './ui/Tick';

interface Props {
  number: number;
  question: string;
}

const InputQuestion = ({ number, question }: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { formData, setFormData, isReversed, tab, handleClickForward } =
    useFormContext();

  const keyHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      buttonRef.current?.click();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keypress', (e) => keyHandler(e));

    return () => document.removeEventListener('keypress', (e) => keyHandler(e));
  }, [keyHandler]);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Record<string, string>>({
    mode: 'onBlur',
    resolver: yupResolver(schemaSelector(tab)),
  });

  useEffect(() => {
    setFocus(`Q${number}`);
  }, [number, setFocus]);

  const onSubmit = (data: Record<string, string>) => {
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
    handleClickForward();
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
        <p>{errors[`Q${number}`] && errors[`Q${number}`]?.message}</p>
        <div className='button--wrapper'>
          <button type='submit' ref={buttonRef} className='button'>
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
