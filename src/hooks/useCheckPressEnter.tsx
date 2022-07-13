// TODO MAKE THIS WORK

import { RefObject, useEffect } from 'react';

interface Props {
  reference: RefObject<HTMLButtonElement>;
}

const useCheckPressEnter = ({ reference }: Props) => {
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
