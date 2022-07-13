import { motion } from 'framer-motion';
import { useFormContext } from '../context/FormContextProvider';

const ProgressBar = () => {
  const { tab } = useFormContext();

  return (
    <>
      {tab !== 0 && tab !== 10 ? (
        <div className='progress-bar'>
          <motion.div
            layoutId='progress'
            className='progress-bar--actual-progress'
            style={{ width: `calc(${(tab / 9) * 100}%)` }}
          ></motion.div>
        </div>
      ) : null}
    </>
  );
};

export default ProgressBar;
