import React, { useState } from 'react';

/** Mui Components */

/** Components */
import LetterDisplay from './LetterDisplay/LetterDisplay';
import NumberDisplay from './NumberDisplay/NumberDisplay';

/** styles */

/** redux */

/** helpers */

interface KeypadProps {
  setPasscode: React.Dispatch<React.SetStateAction<string>>;
}

export default function Keyboard({ setPasscode }: KeypadProps) {
  const [isNumberDisplay, setIsNumberDisplay] = useState(false);

  const handleKeyboardValues = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPasscode((previousValue) => {
      return previousValue + event.currentTarget.value;
    });
  };

  if (isNumberDisplay) {
    return (
      <NumberDisplay
        setIsNumberDisplay={setIsNumberDisplay}
        setPasscode={setPasscode}
        handleKeyboardValues={handleKeyboardValues}
      />
    );
  }

  return (
    <LetterDisplay
      handleKeyboardValues={handleKeyboardValues}
      setIsNumberDisplay={setIsNumberDisplay}
      setPasscode={setPasscode}
    />
  );
}
