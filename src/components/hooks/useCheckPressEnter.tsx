// TODO MAKE THIS WORK

import { useEffect } from 'react';

const useCheckPressEnter = ({ reference }: any) => {
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        reference.current!.click();
      }
    };
    document.addEventListener('keypress', (e) => keyHandler(e));

    return () => document.removeEventListener('keypress', (e) => keyHandler(e));
  });
};

export default useCheckPressEnter;
