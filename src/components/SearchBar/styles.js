import styled from 'styled-components';
import normalize from 'react-native-normalize';

const Container = styled.View`
    z-index: 99;
    background-color: #597fab;
    width: 100%;
    overflow: hidden;
    padding-bottom: ${normalize(13)}px;
    padding-top: ${normalize(20)}px;
`;

const SearchBox = styled.View`
    background-color: #fff;
    border-radius: ${normalize(6)}px;
    height: ${normalize(48)}px;
    margin-top: ${normalize(6)}px;
    margin-left: ${normalize(13)}px;
    margin-right: ${normalize(13)}px;
`;

const TextInput = styled.TextInput`
    margin-top: ${normalize(16)}px;
    margin-left: ${normalize(46)}px;
    font-size: ${normalize(18)}px;
    color: #999;
`;

const searchIcon = {
    position: 'absolute',
    left: normalize(16),
    top: normalize(15)
  };

export {Container,SearchBox, searchIcon, TextInput}
