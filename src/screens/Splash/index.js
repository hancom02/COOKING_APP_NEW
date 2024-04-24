import SplashContainer from "./SplashContainer";

const Splash = (props) => {
    const {navigation} = props;
    
    const splashProps = {
        navigation
    }
    return <SplashContainer{...splashProps} />
}

export default Splash;