import { createContext, useContext } from 'react';

export interface ContextProps {
  color: () => void;
  something: () => void;
}

export interface ProviderProps {
  children: JSX.Element;
}

const FormContext = createContext<ContextProps | {}>({});

const FormContextProvider = ({ children }: ProviderProps) => {
  const color = () => {
    console.log('COLOR');
  };

  const something = () => {
    console.log('something');
  };

  return (
    <FormContext.Provider
      value={{
        color,
        something,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;

export const useFormContext = () => useContext(FormContext) as ContextProps;
