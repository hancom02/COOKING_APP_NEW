import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import SearchIcon from '../../../assets/icons/search.svg';
import {ResultComponent} from '../../../components/ResultComponent';
import {useState} from 'react';
import {FilterItemComponent} from '../../../components/FilterItemComponent';
import {HeaderComponent} from '../../../components/HeaderComponent';
const SearchMainView = props => {
  const {navigation, filters, recipeDatas} = props;
  const [selectedOptionButton, setSelectedOptionButton] = useState('search');
  const [selectedIdFilter, setSelectedIdFilter] = useState(1);

  const handleClickFilter = id => {
    setSelectedIdFilter(id);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.conent}>
        <HeaderComponent title="Search" />
        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={() => setSelectedOptionButton('search')}
            style={[
              styles.button,
              selectedOptionButton === 'search' ? styles.selectedButton : '',
            ]}>
            <Text
              style={[
                styles.textButton,
                selectedOptionButton === 'search'
                  ? styles.selectedTextButton
                  : '',
              ]}>
              Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedOptionButton('filter')}
            style={[
              styles.button,
              selectedOptionButton === 'filter' ? styles.selectedButton : '',
            ]}>
            <Text
              style={[
                styles.textButton,
                selectedOptionButton === 'filter'
                  ? styles.selectedTextButton
                  : '',
              ]}>
              Filters
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 16}}>
          {selectedOptionButton == 'search' ? (
            <View style={styles.containeInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Recipe Title, Ingredient "
              />
              <SearchIcon width={22.5} height={22.47} />
            </View>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.containerFilter}>
              {filters.map(filter => (
                <FilterItemComponent
                  key={filter.id}
                  filter={filter}
                  isSelected={filter.id === selectedIdFilter}
                  onClick={() => handleClickFilter(filter.id)}
                />
              ))}
            </ScrollView>
          )}

          <View>
            <View style={styles.containerTitle}>
              <Text style={styles.textTitle}>RESULT</Text>
            </View>
            {recipeDatas.map(recipe => (
              <ResultComponent key={recipe.id} recipe={recipe} />
            ))}
          </View>
        </View>
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
  conent: {},
  containerHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: 360,
    height: 60,
    width: '100%',
  },

  textHeader: {
    fontSize: 22,
    fontFamily: 'Baloo2-Bold',
    marginVertical: 15,
  },

  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0000001A',
    paddingHorizontal: 16,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: 160,
    borderRadius: 100,
    marginVertical: 8,
  },

  textButton: {
    fontWeight: '400',
    fontSize: 18,
    fontFamily: 'Baloo2-Bold',
  },

  selectedButton: {
    backgroundColor: '#FFB731',
  },
  selectedTextButton: {
    color: '#FFFFFF',
  },

  containeInput: {
    backgroundColor: '#F2F3F4',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },

  containerFilter: {
    paddingVertical: 12,
  },
  textInput: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Baloo2-Bold',
    flex: 1,
    paddingRight: 10,
  },

  containerTitle: {
    paddingVertical: 16,
  },

  textTitle: {
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'Baloo2-Bold',
  },
});

export default SearchMainView;
