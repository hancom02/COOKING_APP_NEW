import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import HeaderNavigationComponent from '../../../components/header/HeaderNavigationComponent';
import InfoMemberCard from '../../../components/InfoMemberCard';

const GroupMemberMainView = props => {
  const {navigation, nembers} = props;
  const [isManager, setIsManager] = useState(false);
  const handleManager = () => {
    setIsManager(!isManager);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderNavigationComponent
          navigation={navigation}
          name="Member"
          handleManager={handleManager}
        />
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '0000001A',
            width: '100%',
            opacity: 0.3,
          }}></View>
        <View style={styles.content}>
          {nembers.map(nember => (
            <InfoMemberCard
              key={nember.id}
              nember={nember}
              isManager={isManager}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
});
export default GroupMemberMainView;
