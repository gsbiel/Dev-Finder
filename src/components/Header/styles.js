import styled from 'styled-components';

const HeaderBar = styled.View`
    justify-content: center;
    width: 100%;
    height: 30px;
    background-color: ${props => props.theme};
`;

const HeaderLabel = styled.Text`
    align-self: center;
    color: white;
    font-weight: bold;
`;

export {HeaderBar,HeaderLabel}

