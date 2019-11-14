import styled from 'styled-components';
import normalize from 'react-native-normalize';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.background};
  justify-content: space-between;
`;

const FavoriteList = styled.View`
  flex: 1;
`;

const Footer = styled.View`
  padding-bottom: ${normalize(23)}px;
  padding-top: ${normalize(23)}px;
`;

const LoadMoreBtn = styled.TouchableOpacity`
  background-color: #000;
  padding: ${normalize(13)}px;
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
