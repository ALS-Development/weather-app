import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Text from 'components/text';

const {width} = Dimensions.get('window');

export const HourlyList = styled.FlatList.attrs({
  horizontal: true,
  contentContainerStyle: {
    height: width * 0.3,
  },
  showsHorizontalScrollIndicator: false,
})``;

export const HourlyTitle = styled(Text)`
  font-size: ${({theme}) => theme.typography.title}px;
`;

export const HourlyItem = styled.View`
  height: ${width * 0.3}px;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  padding: 10px 0px;
`;

export const Hour = styled(Text)`
  font-size: ${({theme}) => theme.typography.normal}px;
`;

export const HourlyTemperature = styled(Text)`
  font-size: ${({theme}) => theme.typography.big}px;
`;
