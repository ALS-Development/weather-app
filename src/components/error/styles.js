import Text from 'components/text';
import styled from 'styled-components/native';
import errorIcon from 'assets/error.png';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const ContentCentered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ErrorImage = styled.Image.attrs({
  source: errorIcon,
  resizeMode: 'contain',
})`
  width: ${width * 0.4}px;
  height: ${width * 0.4}px;
`;

export const Message = styled(Text)`
  font-weight: 500;
  font-size: ${({theme}) => theme.typography.big}px;
  padding: 20px;
  text-align: center;
`;

export const Description = styled(Text)`
  font-weight: 500;
  font-size: ${({theme}) => theme.typography.normal}px;
  padding: 10px;
  text-align: center;
`;

export const ButtonText = styled(Text)`
  font-size: ${({theme}) => theme.typography.button}px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: ${({theme}) => theme.shape.borderRadius};
  border-width: 1px;
  border-color: ${({theme}) => theme.palette.text};
`;
