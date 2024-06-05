import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GroupItemComponent = props => {
  const {selectedAction, group} = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: group.image,
        }}
        height={100}
        width={100}
      />
      <View style={styles.containerTextContent}>
        <Text numberOfLines={2} style={styles.nameGroup}>
          {group.name}
        </Text>
        <Text style={styles.textNumber}>{group.nember} Members</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.textJoinButton}>
            {selectedAction === 'discover' ? 'Join' : 'See detail'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },

  img: {
    borderRadius: 10,
  },

  containerTextContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: 80,
  },

  nameGroup: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Baloo2-SemiBold',
    width: 160,
  },

  textNumber: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Baloo2-Regular',
  },

  joinButton: {
    direction: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8527',
    color: '#FFFFFF',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 83,
  },

  textJoinButton: {
    fontSize: 20,
    fontFamily: 'Baloo2-Regular',
    color: '#FFFFFF',
    height: 'auto',
    textAlign: 'center',
  },
});
export default GroupItemComponent;
