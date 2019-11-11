import React from 'react';

import {
    LikeButton,
    CircleIcon,
    TextBtn
} from './styles';

const likeBtn = (props) => {
    return(
        <LikeButton
            isFavorite={props.isFavorite}
            onPress={() =>
              props.isFavoriteLoading ? '' : props.likeHandler()
            }
        >
            <CircleIcon isFavorite={props.isFavorite}/>

            <TextBtn>
                {props.isFavorite ? 'Gostei!' : 'Gostou?'}
            </TextBtn>
            
        </LikeButton>
    );
}

export default likeBtn;