import React, {useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';

import {ContentCentered, LoadingImage, Message} from './styles';

const Loading = () => {
  const [animation] = useState(new Animated.Value(0));
  const callAnimation = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
    ).start();
  };
  useEffect(() => {
    callAnimation();
  }, []);

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ContentCentered>
      <LoadingImage style={{transform: [{rotate}]}} />
      <Message>Carregando...</Message>
    </ContentCentered>
  );
};

export {Loading};
