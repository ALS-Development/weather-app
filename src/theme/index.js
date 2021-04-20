import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default {
  palette: {
    primary: '#2f9cff',
    primaryDark: '#152c39',
    primaryLight: '#5c7ba7',
    secondary: '#ae3de4',
    secondaryDark: '#28254f',
    background: '#151f27',
    text: '#dadad3',
    white: '#FFF',
    black: '#000',
    tab: {
      inactiveIcon: '#dadad3',
      activeIcon: '#ae3de4',
      color: '#151f27',
      iconSize: 25,
    },
  },
  shape: {
    borderRadius: '8px',
  },
  spacing: (value) => responsiveFontSize(value),
  typography: {
    small: responsiveFontSize(1.7),
    normal: responsiveFontSize(2.5),
    button: responsiveFontSize(2),
    icon: responsiveFontSize(3),
    iconSmall: responsiveFontSize(2),
    big: responsiveFontSize(2.8),
    title: responsiveFontSize(4),
    subtitle: responsiveFontSize(2),
    fontSize: (value) => responsiveFontSize(value),
  },
};
