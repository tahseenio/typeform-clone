import React, { useEffect, useRef } from 'react';
import homeImg from '../assets/home.png';
import Arrow from '../assets/ui/Arrow';
import Tick from '../assets/ui/Tick';
import TextareaAutosize from 'react-textarea-autosize';

const MyForm = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // useEffect(() => {
  //   const keyHandler = (e: KeyboardEvent) => {
  //     if (e.key === 'Enter') {
  //       buttonRef.current!.click();
  //     }
  //   };
  //   document.addEventListener('keypress', (e) => keyHandler(e));

  //   return () => document.removeEventListener('keypress', (e) => keyHandler(e));
  // });

  // TEXTAREA SECTION
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const keyHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log('PRESSING');
    if (e.shiftKey && e.key === 'Enter') {
      console.log(textAreaRef.current!.clientHeight + 50);
      textAreaRef.current!.style.height = `${
        textAreaRef.current!.clientHeight + 48
      }px`;
    }
  };

  return (
    <div className='container'>
      {/* <main className='home'>
        <figure className='home__img--wrapper'>
          <img src={homeImg} className='home__img' />
        </figure>
        <h1 className='title'>Front-end Developer at Somewhere</h1>
        <div className='button--wrapper'>
          <button className='button'>Apply Now</button>
          <p className='button__helper'>
            press <strong>Enter ↵</strong>
          </p>
        </div>
      </main> */}
      {/* <main className='question'>
        <h1 className='title'>
          Let's get started. What's your Full Name? *
          <div className='question__number'>
            1 <Arrow />
          </div>
        </h1>
        <input className='input' placeholder='Type your answer here...' />
        <div className='button--wrapper'>
          <button
            ref={buttonRef}
            className='button'
            onClick={() => console.log('CLICKED!!!')}
          >
            OK <Tick />
          </button>
          <p className='button__helper'>
            press <strong>Enter ↵</strong>
          </p>
        </div>
      </main> */}
      {/* <main className='question'>
        <h1 className='title'>
          Let's get started. What's your Full Name? *
          <div className='question__number'>
            1 <Arrow />
          </div>
        </h1>
        <input className='input' placeholder='Type your answer here...' />
        <div className='button--wrapper'>
          <button
            ref={buttonRef}
            className='button'
            onClick={() => console.log('CLICKED!!!')}
          >
            OK <Tick />
          </button>
          <p className='button__helper'>
            press <strong>Enter ↵</strong>
          </p>
        </div>
      </main> */}
      {/* <main className='question'>
        <h1 className='title'>
          Thanks {'{name}'} What's your email address? *
          <div className='question__number'>
            2 <Arrow />
          </div>
        </h1>
        <input className='input' placeholder='Type your answer here...' />
        <div className='button--wrapper'>
          <button
            ref={buttonRef}
            className='button'
            onClick={() => console.log('CLICKED!!!')}
          >
            OK <Tick />
          </button>
          <p className='button__helper'>
            press <strong>Enter ↵</strong>
          </p>
        </div>
      </main> */}
      {/* <main className='question'>
        <h1 className='title'>
          And your mobile number? *
          <div className='question__number'>
            3 <Arrow />
          </div>
        </h1>
        <input className='input' placeholder='Type your answer here...' />
        <div className='button--wrapper'>
          <button
            ref={buttonRef}
            className='button'
            onClick={() => console.log('CLICKED!!!')}
          >
            OK <Tick />
          </button>
          <p className='button__helper'>
            press <strong>Enter ↵</strong>
          </p>
        </div>
      </main> */}
      <main className='question'>
        <h1 className='title'>
          In a sentence or two, briefly tell us about yourself and why you'd
          like to work for Someone
          <div className='question__number'>
            4 <Arrow />
          </div>
        </h1>
        <TextareaAutosize
          ref={textAreaRef}
          // onKeyDown={(e) => keyHandler(e)}
          className='textarea'
          placeholder='Type your answer here...'
        />
        <p className='textarea--helper'>
          <strong>Enter ↵</strong> to make a line break
        </p>
        <div className='button--wrapper'>
          <button
            ref={buttonRef}
            className='button'
            onClick={() => console.log('CLICKED!!!')}
          >
            OK <Tick />
          </button>
          <p className='button__helper'>
            press <strong>Enter ↵</strong>
          </p>
        </div>
      </main>
    </div>
  );
};

export default MyForm;
