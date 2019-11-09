import React from 'react';

import colors from '../../styles/colors';

import {InfoBox,LabelBox,ValueBox,Label,Value} from './styles'

const devInfoItem = (props) => {
    return(
        <InfoBox>
            <LabelBox theme={colors.themeColor}>
                <Label>{props.label}</Label>
            </LabelBox>
            <ValueBox>
                <Value>{props.value}</Value>
            </ValueBox> 
        </InfoBox>
    );
}

export default devInfoItem;