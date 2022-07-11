import UpNav from './ui/UpNav';
import DownNav from './ui/DownNav';
import { useRef } from 'react';

const Navigation = () => {
  const leftButton = useRef<HTMLButtonElement | null>(null);
  const rightButton = useRef<HTMLButtonElement | null>(null);

  return (
    <div className='navigation'>
      <button
        ref={leftButton}
        className='nav__button nav__button--left'
        disabled={false}
      >
        <UpNav
          fill={leftButton.current?.disabled ? 'rgb(146, 146, 146)' : 'white'}
        />
      </button>
      <button
        ref={rightButton}
        className='nav__button nav__button--right'
        disabled={true}
      >
        <DownNav
          fill={rightButton.current?.disabled ? 'rgb(146, 146, 146)' : 'white'}
        />
      </button>
    </div>
  );
};

export default Navigation;
