import styled from 'styled-components';

const Container = styled.View`
    width: 95%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    color: ${props => props.theme}
    font-size: 20px;
`;

export {Container,Text}