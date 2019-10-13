import React from 'react';
import {View,Text} from 'react-native'

import colors from '../../styles/colors';
import styles from './styles';

const devInfoItem = (props) => {
    return(
        <View style={styles.devInfoContainer}>
            <View style={{flex:1,backgroundColor:colors.themeColor, borderRadius:10}}>
                <Text style={{alignSelf:'center', padding:5, color:'white', fontWeight:'bold'}}>{props.label}</Text>
            </View>
            <View style={{flex:2}}>
                <Text style={styles.detailValue}>{props.value}</Text>
            </View> 
        </View>
    );
}

export default devInfoItem;