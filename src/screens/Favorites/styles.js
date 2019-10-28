import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.favoritesBackg,
    justifyContent:'space-between'
  },
  listContainer: {
    flex: 1,
  },
  btnContainer: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  btn: {
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
  },
});
export default styles;
