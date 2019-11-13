import styled from 'styled-components';
import normalize from 'react-native-normalize';

const DevContainer =  styled.TouchableOpacity`
    background-color: #fff;
    padding: ${normalize(10)}px;
    margin: ${normalize(10)}px;
    border-radius: ${normalize(5)}px;
    flex-direction: row;
    align-items: center;
`;

const DevImage = styled.Image`
    width: ${normalize(75)};;
    height: ${normalize(75)};;
    border-radius: ${normalize(100)};;
`;

const InfoBox = styled.View`
    flex-direction: column;
    padding-left: ${normalize(10)};;
    padding-right: ${normalize(10)};;
`;

const InfoItem = styled.Text`
    font-size: ${normalize(15)};;
    font-weight: 600; 
    margin-bottom: ${normalize(15)};;
`;

export {DevContainer,DevImage,InfoBox,InfoItem};
