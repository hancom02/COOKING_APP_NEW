import SearchGroupContainer from './SearchGroupContainer';

const SearchGroup = props => {
  const {navigation} = props;

  const propContainer = {
    navigation,
  };

  return <SearchGroupContainer {...propContainer} />;
};

export default SearchGroup;
