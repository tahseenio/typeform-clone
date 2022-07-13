import { useFormContext } from '../context/FormContextProvider';

const Results = () => {
  const { formData } = useFormContext();
  console.log(formData);

  return <div>Submitted. Check Console log for data</div>;
};

export default Results;
