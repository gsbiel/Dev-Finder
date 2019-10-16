import React,{Component} from 'react';
import {View,FlatList} from 'react-native';

import RepositoryItem from './RepositoryItem/index';
import EmptyList from '../EmptyList/index';

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
            ref={flatList=>{
                if(flatList){
                    setInterval(()=>{
                        flatList.flashScrollIndicators()
                    },2000);
                }
            }}
            data={this.props.data}
            renderItem={({item})=>{
                return(
                    <RepositoryItem name={item.name} stars={item.stars} language={item.language}/>
                );
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListEmptyComponent ={<EmptyList/>}/>
        );
    }
}

export default RepositoryItems;