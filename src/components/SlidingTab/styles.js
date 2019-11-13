import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import colors from '../../styles/colors';
const colorTheme = colors.themeColor;

const styles = StyleSheet.create({
    slidingTabContainer:{
        flexDirection: "row",
        width:'90%',
        height:'10%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: normalize(23),
        marginBottom: normalize(23)
    },
    tabStyle:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: normalize(3),
        borderColor: colorTheme,
        borderRadius: normalize(18)
    }
});

export default styles;