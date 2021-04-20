import React from 'react';
import PropTypes from 'prop-types';

import {
  ContentCentered,
  Button,
  ButtonText,
  Message,
  ErrorImage,
  Description,
} from './styles';

const Error = ({message, onPress, buttonText, showButton, description}) => (
  <ContentCentered>
    <ErrorImage />
    <Message>{message}</Message>
    {!!description && <Description>{description}</Description>}
    {showButton && (
      <Button onPress={onPress}>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    )}
  </ContentCentered>
);

Error.propTypes = {
  message: PropTypes.string,
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  showButton: PropTypes.bool,
  description: PropTypes.string,
};

Error.defaultProps = {
  message: 'Ocorreu um erro, tente novamente',
  onPress: () => {},
  buttonText: 'Tentar Novamente',
  showButton: false,
  description: '',
};

export {Error};
