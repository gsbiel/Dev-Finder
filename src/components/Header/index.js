import React from 'react';

import colors from '.././../styles/colors';
import {HeaderBar,HeaderLabel} from './styles';

const header = (props) => {
    return(
        <HeaderBar theme={colors.themeColor}>
            <HeaderLabel>{props.label}</HeaderLabel>
        </HeaderBar>
    );
}

export default header;