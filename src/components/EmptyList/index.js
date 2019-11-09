import React from 'react';

import colors from '../../styles/colors';
import {Container, Text} from './styles';

const emptyList = (props) => {
    return(
        <Container>
            <Text theme={colors.themeColor} >Nenhum...</Text>
        </Container>
    );
}

export default emptyList;