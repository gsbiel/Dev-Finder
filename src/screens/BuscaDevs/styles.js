import styled from 'styled-components';

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
    padding: 10px;
    justify-content: center;
`;

const NextPage = styled.TouchableOpacity`
    background-color: #ccc;
    padding: 10px;
    justify-content: center;
`;

const TextBtn = styled.Text`
    color: black;
    font-weight: bold;
    align-self: center;
`;

const Footer = styled.View`
    padding-bottom: 10px;
`;

export {container, ListContainer, LoadingBox, PreviousPage, NextPage, TextBtn, Footer}