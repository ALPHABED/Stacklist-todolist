import React from 'react';
import {View, StatusBar} from 'react-native';
import globals from '../Styles/globals';

const Stats = () => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={globals.cta} />
    </View>
  );
};

export default Stats;
