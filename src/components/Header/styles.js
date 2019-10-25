import {StyleSheet} from 'react-native';

import colors from '.././../styles/colors';

const styles = StyleSheet.create({
    bar:{
        justifyContent:'center',
        width:'100%',
        height:30,
        backgroundColor:colors.themeColor
    },
    barLabel:{
        alignSelf:'center',
        color: 'white',
        fontWeight:'bold'
    }
});

export default styles;
