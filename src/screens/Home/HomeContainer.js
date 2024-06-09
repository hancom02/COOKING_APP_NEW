// bao bọc HomeMainView
// truyền data, prop,... cho HomeMainView

import { View, Text } from "react-native"
import HomeMainView from "./views/HomeMainView"
import { groups } from "../../utils/mockData"

const HomeContainer = (props) => {
    const {navigation, dispatch} = props

    const user = {
        name: "Ngọc Hân",
        image: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/10/14054104/image-100-y-tuong-avatar-cute-doc-dao-an-tuong-nhat-cho-ban-166567566414594.jpg",
        email: "2002hoshi@gmail.com",
    }

    const image = [
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg"

    ]

    const propsCookbook = {
        name: "Vietnamese Traditional Cuisine",
        introduce: "Keep it easy with these simple but delicious recipes.",
        image: "https://media.vneconomy.vn/w800/images/upload/2024/01/13/phos-1920x1280.jpg",
        likes: 17,
        recipe_amount: 8
    };

    const RECIPEDATA = [
        {
            name: 'Fried Sausages',
            image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
            // owner: 'Linh Nhi',
            // image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
            likes_amount: 9,
            reviews_amount: 3,
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
        {
            name: 'Fried Sausages',
            image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
            // owner: 'Linh Nhi',
            // image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
            likes_amount: 9,
            reviews_amount: 3,
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
        {
            name: 'Fried Sausages',
            image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
            // owner: 'Linh Nhi',
            // image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
            likes_amount: 9,
            reviews_amount: 3,
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
    ] 

    const propsRecipe = {
        recipe_name: 'Xúc xích chiên',
        image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
        owner: 'Linh Nhi',
        image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
        likes_amount: 9,
        reviews_amount: 3,
    }

    const CATEGORYDATA = [
        {
            category_name: "Seasonal",
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',            
        },
        {
            category_name: "Cakes",
            image: 'https://cakesbymk.com/wp-content/uploads/2022/11/Template-Size-for-Blog-Photos-8-802x1024.jpg',            
        },
        {
            category_name: "Everyday",
            image: 'https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/trung-chien-nuoc-mam-thumbnail.jpg',            
        },
        {
            category_name: "Drinks",
            image: 'https://www.liquor.com/thmb/_ByJyW_TPQ0W7W2SkX2qMwxoL7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shirley-temple-720x720-primary-e0fa3d9417e94ae18fe5cee2131862fb.jpg',            
        },
    ]

    const groups = [
        {
            groupName: "Diet Group",
            groupImg: "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
            groupMember: [
                user,
                user,
                user
            ],
            groupOwner: user
        }, 
        {
            groupName: "Cake group",
            groupImg: "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
            groupMember: [
                user,
                user
            ],
            groupOwner: user
        },
        {
            groupName: "Dry food Group",
            groupImg: "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
            groupMember: [
                user,
                user
            ],
            groupOwner: user
        }
    ]
        

    const homeProps = {
        navigation,
        user,
        image,
        propsCookbook,
        RECIPEDATA,
        CATEGORYDATA,
        groups,
    }
    return <HomeMainView {...homeProps} />;
}

export default HomeContainer;