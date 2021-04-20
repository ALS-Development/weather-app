import styled from 'styled-components/native';
import loading from 'assets/loading.png';
import {Animated, Dimensions} from 'react-native';
import Text from 'components/text';

const {width} = Dimensions.get('window');

export const LoadingImage = styled(Animated.Image).attrs({
  source: loading,
  resizeMode: 'contain',
})`
  width: ${width * 0.4}px;
  height: ${width * 0.4}px;
`;

export const ContentCentered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled(Text)`
  font-weight: 500;
  font-size: ${({theme}) => theme.typography.big}px;
  padding: 20px;
  text-align: center;
`;
