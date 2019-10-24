import React from 'react';
import {FlatList,Button} from 'react-native';

import DevFromList from '../DevFromList/index';
import EmptyList from '../EmptyList/index';

const devList = (props) => {
    return(
        <FlatList
            ref={flatList=>{
                if(flatList){
                    setInterval(()=>{
                        flatList.flashScrollIndicators()
                    },2000);
                }
            }}
            data={props.data}
            renderItem={({item})=>{
                return <DevFromList name={item.name} username={item.username} followers={item.followers} avatar_url={item.image}/>
            }}
            keyExtractor = {item => item.username}
            ListEmptyComponent = {<EmptyList></EmptyList>}
            ListFooterComponent={<Button title="Ver todos" color='skyblue' onPress={() => props.navigate('Favorites')}/>}
        />
    )
}

export default devList;
