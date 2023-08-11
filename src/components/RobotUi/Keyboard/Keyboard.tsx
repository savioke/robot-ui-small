import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'typeDux';

/** Mui Components */
import { Box, Slide } from '@mui/material';

/** Components */
const KeyboardReact = dynamic(import('react-simple-keyboard'), { ssr: false });

/** styles */
import 'react-simple-keyboard/build/css/index.css';
import { styles } from './Keyboard.styles';

/** redux */
import { getInputName, getDisplayScreen } from 'state/ui/ui.selectors';
import { setDeliverFormValues, setDisplayScreen } from 'state/ui/ui.slice';
import { DisplayScreenOptions } from 'appConstants';

/** helpers */

interface KeyboardProps {
  formRef: React.RefObject<HTMLFormElement>;
  keyboardRef: React.RefObject<any>;
}

export default function Keyboard({ formRef, keyboardRef }: KeyboardProps) {
  const dispatch = useDispatch();
  const inputName = useSelector(getInputName);
  const displayScreen = useSelector(getDisplayScreen);
  const displayKeyboard =
    displayScreen === DisplayScreenOptions.DeliverForm ||
    displayScreen === DisplayScreenOptions.GoToForm;
  const [layoutName, setLayoutName] = React.useState('default');

  return (
    <Slide
      mountOnEnter
      unmountOnExit
      in={displayKeyboard}
      direction='up'
    >
      <Box sx={styles.keyboard}>
        <KeyboardReact
          mergeDisplay
          useButtonTag
          inputName={inputName}
          buttonTheme={[
            {
              class: 'hg-blue',
              buttons: '{enter}',
            },
            {
              class: 'hg-red',
              buttons: '{escape}',
            },
          ]}
          // @ts-ignore - TODO: Current says read-only. Should revisit to fix Typescript
          keyboardRef={(ref) => (keyboardRef.current = ref)}
          onChangeAll={(inputs) => {
            dispatch(
              setDeliverFormValues({
                ...inputs,
              }),
            );
          }}
          onKeyPress={(button) => {
            if (button === '{enter}' && formRef.current) {
              formRef.current.requestSubmit();
            } else if (button === '{shift}') {
              setLayoutName(layoutName === 'default' ? 'shift' : 'default');
            } else if (button === '{escape}') {
              dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard));
            }
          }}
          theme='hg-theme-default hg-theme-ios'
          layoutName={layoutName}
          layout={{
            default: [
              '{escape} 1 2 3 4 5 6 7 8 9 0 {backspace}',
              'q w e r t y u i o p',
              'a s d f g h j k l {enter}',
              '{shift} z x c v b n m',
              '{space}',
            ],
            shift: [
              '{escape} 1 2 3 4 5 6 7 8 9 0 {backspace}',
              'Q W E R T Y U I O P',
              'A S D F G H J K L {enter}',
              '{shift} Z X C V B N M',
              '{space}',
            ],
          }}
          display={{
            '{enter}': 'Enter',
            '{backspace}': '⌫',
            '{escape}': 'Cancel',
          }}
        />
      </Box>
    </Slide>
  );
}
