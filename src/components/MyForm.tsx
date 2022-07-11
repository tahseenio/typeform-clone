// TODO
// progress bar up top
// exit and enter animations
// press enter and press enter issues on textarea issue
// error states (like for #6)
// upload state for resume

import React, { useEffect, useRef } from 'react';
import homeImg from '../assets/home.png';
import Arrow from '../components/ui/Arrow';
import Tick from '../components/ui/Tick';
import TextareaAutosize from 'react-textarea-autosize';
import Upload from '../components/ui/Upload';
import UploadArrow from '../components/ui/UploadArrow';
import Navigation from './Navigation';

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
      <Navigation />
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
      {/* <main className='question'>
        <h1 className='title'>
          In a sentence or two, briefly tell us about yourself and why you'd
          like to work for Someone
          <div className='question__number'>
            4 <Arrow />
          </div>
        </h1>
        <TextareaAutosize
          ref={textAreaRef}
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
      </main> */}
      {/* <main className='question'>
        <h1 className='title'>
          Tell us about your experience and why you're suited for this role
          <div className='question__number'>
            5 <Arrow />
          </div>
        </h1>
        <TextareaAutosize
          ref={textAreaRef}
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
      </main> */}
      {/* <main className='question'>
        <h1 className='title'>
          If you have an online portfolio or Github to share, please link to it
          here
          <div className='question__number'>
            6 <Arrow />
          </div>
        </h1>
        <input className='input' placeholder='https://' />
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
          Do you have a Resume / CV you'd like to share? If so, please upload
          <div className='question__number'>
            7 <Arrow />
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
          <button
            ref={buttonRef}
            className='button'
            onClick={() => console.log('CLICKED!!!')}
          >
            OK <Tick />
          </button>
        </div>
      </main> */}
      {/* <main className='question'>
        <h1 className='title'>
          If not already included in your portfolio or CV, please share 3-4
          examples of your recent work (include URLs)
          <div className='question__number'>
            8 <Arrow />
          </div>
        </h1>
        <TextareaAutosize
          ref={textAreaRef}
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
      </main> */}
      <main className='question'>
        <h1 className='title'>
          That's all we need for now. Anything else we should know?
          <div className='question__number'>
            9 <Arrow />
          </div>
        </h1>
        <TextareaAutosize
          ref={textAreaRef}
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
            Submit
          </button>
          <p className='button__helper'>
            press <strong>Ctrl + Enter ↵</strong>
          </p>
        </div>
      </main>
    </div>
  );
};

export default MyForm;
