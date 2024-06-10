const { default: ProfileContatiner } = require("./ProfileContainer");

const Profile = (props) => {
    const {
        navigation,
        // userData
    } = props;

    const propsContainer = {
        navigation,
        // userData,
    }

    return <ProfileContatiner{...propsContainer}/>
}

export default Profile