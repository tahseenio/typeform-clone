import UpNav from './ui/UpNav';
import DownNav from './ui/DownNav';
import { useRef } from 'react';
import { useFormContext } from '../context/FormContextProvider';

const Navigation = () => {
  const leftButton = useRef<HTMLButtonElement | null>(null);
  const rightButton = useRef<HTMLButtonElement | null>(null);

  const { tab, setTab } = useFormContext();

  return (
    <>
      {tab !== 0 && tab !== 11 ? (
        <div className='navigation'>
          <button
            ref={leftButton}
            className='nav__button nav__button--left'
            disabled={tab !== 1 ? false : true}
            onClick={() => setTab((state) => state - 1)}
          >
            <UpNav
              fill={
                leftButton.current?.disabled ? 'rgb(146, 146, 146)' : 'white'
              }
            />
          </button>
          <button
            ref={rightButton}
            className='nav__button nav__button--right'
            disabled={tab === 10 ? true : false}
            onClick={() => setTab((state) => state + 1)}
          >
            <DownNav
              fill={
                rightButton.current?.disabled ? 'rgb(146, 146, 146)' : 'white'
              }
            />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
