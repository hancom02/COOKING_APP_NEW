import {StyleSheet, View, Text} from 'react-native';
import HomeIcon from '../../../assets/icons/home.svg';
const SearchMainView = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Baloo2-Bold'}}>Search</Text>
      <HomeIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchMainView;
