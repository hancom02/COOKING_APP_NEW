import DetailGroupContainer from './DetailGroupContainer';

const DetailGroup = props => {
  const {navigation} = props;

  const propContainer = {
    navigation,
  };

  return <DetailGroupContainer {...propContainer} />;
};

export default DetailGroup;
