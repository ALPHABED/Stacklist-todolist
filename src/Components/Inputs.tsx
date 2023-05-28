import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import globals from '../Styles/globals';

type Props = {
  onPress: () => void;
  onChange: (text: string) => void;
  onSubmitEditing: () => void;
  task: string;
};

import {IconButton} from 'react-native-paper';
const InputComponent = ({
  onChange,
  onPress,
  onSubmitEditing,
  task,
}: Props): JSX.Element => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        placeholder="Masukkan Tugas Baru"
        value={task}
        onChangeText={onChange}
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
      />
      <IconButton
        icon={'send'}
        iconColor={globals.sky500}
        onPress={onPress}
        style={{marginTop: globals.m20}}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  containerInput: {
    alignItems: 'stretch',
    flexDirection: 'row',
    backgroundColor: globals.sky300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 120,
  },

  input: {
    // width: globals.width - 60,
    flex: 1,
    backgroundColor: globals.sky200,
    height: 75,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: globals.sky300,
    borderWidth: 2,
  },
});
