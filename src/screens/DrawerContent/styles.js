import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    drawerContainer:{
        flex:1
    },
    headerContainer:{
        height:'40%'
    },
    bodyContainer:{
        height:'60%'
    },
    appHeader:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    appLogo:{
        width:80,
        height:80
    },
    headerText: {
        fontSize:30,
        marginLeft:10,
        color: '#57b4fd',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    btn:{
        height:'20%',
        backgroundColor:'white',
        marginBottom:10,
        justifyContent:'center',
        paddingLeft:10
    },
    textBtn:{
        fontWeight:'bold',
        fontSize:22
    }
});

export default styles;