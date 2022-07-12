import UpNav from './ui/UpNav';
import DownNav from './ui/DownNav';
import { useRef } from 'react';
import { useFormContext } from '../context/FormContextProvider';

const Navigation = () => {
  const leftButton = useRef<HTMLButtonElement | null>(null);
  const rightButton = useRef<HTMLButtonElement | null>(null);

  const { setIsReversed, tab, setTab } = useFormContext();

  const handleClickBack = () => {
    setIsReversed(true);
    setTab((state) => state - 1);
  };

  const handleClickForward = () => {
    setIsReversed(false);
    setTab((state) => state + 1);
  };

  return (
    <>
      {tab !== 0 && tab !== 11 ? (
        <div className='navigation'>
          <button
            ref={leftButton}
            className='nav__button nav__button--left'
            disabled={tab !== 1 ? false : true}
            onClick={handleClickBack}
          >
            <UpNav fill={'white'} />
          </button>
          <button
            ref={rightButton}
            className='nav__button nav__button--right'
            disabled={tab === 10 ? true : false}
            onClick={handleClickForward}
          >
            <DownNav fill={'white'} />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
