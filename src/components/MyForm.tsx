//  I realised how complex it can get as the project gets bigger and bigger. Something you may not have noticed beforehand, that is now causing an issue, has caused me to redesign my whole logic e.g my array update logic for certain questions as some users may skip a few questions and complete the later ones.

// TODO
// upload state for resume
// dont allow submission until all values have been filled
//  -- add submit validation, if required parts are not filled -> throw error

// disallow moving to next screen if question is required
// BUG If form is not done in order then there will be issues tracking question answers and its default values.
// //Possible fix: ADD A GLOBAL ERRORS AND IF THE ERROR EXISTS THEN STOP OTHERWISE CONTINUE BUT ITS NOT WORKING
//  // I want it so that if the next button is clicked just click the actual button to start the process again

import Navigation from './Navigation';
import { useFormContext } from '../context/FormContextProvider';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import InputQuestion from './InputQuestion';
import TextAreaQuestion from './TextAreaQuestion';
import ResumeQuestion from './ResumeQuestion';
import Results from './Results';
import ProgressBar from './ProgressBar';

const MyForm = () => {
  const { tab, formData } = useFormContext();
  const pages = [
    { number: 0, page: <Home key={0} /> },
    {
      number: 1,
      page: (
        <InputQuestion
          number={1}
          question={`Let's get started. What's your Full Name? *`}
          key={1}
        />
      ),
    },
    {
      number: 2,
      page: (
        <InputQuestion
          number={2}
          question={`Thanks ${
            formData[0]?.Q1?.split(' ')[0] ?? ''
          }. What's your email address?`}
          key={2}
        />
      ),
    },
    {
      number: 3,
      page: (
        <InputQuestion
          number={3}
          question={`And your mobile number? *`}
          key={3}
        />
      ),
    },
    {
      number: 4,
      page: (
        <TextAreaQuestion
          number={4}
          question={`In a sentence or two, briefly tell us about yourself and why you'd like
        to work for Someone`}
          key={4}
        />
      ),
    },
    {
      number: 5,
      page: (
        <TextAreaQuestion
          number={5}
          question={`Tell us about your experience and why you're suited for this role`}
          key={5}
        />
      ),
    },
    {
      number: 6,
      page: (
        <TextAreaQuestion
          number={6}
          question={`If you have an online portfolio or Github to share, please link to it
          here`}
          key={6}
        />
      ),
    },
    {
      number: 7,
      page: <ResumeQuestion number={7} key={7} />,
    },
    {
      number: 8,
      page: (
        <TextAreaQuestion
          number={8}
          question={`If not already included in your portfolio or CV, please share 3-4
          examples of your recent work (include URLs)`}
          key={8}
        />
      ),
    },
    {
      number: 9,
      page: (
        <TextAreaQuestion
          number={9}
          question={`That's all we need for now. Anything else we should know?`}
          buttonText={'Submit'}
          helperText={'Ctrl + Enter ↵'}
          key={9}
        />
      ),
    },
    {
      number: 10,
      page: (
        <Results
          resultPara={`Thanks ${
            formData[0]?.Q1?.split(' ')[0] ?? ''
          }. we'll be in touch.`}
          key={10}
        />
      ),
    },
  ];

  return (
    <div className='container'>
      <ProgressBar />
      <Navigation />
      <AnimatePresence exitBeforeEnter={true}>
        {pages.map((item) => {
          if (tab === Number(item.number)) {
            return item.page;
          } else return null;
        })}
      </AnimatePresence>
    </div>
  );
};

export default MyForm;
