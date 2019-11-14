import styled from 'styled-components';
import normalize from 'react-native-normalize';

const AppHeader = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-top: 100;
`;

const AppLogo = styled.Image`
    height: ${normalize(103)}px;
    width: ${normalize(103)}px;
`;

const HeaderText = styled.Text`
    font-size: ${normalize(33)}px;
    margin-left: ${normalize(13)}px;
    color: #57b4fd;
    font-style: italic;
    font-weight: bold;
`;

const Text = styled.Text`
    margin-top: ${normalize(53)}px;
    margin-left: 20%;
    color: white;
    font-weight: bold;
`;

const StartBtn = styled.TouchableOpacity`
    align-self: center;
    margin-top: ${normalize(103)}px;
    align-items: center;
    justify-content: center;
    height: ${normalize(53,'height')}px;
    width: ${normalize(203)}px;
    border-radius: ${normalize(8)}px;
    border-color: #fff;
    border-width: ${normalize(3)}px;
`;

const TextBtn = styled.Text`
    color: white;
    font-size: ${normalize(20)}px;
    font-style: italic;
`;

const container = {
      flex: 1,
      backgroundColor: '#ad7',
}

export {AppHeader, AppLogo, HeaderText, Text, StartBtn, TextBtn, container}
