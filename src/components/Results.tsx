import { useFormContext } from '../context/FormContextProvider';

const Results = ({ resultPara }: { resultPara: string }) => {
  const { formData } = useFormContext();
  console.log(formData);

  return <div>{resultPara}</div>;
};

export default Results;
