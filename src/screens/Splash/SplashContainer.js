import SplashMainView from "./view/SplashMainView";

const SplashContainer = (props) => {
    const image1 = "https://i.pinimg.com/736x/52/91/79/529179109205958bcb05c0f6e55c43b5.jpg";
    const image2 = "https://as2.ftcdn.net/v2/jpg/02/37/69/25/1000_F_237692542_c1IDiqjwdVJJXyumoeuo5NcXsxPND0Cf.jpg"
    const image3 = "https://cockatoogrove.com.au/cdn/shop/articles/Untitled_800_x_1000px_5_720x.jpg?v=1666874721";

    const {navigation} = props;
    
    const splashProps = {
        navigation,
        image1,
        image2,
        image3,
    }

    return <SplashMainView{...splashProps}/>
}

export default SplashContainer;