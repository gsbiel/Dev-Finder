import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.background};
  justify-content: space-between;
`;

const FavoriteList = styled.View`
  flex: 1;
`;

const Footer = styled.View`
  padding-bottom: 20px;
  padding-top: 20px;
`;

const LoadMoreBtn = styled.TouchableOpacity`
  background-color: #000;
  padding: 10px;
  justify-content: center;
`;

const TextBtn = styled.Text`
  color: #fff;
`;

export {
  Container,
  FavoriteList,
  Footer,
  LoadMoreBtn,
  TextBtn
}
