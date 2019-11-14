import styled from 'styled-components';
import normalize from 'react-native-normalize';

const container = {
  flex: 1,
  backgroundColor: '#f5f5f5'
}

const ListContainer = styled.View`
    flex: 1;
`;

const LoadingBox = styled.View`
    top: 50%;
`;

const PreviousPage = styled.TouchableOpacity`
    background-color: #ccc;
    padding: ${normalize(13)}px;
    justify-content: center;
`;

const NextPage = styled.TouchableOpacity`
    background-color: #ccc;
    padding: ${normalize(13)}px;
    justify-content: center;
`;

const TextBtn = styled.Text`
    color: black;
    font-weight: bold;
    align-self: center;
    font-size: ${normalize(16)}px;
`;

const Footer = styled.View`
    padding-bottom: ${normalize(13)}px;
`;

export {container, ListContainer, LoadingBox, PreviousPage, NextPage, TextBtn, Footer}