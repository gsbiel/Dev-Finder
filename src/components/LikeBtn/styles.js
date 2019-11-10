import styled from 'styled-components';

const LikeButton = styled.TouchableOpacity`
    margin-top: 10px;
    align-self: center;
    flex-direction: row;
    border-color: ${props => props.isFavorite ? 'green' : '#ccc'};
    border-width: 1px;
    padding: 2px;
    border-radius: 5px;
`;

const CircleIcon = styled.View`
    width: 20px;
    height: 20px;
    background-color: ${props => props.isFavorite ? 'green' : '#ccc'};
    border-radius: 10px;
`;

const TextBtn = styled.Text`
    margin-left: 5px;
    font-weight: bold;
    font-size: 16px;
`;

export {LikeButton, CircleIcon, TextBtn}