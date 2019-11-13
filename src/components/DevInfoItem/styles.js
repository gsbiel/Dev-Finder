import styled from 'styled-components';
import normalize from 'react-native-normalize';

const InfoBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: ${normalize(5)}px;
`;

const LabelBox = styled.View`
    flex:1;
    background-color: ${props => props.theme}
    border-radius: ${normalize(10)}px;
`;

const ValueBox = styled.View`
    flex:2;
`;

const Label = styled.Text`
    align-self: center;
    padding: ${normalize(5)}px;
    color: white;
    font-weight: bold;
`;

const Value = styled.Text`
    align-self: flex-start;
    font-weight: bold;
    padding: ${normalize(5)}px;
`;

export {InfoBox,LabelBox,ValueBox,Label,Value};
