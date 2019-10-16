import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';

const styles = StyleSheet.create({
    tableRow:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:1,   
    },
    tableColumn:{
        borderRightWidth:1,
        borderRightColor:'black',
        paddingLeft:2,
        justifyContent:'center'
    },
    labelField:{
        backgroundColor:colors.themeColor
    },
    label:{
        fontSize:16,
        color:'white',
        fontWeight:'bold'
    },
    value:{
        fontSize:14
    }
});

export default styles;