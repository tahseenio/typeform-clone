import { useFormContext } from '../context/FormContextProvider';
import resultImg from '../assets/result.png';

const Results = ({ resultPara }: { resultPara: string }) => {
  const { formData } = useFormContext();
  console.log(formData);

  return (
    <>
      <img
        className='result__img'
        alt='handstanding people final page'
        src={resultImg}
      />
      <p className='result__para'>{resultPara}</p>
    </>
  );
};

export default Results;
