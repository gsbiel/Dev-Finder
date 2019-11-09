import {StyleSheet} from 'react-native';
import styled from 'styled-components';

const styles = StyleSheet.create({
    devInfoContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        margin:5
    },
    detailValue:{
        alignSelf:'flex-start',
        fontWeight:'bold',
        padding:5        
    }
});

export default styles;