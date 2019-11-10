import styled from 'styled-components';

const Row = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: white;
    border-color: black;
    border-width: 1px;
`;

const ColumnA = styled.View`
    border-right-width: 1px;
    border-right-color: black;
    padding-left: 2px;
    justify-content: center;
    background-color: ${props => props.theme};
    width: ${props => props.width};
`;

const ColumnB = styled.View`
    border-right-width: 1px;
    border-right-color: black;
    padding-left: 2px;
    justify-content: center;
    width: ${props => props.width};
`;

const Label = styled.Text`
    font-size: 16px;
    color: white;
    font-weight: bold;
`;

const Value = styled.Text`
    font-size: 14px;
`;

export {Row, ColumnA, ColumnB, Label, Value}