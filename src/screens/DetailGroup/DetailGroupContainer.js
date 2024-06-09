// bao bọc HomeMainView
// truyền data, prop,... cho HomeMainView

import DetailGroupMainView from './views/DetailGroupMainView';

const DetailGroupContainer = props => {
  const {navigation, dispatch} = props;

  const groupData = {
    groupName: "Group for diet food",
    groupImg: "",
    groupManager: "",
    groupMembers: [],
    groupRecipes: recipeDatas
  }

  const recipeDatas = [
    {
      id: 1,
      image:
        'https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg',
      name: 'noodle',
      profile: {
        name: 'Ngọc Hân',
        image:
          'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/10/14054104/image-100-y-tuong-avatar-cute-doc-dao-an-tuong-nhat-cho-ban-166567566414594.jpg',
        email: '2002hoshi@gmail.com',
        tracking: {
          heart: 123,
          star: 11,
          review: 2000,
        },
      },
    },
    {
      id: 2,
      image:
        'https://image.sggp.org.vn/w1000/Uploaded/2024/ageslysofyr/2023_06_28/hinh-1-9691.jpg.webp',
      name: '3 món ăn Việt Nam nằm trong top những món ăn ngon nhất thế giới',
      profile: {
        name: 'ABC XYZ',
        image:
          'https://st.quantrimang.com/photos/image/2021/05/21/AVT-Doi16-4.jpg',
        email: '2002hoshi@gmail.com',
        tracking: {
          heart: 123,
          star: 11,
          review: 2000,
        },
      },
    },
    {
      id: 3,
      image:
        'https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg',
      name: 'Delicious Spicy Coconut Milk Chicken Recipe',
      profile: {
        name: 'Nguyễn Thị A',
        image:
          'https://i.pinimg.com/736x/63/f8/fb/63f8fbab7ef0b960dff3913c0c27a9e1.jpg',
        email: '2002hoshi@gmail.com',
        tracking: {
          heart: 222,
          star: 411,
          review: 20100,
        },
      },
    },
  ];
  const detailGroupProps = {
    navigation,
    groupData,
    recipeDatas,
  };

  return <DetailGroupMainView {...detailGroupProps} />;
};

export default DetailGroupContainer;
