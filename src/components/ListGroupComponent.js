import {StyleSheet, Text, View} from 'react-native';
import CreateGroupIcon from '../assets/icons/create.svg';
import GroupItemComponent from './GroupItemCompnent';
const ListGroupComponent = props => {
  const {navigation, selectedAction, cookGroups} = props;
  const titles = {
    discover: 'Suggest',
    created: 'Groups you created',
    joined: 'Joined Groups',
  };

  return (
    <View style={styles.contianer}>
      <View style={[styles.containerTitle, styles.createGroup]}>
        <Text style={styles.textTitle}>{titles[selectedAction]}</Text>
        {selectedAction === 'created' && (
          <CreateGroupIcon width={40} height={40} />
        )}
      </View>

      {cookGroups &&
        cookGroups.map(group => (
          <GroupItemComponent
            navigation={navigation}
            key={group.id}
            group={group}
            selectedAction={selectedAction}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    paddingHorizontal: 16,
    width: '100%',
  },
  containerTitle: {
    paddingVertical: 16,
  },

  textTitle: {
    fontSize: 24,
    fontFamily: 'Baloo2-Bold',
  },

  createGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ListGroupComponent;
