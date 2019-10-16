import React from 'react';
import {View,Text} from 'react-native';

import styles from './styles';

const tableRow = (props) => {
    return(
        <View style={styles.tableRow}>
            <View style={{...styles.tableColumn, ...styles.labelField, width: props.baseColumnLabelWidth*10}}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <View style={{...styles.tableColumn, width:props.baseColumnValueWidth*7+18}}>
                <Text style={styles.value}>{props.value}</Text>
            </View>
        </View>
    );
}

export default tableRow;


//18 -> x10
//14 -> x7
