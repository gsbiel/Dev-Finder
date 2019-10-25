import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
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
      marginBottom:100
    },  
    textButton: {
      color:'white',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight:'bold',
    },  
    container: {
      flex: 1,
      backgroundColor: '#ad7',
      justifyContent:'space-between'
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