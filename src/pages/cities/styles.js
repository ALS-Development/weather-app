import styled from 'styled-components/native';

export const CitiesList = styled.FlatList.attrs({
  columnWrapperStyle: {justifyContent: 'space-between'},
})`
  margin: 10px;
`;
export const Separator = styled.View`
  height: 15px;
`;
