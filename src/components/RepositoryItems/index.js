import React,{Component} from 'react';
import {View,FlatList} from 'react-native';

import GitHubApi from '../../services/GitHubApi';
import RepositoryItem from './RepositoryItem/index';
import EmptyList from '../EmptyList/index';
import Loading from '../Loading';

class RepositoryItems extends Component {

    state={
        isLoading:true,
        repositories: null
    }

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
                    <RepositoryItem name={item.name} stars={item.stars} languages={item.languages}/>
                );
            }}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.renderSeparator}
            ListEmptyComponent ={<EmptyList/>}/>
        )
    }
}

export default RepositoryItems;