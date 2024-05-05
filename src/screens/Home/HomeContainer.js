// bao bọc HomeMainView
// truyền data, prop,... cho HomeMainView

import { View, Text } from "react-native"
import HomeMainView from "./views/HomeMainView"

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

    const homeProps = {
        navigation,
        user,
        image
    }
    return <HomeMainView {...homeProps} />;
}

export default HomeContainer;