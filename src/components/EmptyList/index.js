import React from 'react';
import {View,Text} from 'react-native';

import styles from './styles';

const emptyList = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Nenhum...</Text>
        </View>
    )
}

export default emptyList;