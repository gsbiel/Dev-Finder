import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    userScreenContainer:{
        width: screenWidth,
        height: screenHeight
    },
    profileLayout:{
        flex:1,
    },
    sectionA:{
        flex:2
    },
    sectionB:{
        flex:3,
        marginBottom:20
    },
    cardA1:{
        //flex:1,
        width:'100%',
        backgroundColor:'skyblue',
        justifyContent:'center',
        alignItems:'flex-end',
        padding:5
    },
    cardA2:{
        flex:2,
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    cardB1:{
        flex:1,
        width:'100%',
        backgroundColor:'skyblue'
    },
    cardB2:{
        flex:6,
        width:'100%',
        backgroundColor:'#ccc'
    },
    imageView:{
        position:'absolute',
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'black',
        borderWidth:5,
        backgroundColor:'white',
        left:'5%',
        top:'3%',
        zIndex:3
    },
    devNameView:{
        position:'absolute',
        zIndex:3,
        top:'10%',
        left:'38%'
    },
    locationLabel:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        borderWidth:1,
        borderColor:'white',
        padding:5
    },
    getLocationBtn:{
        color:'orange',
        backgroundColor:'white',
        fontWeight:'bold',
        fontSize:18,
        borderWidth:1,
        borderColor:'orange',
        padding:5
    }
});

export default styles;