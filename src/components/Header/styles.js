import styled from 'styled-components';
import normalize from 'react-native-normalize';

const HeaderBar = styled.View`
    justify-content: center;
    width: 100%;
    height: ${normalize(30)}px;
    background-color: ${props => props.theme};
`;

const HeaderLabel = styled.Text`
    align-self: center;
    color: white;
    font-weight: bold;
`;

export {HeaderBar,HeaderLabel}

