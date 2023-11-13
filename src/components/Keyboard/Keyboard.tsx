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
  inputRef: React.RefObject<HTMLInputElement>;
  // eslint-disable-next-line no-unused-vars
  setValues: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleBackspace: () => void;
}

export default function Keyboard({
  isContinueDisabled,
  setValues,
  handleBackspace,
  inputRef,
}: KeyboardProps) {
  const [isNumberDisplay, setIsNumberDisplay] = useState(false);

  if (isNumberDisplay) {
    return (
      <NumberDisplay
        isContinueDisabled={isContinueDisabled}
        setIsNumberDisplay={setIsNumberDisplay}
        setValues={setValues}
        handleBackspace={handleBackspace}
        inputRef={inputRef}
      />
    );
  }

  return (
    <LetterDisplay
      isContinueDisabled={isContinueDisabled}
      setIsNumberDisplay={setIsNumberDisplay}
      setValues={setValues}
      handleBackspace={handleBackspace}
      inputRef={inputRef}
    />
  );
}
