import {StyleSheet} from 'react-native';


import colors from '../../../styles/colors';
const colorTheme = colors.themeColor; 

const styles = StyleSheet.create(
    {
        outFlexContainer:{
            flexDirection: 'row',
            width:'90%',
            height:100,
            borderWidth:1,
            borderColor:colorTheme,
            alignItems: 'center',
            alignSelf:'center'
        },
        inFlexContainer:{
            flex:2,
            padding: 10,
            justifyContent:'space-around',
            height:"100%",
            borderLeftWidth:1,
            borderLeftColor:colorTheme
        },
        image:{
            flex:1,
            resizeMode:'contain',
            width:'100%',
            height:'100%'
        }
    }
);

export default styles;