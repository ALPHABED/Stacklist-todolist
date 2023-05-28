import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import globals from '../Styles/globals';

import {Checkbox} from 'react-native-paper';
type Props = {
  title: string;
};

const Task = ({title}: Props): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={[styles.container, checked && styles.backgroundDisable]}>
      <Text style={[styles.titleStyle, checked && styles.lineTrough]}>
        {title}
      </Text>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        color={globals.sky700}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: globals.width - 40,
    backgroundColor: globals.sky200,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderRadius: globals.b10,
  },

  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },

  chips: {
    paddingHorizontal: 5,
    paddingVertical: 2.5,
    backgroundColor: globals.zinc500,
    borderRadius: globals.b10,
  },

  backgroundDisable: {
    backgroundColor: globals.green400,
  },

  titleStyle: {
    fontSize: globals.fs14,
    fontFamily: globals.poppinsRegular,
    color: globals.zinc800,
  },

  lineTrough: {
    textDecorationLine: 'line-through',
  },
});
