import styled from 'styled-components';

const Container = styled.View`
    flex-direction: row;
    width: 90%;
    border-width: 1px;
    border-color: ${props => props.theme};
    align-items: center;
    align-self: center;
    background-color: white;
`;

const RepositoryBox = styled.View`
    flex:2;
    padding: 10px;
    justify-content: space-around;
    border-left-width: 1px;
    border-left-color: ${props => props.theme};
`;

const RepoImage = styled.Image`
    flex:1;
    resize-mode: contain;
    width: 100%;
    height: 100%;
`;

const LanguageBox = styled.View`
    padding-left: 10px
`;

export {Container, RepositoryBox, LanguageBox, RepoImage}