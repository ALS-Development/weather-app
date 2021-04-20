import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from 'theme';
import Routes from 'routes';
import ConsumerProvider from './src/context/ConsumerProvider';
import LocationProvider from './src/context/LocationProvider';

const WeatherApp = () => {
  LogBox.ignoreLogs(['VirtualizedList']);
  return (
    <ThemeProvider theme={theme}>
      <LocationProvider>
        <ConsumerProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.palette.background}
          />
          <Routes />
        </ConsumerProvider>
      </LocationProvider>
    </ThemeProvider>
  );
};

export default WeatherApp;
