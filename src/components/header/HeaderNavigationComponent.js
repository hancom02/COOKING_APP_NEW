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
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignSelf: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <ArrowIcon
            style={{marginHorizontal: -6, borderWidth: 1}}
            width="24"
            height="24"
          />
        </TouchableOpacity>
        {name && <Text style={styles.textHeader}>{name}</Text>}

        {joinedGroup ? (
          <View style={styles.containerAction}>
            {handleManager && (
              <TouchableOpacity onPress={handleManager}>
                <Text>manager</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => {}}>
              <AddBackIcon width="32" height="32" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('GroupMember');
              }}>
              <GroupIcon style={styles.groupIcon} width="32" height="32" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SearchGroup');
              }}>
              <SearchIcon width="32" height="32" />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            {handleManager && (
              <TouchableOpacity onPress={handleManager}>
                <Text>manager</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    marginHorizontal: 16,
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
