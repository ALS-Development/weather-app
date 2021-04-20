import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Text from 'components/text';
import ImageUtils from 'utils/ImageUtils';

const {height} = Dimensions.get('window');

export const CurrentContainer = styled.ImageBackground.attrs((props) => ({
  source: ImageUtils[props.icon],
}))`
  min-height: ${height * 0.35}px;
  justify-content: center;
  padding: ${({theme}) => theme.spacing(2)}px;
`;

export const City = styled(Text)`
  font-size: ${({theme}) => theme.typography.big}px;
`;

export const WeatherDescription = styled(Text)`
  font-size: ${({theme}) => theme.typography.normal}px;
  text-transform: capitalize;
`;

export const WeatherDescriptionContainer = styled.View`
  background-color: ${(props) => props.theme.palette.secondaryDark};
  padding: 10px;
  align-self: flex-start;
  border-radius: ${(props) => props.theme.shape.borderRadius};
`;

export const CurrentTemperature = styled(Text)`
  font-size: ${({theme}) => theme.typography.fontSize(8)}px;
  font-weight: 500;
  margin: 10px 0px;
`;
