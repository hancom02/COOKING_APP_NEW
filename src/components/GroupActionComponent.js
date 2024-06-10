import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ButtonComponent from './ButtonComponent';

const GroupActionComponent = props => {
  const {selectedAction, setSelectedAction} = props;
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ButtonComponent
          name="Discover"
          isSelected={selectedAction === 'discover'}
          onClick={() => setSelectedAction('discover')}
        />
        <ButtonComponent
          name="Created"
          isSelected={selectedAction === 'created'}
          onClick={() => setSelectedAction('created')}
        />
        <ButtonComponent
          name="Joined"
          isSelected={selectedAction === 'joined'}
          onClick={() => setSelectedAction('joined')}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    marginTop: 12

  },
});
export default GroupActionComponent;
