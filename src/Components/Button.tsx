import globals from '../Styles/globals';

import {Button} from 'react-native-paper';

type Props = {
  onPress: () => void;
  text: string;
};

const ButtonComponent = ({onPress, text}: Props): JSX.Element => {
  return (
    <Button
      style={{
        width: 100,
        position: 'absolute',
        bottom: 50,
        right: 20,
      }}
      icon={'plus'}
      mode={'elevated'}
      buttonColor={globals.secondary}
      textColor={globals.sky700}
      onPress={onPress}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
