import React from 'react';

import {
        Row,
        ColumnA,
        ColumnB, 
        Label, 
        Value
} from './styles';

import colors from '../../../styles/colors';

const tableRow = (props) => {
    return(
        <Row>
            <ColumnA theme={colors.themeColor} width={props.baseColumnLabelWidth*10}>
                <Label>{props.label}</Label>
            </ColumnA>
            <ColumnB width={props.baseColumnValueWidth*7+18}>
                <Value>{props.value}</Value>
            </ColumnB>
        </Row>
    );
}

export default tableRow;


//18 -> x10
//14 -> x7
