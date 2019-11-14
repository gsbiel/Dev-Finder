import styled from 'styled-components';
import normalize from 'react-native-normalize';

const LikeButton = styled.TouchableOpacity`
    margin-top: ${normalize(10)}px;
    align-self: center;
    flex-direction: row;
    border-color: ${props => props.isFavorite ? 'green' : '#ccc'};
    border-width: ${normalize(3)}px;
    padding: ${normalize(5)}px;
    border-radius: ${normalize(5)}px;
`;

const CircleIcon = styled.View`
    width: ${normalize(25)}px;
    height: ${normalize(25)}px;
    background-color: ${props => props.isFavorite ? 'green' : '#ccc'};
    border-radius: ${normalize(10)}px;
`;

const TextBtn = styled.Text`
    margin-left: ${normalize(5)}px;
    font-weight: bold;
    font-size: ${normalize(20)}px;
`;

export {LikeButton, CircleIcon, TextBtn}