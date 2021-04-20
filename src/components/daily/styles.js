import styled from 'styled-components/native';
import Text from 'components/text';

export const DailyList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const DailyItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;

export const DailyDay = styled(Text)`
  flex: 1;
  font-size: ${({theme}) => theme.typography.normal}px;
`;

export const DailyMax = styled(Text)`
  margin: 0px 15px;
  font-size: ${({theme}) => theme.typography.normal}px;
`;

export const DailyMin = styled(DailyMax)`
  color: ${(props) => props.theme.palette.primary};
  font-size: ${({theme}) => theme.typography.fontSize(2.3)}px;
`;
