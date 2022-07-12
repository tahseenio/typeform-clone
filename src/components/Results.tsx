import { useFormContext } from '../context/FormContextProvider';

const Results = () => {
  const { formData } = useFormContext();

  return <pre>{JSON.stringify(formData, null, 2)}</pre>;
};

export default Results;
