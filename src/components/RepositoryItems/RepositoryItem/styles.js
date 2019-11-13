import styled from 'styled-components';
import normalize from 'react-native-normalize';

const Container = styled.View`
    flex-direction: row;
    width: 90%;
    border-width: ${normalize(3)}px;
    border-color: ${props => props.theme};
    align-items: center;
    align-self: center;
    background-color: white;
`;

const RepositoryBox = styled.View`
    flex:2;
    padding: ${normalize(13)}px;
    justify-content: space-around;
    border-left-width: ${normalize(3)}px;
    border-left-color: ${props => props.theme};
`;

const RepoImage = styled.Image`
    flex:1;
    resize-mode: contain;
    width: 100%;
    height: 100%;
`;

const LanguageBox = styled.View`
    padding-left: ${normalize(13)}px;
`;

export {Container, RepositoryBox, LanguageBox, RepoImage}