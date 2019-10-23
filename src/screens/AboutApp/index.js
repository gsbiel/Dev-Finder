import React from 'react';

import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export default class Inicio extends React.PureComponent {

  render() {

    const {navigate} = this.props.navigation;
                        
    return (
      <LinearGradient colors={['rgba(0,0,0,0.8)', '#57b4fd','rgba(0,0,0,0.8)']} style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/images/alvo.png")}
          />
          
          <Text style={styles.headerText}>Dev Finder</Text>

        </View>           

          <Text style={styles.text}>
            Aqui no Dev Finder, você localiza{'\n\n'}
            os desenvolvedore de software mais{'\n\n'}
            próximos de sua região e de acordo{'\n\n'}
            com o seu perfil de busca. 
            
          </Text>

          <TouchableOpacity 
            onPress={() => navigate("Login")}
          >
              <View style={styles.touchable}>
                <Text style={styles.textButton}>Iniciar</Text>
              </View>              
          </TouchableOpacity>  
                                    
      </LinearGradient>
    );
  }
}

