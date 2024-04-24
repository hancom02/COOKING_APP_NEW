// dùng để xuất ra screen HOME
// gồm các props cần thiết: navigation, route, redux... để chuyển giữa các màn hình với nhau
// gồm các prop để truyền cho HomContainer để truyền xuống màn hình nội bộ

import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import HomeContainer from './HomeContainer';

const Home = (props) => {
    //const dispatch = useDispatch();
    //const isLoading = useSelector(loaderSelector);
    const {navigation} = props;

    const homeContainerProps = {
        //dispatch,
        navigation,
    };

  return <HomeContainer {...homeContainerProps} />;
};

export default Home;