const { default: ProfileMainView } = require("./ProfilemainView");

const ProfileContatiner = (props) => {
    const {
        navigation,
        // userData
    } = props;

    const userData = {
        userName: 'Tran Linh Nhi',
        img: "https://i.pinimg.com/736x/63/f8/fb/63f8fbab7ef0b960dff3913c0c27a9e1.jpg",
        followerAmount: 12,
        followingAmmout: 10,
        recipe: [
            {
                name: 'Fried Sausages',
                image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
                // owner: 'Linh Nhi',
                // image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
                likes_amount: 9,
                reviews_amount: 3,
                profile: {
                    name: 'Tran Linh Nhi',
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
            {
                name: 'Fried Sausages',
                image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
                // owner: 'Linh Nhi',
                // image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
                likes_amount: 9,
                reviews_amount: 3,
                profile: {
                    name: 'Tran Linh Nhi',
                    image:
                    'https://i.pinimg.com/736x/63/f8/fb/63f8fbab7ef0b960dff3913c0c27a9e1.jpg',
                    email: '2002hoshi@gmail.com',
                    tracking: {
                        heart: 222,
                        star: 411,
                        review: 20100,
                    },
                },
            }
        ],
        cookBook: [
            {
                name: "Vietnamese Traditional Cuisine",
                introduce: "Keep it easy with these simple but delicious recipes.",
                image: "https://media.vneconomy.vn/w800/images/upload/2024/01/13/phos-1920x1280.jpg",
                likes: 17,
                recipe_amount: 8
            },
        ]
    }
    const propsMainView = {
        navigation,
        userData
    }
    return <ProfileMainView{...propsMainView}/>
}

export default ProfileContatiner