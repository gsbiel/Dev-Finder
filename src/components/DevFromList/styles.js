import styled from 'styled-components';

const DevContainer =  styled.TouchableOpacity`
    background-color: #fff;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
`;

const DevImage = styled.Image`
    width: 75px;
    height: 75px;
    border-radius: 100px;
`;

const InfoBox = styled.View`
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
`;

const InfoItem = styled.Text`
    font-size: 15px;
    font-weight: 600; 
    margin-bottom: 15px;

`;

export {DevContainer,DevImage,InfoBox,InfoItem};
