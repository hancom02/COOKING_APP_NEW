import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HeaderComponent} from '../../../components/HeaderComponent';
import GroupActionComponent from '../../../components/GroupActionComponent';
import {useState} from 'react';
import ListGroupComponent from '../../../components/ListGroupComponent';
const GroupMainView = props => {
  const {navigation, cookGroups} = props;
  const [selectedAction, setSelectedAction] = useState('discover');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent title="Group" />
        <GroupActionComponent
          selectedAction={selectedAction}
          setSelectedAction={setSelectedAction}
        />
        <ListGroupComponent
          navigation={navigation}
          selectedAction={selectedAction}
          cookGroups={cookGroups}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Baloo2-Regular',
    backgroundColor: '#FFFFFF',
  },
});

export default GroupMainView;
