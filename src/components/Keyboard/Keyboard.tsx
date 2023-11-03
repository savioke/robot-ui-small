import React, { useState } from 'react';

/** Mui Components */

/** Components */
import LetterDisplay from './LetterDisplay/LetterDisplay';
import NumberDisplay from './NumberDisplay/NumberDisplay';

/** styles */

/** redux */

/** helpers */

interface KeyboardProps {
  // eslint-disable-next-line no-unused-vars
  setValues: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleBackspace: () => void;
}

export default function Keyboard({ setValues, handleBackspace }: KeyboardProps) {
  const [isNumberDisplay, setIsNumberDisplay] = useState(false);

  if (isNumberDisplay) {
    return (
      <NumberDisplay
        setIsNumberDisplay={setIsNumberDisplay}
        setValues={setValues}
        handleBackspace={handleBackspace}
      />
    );
  }

  return (
    <LetterDisplay
      setIsNumberDisplay={setIsNumberDisplay}
      setValues={setValues}
      handleBackspace={handleBackspace}
    />
  );
}
