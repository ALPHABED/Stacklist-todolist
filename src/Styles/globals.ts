import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';

export default {
  //size area
  width: Math.round(Dimensions.get('window').width),
  height: Math.round(Dimensions.get('window').height),

  // margin
  m5: 5,
  m10: 10,
  m15: 15,
  m20: 20,
  m25: 25,
  m30: 30,
  //padding
  p5: 5,
  p10: 10,
  p15: 15,
  p20: 20,
  p25: 25,
  p30: 30,

  //border
  b5: 5,
  b10: 10,
  b15: 15,
  b20: 20,
  b25: 25,
  b30: 30,

  //fontfamily
  poppinsBold: 'Poppins-Bold',
  poppinsMedium: 'Poppins-Medium',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsRegular: 'Poppins-Regular',

  //fontweight
  fw400: 400,
  fw500: 500,
  fw600: 600,
  fw700: 700,
  fw800: 800,

  //fontsize
  fs10: RFValue(10, 680),
  fs12: RFValue(12, 680),
  fs14: RFValue(14, 680),
  fs16: RFValue(16, 680),
  fs18: RFValue(18, 680),
  fs20: RFValue(20, 680),
  fs22: RFValue(22, 680),
  fs24: RFValue(24, 680),

  //colors
  amber600: '#d97706',
  amber500: '#f59e0b',
  amber400: '#fbbf24',
  amber300: '#fcd34d',
  amber200: '#fde68a',

  red600: '#dc2626',
  red500: '#ef4444',
  red400: '#f87171',
  red300: '#fca5a5',
  red200: '#fecaca',

  emerald600: '#059669',
  emerald500: '#10b981',
  emerald400: '#34d399',
  emeradl300: '#6ee7b7',
  emerald200: '#a7f3d0',

  zinc900: '#18181b',
  zinc800: '#27272a',
  zinc700: '#3f3f46',
  zinc600: '#52525b',
  zinc500: '#71717a',
  zinc400: '#a8a29e',

  green400: '#4ade80',

  sky700: '#0369a1',
  sky600: '#0284c7',
  sky500: '#0ea5e9',
  sky400: '#38bdf8',
  sky300: '#7dd3fc',
  sky200: '#bae6fd',

  primary: '#38bdf8',
  secondary: '#bae6fd',
  cta: '#2563eb',
};
