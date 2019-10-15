import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    touchable: {
      alignSelf: 'center',
      marginTop:100,
      alignItems: 'center',
      justifyContent: 'center',
      height:50,
      width:200,
      borderRadius:5,
      borderColor:'#fff',
      borderWidth:1,
    },  
    textButton: {
      color:'white',
      fontSize: 20,
      fontStyle: 'italic',
    },
    text: {
      marginTop:50, 
      marginLeft:'20%', 
      color:'white', 
      fontWeight:'bold'
    },
    container: {
      flex: 1,
      backgroundColor: '#ad7',
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingTop: 100
    },
    headerImage: {
      height: 100,
      width: 100
    },
    headerText: {
      fontSize:30,
      marginLeft:10,
      color: '#57b4fd',
      fontStyle: 'italic',
      fontWeight: 'bold'
    }, 
  });

  export default styles;