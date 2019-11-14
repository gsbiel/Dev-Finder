import styled from 'styled-components';
import normalize from 'react-native-normalize';

const Container = styled.View`
    width: 95%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    color: ${props => props.theme}
    font-size: ${normalize(20)}px;
`;

export {Container,Text}