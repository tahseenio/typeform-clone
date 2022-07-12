// TODO
// progress bar up top
// exit and enter animations
// press enter and press enter issues on textarea issue
// error states (like for #6)
// upload state for resume
// FInd out why nav buttons are grey when they are going disabled to usable
// make animations go in reverse when going back
// allow enter in textare to create line break

import Navigation from './Navigation';
import { useFormContext } from '../context/FormContextProvider';
import { AnimatePresence } from 'framer-motion';

const MyForm = () => {
  const { tab, pages } = useFormContext();

  return (
    <div className='container'>
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
