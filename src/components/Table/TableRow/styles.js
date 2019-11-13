import styled from 'styled-components';
import normalize from 'react-native-normalize';

const Row = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: white;
    border-color: black;
    border-width: ${normalize(3)}px;
`;

const ColumnA = styled.View`
    border-right-width: ${normalize(3)}px;
    border-right-color: black;
    padding-left: ${normalize(5)}px;
    justify-content: center;
    background-color: ${props => props.theme};
    width: ${props => props.width};
`;

const ColumnB = styled.View`
    border-right-width: ${normalize(3)}px;
    border-right-color: black;
    padding-left: ${normalize(5)}px;
    justify-content: center;
    width: ${props => props.width};
`;

const Label = styled.Text`
    font-size: ${normalize(18)}px;
    color: white;
    font-weight: bold;
`;

const Value = styled.Text`
    font-size: ${normalize(16)}px;
`;

export {Row, ColumnA, ColumnB, Label, Value}