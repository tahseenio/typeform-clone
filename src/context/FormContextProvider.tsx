import { createContext, useContext, useEffect, useState } from 'react';
export interface ContextProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  isReversed: boolean;
  setIsReversed: React.Dispatch<React.SetStateAction<boolean>>;
  formData: Record<string, string>[];
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>[]>>;
  handleClickForward: () => void;
  globalErrors: any;
  setGlobalErrors: any;
}

export interface ProviderProps {
  children: JSX.Element;
}

const FormContext = createContext<ContextProps | {}>({});

const FormContextProvider = ({ children }: ProviderProps) => {
  const [globalErrors, setGlobalErrors] = useState({});
  const [formData, setFormData] = useState<[]>([]);

  useEffect(() => {
    // console.log('FORM DATA IS: ', formData);
    //
  }, [formData]);

  const [tab, setTab] = useState(0);

  const [isReversed, setIsReversed] = useState(false);

  const handleClickForward = () => {
    setIsReversed(false);
    setTab((state) => state + 1);
  };

  return (
    <FormContext.Provider
      value={{
        tab,
        setTab,
        isReversed,
        setIsReversed,
        formData,
        setFormData,
        handleClickForward,
        globalErrors,
        setGlobalErrors,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;

export const useFormContext = () => useContext(FormContext) as ContextProps;
