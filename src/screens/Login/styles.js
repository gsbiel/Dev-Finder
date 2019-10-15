import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    botoes: {
      alignItems: 'center',
      justifyContent: 'center',  
      marginTop:10,
      width: width/2,
      height:50,
      backgroundColor: '#57b4fd',
      borderColor:'#fff',
      borderWidth:1,
    },  
    touchable: {
      alignSelf: 'center',
      marginTop:50,
      alignItems: 'center',
      justifyContent: 'center',
      height:50,
      width:250,
      borderRadius:25,
      borderColor:'#fff',
      borderWidth:1,
    },  
    git: {
      flexDirection:'row',  
      alignSelf: 'center',
      marginTop:50,
      alignItems: 'center',
      justifyContent: 'center',
      height:50,
      width:200,
      borderColor:'#fff',
      borderWidth:1,
    },  
    textButton: {
      color:'white',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight:'bold',
    },  
    input: {
      backgroundColor: "transparent",
      marginLeft:10,
    },
    botao: {
      width:100,
      padding:20,
      color:"gray",
      height: 40,
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
    headerMail: {
      height: 30,
      width: 30
    },
    headerPass: {
      height: 25,
      width: 25
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