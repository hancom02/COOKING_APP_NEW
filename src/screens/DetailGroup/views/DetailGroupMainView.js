import {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderNavigationComponent from '../../../components/header/HeaderNavigationComponent';
import {ResultComponent} from '../../../components/ResultComponent';

const DetailGroupMainView = props => {
  const {navigation, cookBookDatas} = props;
  const [joinedGroup, setJoniedGroup] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderNavigationComponent
          navigation={navigation}
          joinedGroup={joinedGroup}
        />
        <View>
          <Image
            source={{
              uri: 'https://www.englishclub.com/images/vocabulary/food/cooking/cooking.jpg',
            }}
            height={174}
          />
          <Text style={styles.nameGroup}>Group for diet food</Text>
          <TouchableOpacity
            style={[
              styles.buttonJoinGroup,
              joinedGroup ? styles.buttonLeaveGroup : '',
            ]}
            onPress={() => setJoniedGroup(!joinedGroup)}>
            <Text
              style={[
                styles.textButonJoin,
                joinedGroup ? styles.textButtonLeave : '',
              ]}>
              {joinedGroup ? 'Leave Group' : 'Join Group'}
            </Text>
          </TouchableOpacity>

          <View style={styles.line}></View>
        </View>
        <View style={styles.containerResult}>
          {cookBookDatas.map(cookBook => (
            <ResultComponent
              navigation={navigation}
              key={cookBook.id}
              cookBook={cookBook}
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
    backgroundColor: '#FFFFFF',
  },

  nameGroup: {
    marginVertical: 12,
    marginHorizontal: 16,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Baloo2-SemiBold',
  },

  buttonJoinGroup: {
    paddingVertical: 12,
    paddingHorizontal: 120,
    backgroundColor: '#FFB731',
    marginHorizontal: 16,
    borderRadius: 3,
  },

  buttonLeaveGroup: {
    backgroundColor: '#DADADA',
  },

  textButonJoin: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Baloo2-SemiBold',
    textAlign: 'center',
    width: '100%',
  },

  textButtonLeave: {
    color: '#000000',
  },

  line: {
    height: 4,
    backgroundColor: '#CCCCCC',
    marginTop: 20,
  },

  containerResult: {
    paddingTop: 20,
  },
});
export default DetailGroupMainView;
