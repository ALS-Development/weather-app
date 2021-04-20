import React from 'react';
import AppContainer from 'components/app-container';
import {Linking} from 'react-native';
import {
  Photo,
  ContainerCentered,
  Name,
  Description,
  ButtonIcon,
  ButtonText,
  LinkedInButton,
  Source,
} from './styles';

const Profile = () => {
  const openLinkedIn = () => {
    Linking.openURL('www.linkedin.com/in/alisson-lima-silva');
  };
  return (
    <AppContainer>
      <ContainerCentered>
        <Photo />
        <Name>Alisson Lima</Name>
        <Description>
          Apaixonado por desenvolvimento Mobile e por React Native
        </Description>
        <LinkedInButton onPress={openLinkedIn}>
          <ButtonIcon />
          <ButtonText>Acessar LinkedIn</ButtonText>
        </LinkedInButton>
      </ContainerCentered>
      <Source>Fonte: https://openweathermap.org</Source>
    </AppContainer>
  );
};

export {Profile};
