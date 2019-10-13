import React,{Component} from 'react';
import {View,FlatList} from 'react-native';

import RepositoryItem from './RepositoryItem/index';

class RepositoryItems extends Component {

    renderSeparator = () => {
        return(
            <View style={{
                width:'96%',
                height:20
            }} />
        );
    }

    render(){
        return(
            <FlatList
            data={this.props.data}
            renderItem={({item})=>{
                return(
                    <RepositoryItem name={item.name} stars={item.stars} language={item.language}/>
                );
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}/>
        );
    }
}

export default RepositoryItems;