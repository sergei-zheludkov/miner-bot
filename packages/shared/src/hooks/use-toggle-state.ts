import { useState, useCallback } from 'react';

const useToggleState = (defaultValue = false) => {
  const [state, setToggleState] = useState(defaultValue);

  const turnOn = useCallback(() => {
    setToggleState(true);
  }, []);

  const turnOff = useCallback(() => {
    setToggleState(false);
  }, []);

  const switchOn = useCallback(() => {
    setToggleState((prev) => !prev);
  }, []);

  return {
    toggle: state,
    turnOn,
    turnOff,
    switchOn,
    setToggleState,
  };
};

export { useToggleState };
