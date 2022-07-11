import { createContext, useContext, useState } from 'react';
import Home from '../components/Home';
import InputQuestion from '../components/InputQuestion';
import Results from '../components/Results';
import ResumeQuestion from '../components/ResumeQuestion';
import TextAreaQuestion from '../components/TextAreaQuestion';

export interface ContextProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  pages: pageProps[];
}

interface pageProps {
  number: string;
  page: JSX.Element;
}

export interface ProviderProps {
  children: JSX.Element;
}

const FormContext = createContext<ContextProps | {}>({});

const FormContextProvider = ({ children }: ProviderProps) => {
  const [tab, setTab] = useState(0);

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
          question={`Thanks {'{name}'}. What's your email address?`}
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
        <InputQuestion
          number={4}
          question={`And your mobile number? *`}
          key={4}
        />
      ),
    },
    {
      number: 5,
      page: (
        <TextAreaQuestion
          number={5}
          question={`In a sentence or two, briefly tell us about yourself and why you'd like
        to work for Someone`}
          key={5}
        />
      ),
    },
    {
      number: 6,
      page: (
        <TextAreaQuestion
          number={6}
          question={`Tell us about your experience and why you're suited for this role`}
          key={6}
        />
      ),
    },
    {
      number: 7,
      page: (
        <TextAreaQuestion
          number={7}
          question={`If you have an online portfolio or Github to share, please link to it
          here`}
          key={7}
        />
      ),
    },
    {
      number: 8,
      page: <ResumeQuestion number={8} key={8} />,
    },
    {
      number: 9,
      page: (
        <TextAreaQuestion
          number={9}
          question={`If not already included in your portfolio or CV, please share 3-4
          examples of your recent work (include URLs)`}
          key={9}
        />
      ),
    },
    {
      number: 10,
      page: (
        <TextAreaQuestion
          number={10}
          question={`That's all we need for now. Anything else we should know?`}
          buttonText={'Submit'}
          helperText={'Ctrl + Enter ↵'}
          key={10}
        />
      ),
    },
    {
      number: 11,
      page: <Results key={11} />,
    },
  ];

  return (
    <FormContext.Provider
      value={{
        tab,
        setTab,
        pages,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;

export const useFormContext = () => useContext(FormContext) as ContextProps;
