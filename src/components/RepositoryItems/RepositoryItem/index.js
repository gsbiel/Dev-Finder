import React from 'react';
import {View,Image,Text} from 'react-native'

import styles from './styles';

const repositoryItem = (props) => {
    return(
        <View style={styles.outFlexContainer}>
            <Image style={styles.image}
                source={{uri: 'https://icon-library.net/images/data-repository-icon/data-repository-icon-15.jpg'}}/>
            <View style={styles.inFlexContainer}>
                <Text >{props.name}</Text>
                <Text >{props.stars ? props.stars : '0'} stars</Text>
                <Text>{props.language}</Text>
            </View>
        </View>
    );
}

export default repositoryItem;