import React from 'react';
import {View,Text} from 'react-native';

import styles from './styles';

const header = (props) => {
    return(
        <View style={styles.bar}>
            <Text style={styles.barLabel}>{props.label}</Text>
        </View>
    );
}

export default header;