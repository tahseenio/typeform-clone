import { useCallback, useEffect, useRef } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useFormContext } from '../context/FormContextProvider';
import Arrow from './ui/Arrow';
import Tick from './ui/Tick';
import { motion } from 'framer-motion';
import { Qvariants, reverseVariants } from '../data/variants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSelector } from '../data/schema';
import ErrorImg from '../assets/ErrorImg';

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

  const { formData, setFormData, tab, isReversed, handleClickForward } =
    useFormContext();

  const keyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && e.shiftKey === false) {
        e.preventDefault();
      }
      if (e.shiftKey === true) return;
      if (tab === 9) {
        if (e.ctrlKey === true) {
          buttonRef.current?.click();
        }
      }
      if (e.key === 'Enter' && tab !== 9) {
        buttonRef.current?.click();
      }
    },
    [tab]
  );

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
        <ReactTextareaAutosize
          {...register(`Q${number}`)}
          defaultValue={formData[number - 1]?.[`Q${number}`] ?? ''}
          className='textarea'
          placeholder='Type your answer here...'
        />
        <p className='textarea--helper'>
          <strong>Shift + Enter ↵</strong> to make a line break
        </p>
        {errors[`Q${number}`] && (
          <p className='error-para'>
            <ErrorImg />
            {errors[`Q${number}`]?.message}
          </p>
        )}
        <div className='button--wrapper'>
          <button type='submit' ref={buttonRef} className='button'>
            {buttonText} <Tick />
          </button>
          <p className='button__helper'>
            press <strong>{helperText}</strong>
          </p>
        </div>
      </form>
    </motion.main>
  );
};

export default TextAreaQuestion;
