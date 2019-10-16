import {StyleSheet} from 'react-native'

import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container:{
        width:'95%',
        height:150,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    label:{
        color: colors.themeColor,
        fontSize:20
    }
});

export default styles;