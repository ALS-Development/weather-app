import styled from 'styled-components/native';

export const ContentCentered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScrollView = styled.ScrollView`
  background-color: ${({theme}) => theme.palette.background};
`;

export const DailyContent = styled.View`
  margin: 10px 20px;
`;

export const HourlyContent = styled.View`
  margin: 10px 20px;
`;
