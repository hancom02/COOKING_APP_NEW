import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrowIcon from '../../assets/icons/arrow.svg';
import AddBackIcon from '../../assets/icons/add-black.svg';
import GroupIcon from '../../assets/icons/group.svg';
import SearchIcon from '../../assets/icons/search_alt.svg';
const HeaderNavigationComponent = props => {
  const {navigation, name, joinedGroup, handleManager} = props;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowIcon width="24" height="24" />
        </TouchableOpacity>
        {name && <Text style={styles.textHeader}>{name}</Text>}
        {joinedGroup ? (
          <View style={styles.containerAction}>
            <TouchableOpacity
              onPress={handleManager}
              style={{marginHorizontal: 12}}>
              <Text>Chuyển manager</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <AddBackIcon width="32" height="32" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <GroupIcon style={styles.groupIcon} width="32" height="32" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <SearchIcon width="32" height="32" />
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingHorizontal: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },

  textHeader: {
    fontSize: 24,
    fontWeight: '900',
    fontFamily: 'Baloo2-Bold',
  },

  containerAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  groupIcon: {
    marginHorizontal: 12,
  },
});

export default HeaderNavigationComponent;
