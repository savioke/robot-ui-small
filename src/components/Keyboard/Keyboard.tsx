import React, { useState } from 'react';

/** Mui Components */

/** Components */
import LetterDisplay from './LetterDisplay/LetterDisplay';
import NumberDisplay from './NumberDisplay/NumberDisplay';

/** styles */

/** redux */

/** helpers */

interface KeyboardProps {
  isContinueDisabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  setValues: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleBackspace: () => void;
}

export default function Keyboard({
  isContinueDisabled,
  setValues,
  handleBackspace,
}: KeyboardProps) {
  const [isNumberDisplay, setIsNumberDisplay] = useState(false);

  if (isNumberDisplay) {
    return (
      <NumberDisplay
        isContinueDisabled={isContinueDisabled}
        setIsNumberDisplay={setIsNumberDisplay}
        setValues={setValues}
        handleBackspace={handleBackspace}
      />
    );
  }

  return (
    <LetterDisplay
      isContinueDisabled={isContinueDisabled}
      setIsNumberDisplay={setIsNumberDisplay}
      setValues={setValues}
      handleBackspace={handleBackspace}
    />
  );
}
