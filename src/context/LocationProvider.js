import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';

const ERRORS = {
  PERMISSION_DENIED: 1,
  POSITION_UNAVAILABLE: 2,
  TIMEOUT: 3,
};

const LocationContext = createContext(null);

const LocationProvider = ({children}) => {
  const getCurrentLocation = useCallback(() => {
    setLocation({
      ...location,
      errorLocation: false,
      errorPermission: false,
    });
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setLocation({
          ...location,
          errorLocation: false,
          errorPermission: false,
          lat: latitude,
          long: longitude,
        });
      },
      onError,
      {timeout: 30000, showLocationDialog: true, enableHighAccuracy: false},
    );
  }, []);

  const [location, setLocation] = useState({
    errorLocation: false,
    errorPermission: false,
    lat: '',
    long: '',
  });

  const onError = (error) => {
    if (error.code === ERRORS.PERMISSION_DENIED) {
      setLocation({
        ...location,
        errorLocation: false,
        errorPermission: true,
      });
    } else {
      setLocation({
        ...location,
        errorLocation: true,
        errorPermission: false,
      });
    }
  };

  const requestPermissioniOS = async () => {
    try {
      const response = await Geolocation.requestAuthorization('whenInUse');
      if (response === 'granted') {
        getCurrentLocation();
      } else if (response === 'disable') {
        setLocation({
          ...location,
          errorLocation: true,
          errorPermission: false,
        });
      } else {
        setLocation({
          ...location,
          errorLocation: false,
          errorPermission: true,
        });
      }
    } catch (error) {
      setLocation({
        ...location,
        errorLocation: false,
        errorPermission: true,
      });
    }
  };

  const requestPermissionAndroid = async () => {
    try {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (hasPermission) {
        getCurrentLocation();
        return;
      }
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'O Weather App precisa da sua localização',
          message:
            'Este aplicativo necessita de acesso a sua localização para exibir as informações de clima',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        throw Error();
      }
    } catch (err) {
      setLocation({
        ...location,
        errorLocation: false,
        errorPermission: true,
      });
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermissionAndroid();
    } else {
      requestPermissioniOS();
    }
  }, []);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

const useLocation = () => useContext(LocationContext);

export {LocationProvider as default, useLocation};
