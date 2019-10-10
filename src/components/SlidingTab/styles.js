import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
const colorTheme = colors.themeColor;

const styles = StyleSheet.create({
    slidingTabContainer:{
        flexDirection: "row",
        width:'90%',
        height:'10%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 20,
        marginBottom: 20
    },
    tabStyle:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colorTheme,
        borderRadius: 15
    }
});

export default styles;