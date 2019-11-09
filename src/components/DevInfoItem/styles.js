import styled from 'styled-components';

const InfoBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
`;

const LabelBox = styled.View`
    flex:1;
    background-color: ${props => props.theme}
    border-radius: 10px;
`;

const ValueBox = styled.View`
    flex:2;
`;

const Label = styled.Text`
    align-self: center;
    padding: 5px;
    color: white;
    font-weight: bold;
`;

const Value = styled.Text`
    align-self: flex-start;
    font-weight: bold;
    padding: 5px;
`;

export {InfoBox,LabelBox,ValueBox,Label,Value};
