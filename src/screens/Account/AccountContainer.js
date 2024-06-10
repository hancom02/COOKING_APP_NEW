const { default: AccountMainView } = require("./AccountMainView");

const AccountContainer = (props) => {
    const {
        navigation,

    } = props;

    const propsMainView = {
        navigation,

    }

    return <AccountMainView{...propsMainView}/>
}

export default AccountContainer