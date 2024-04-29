const { default: GrocerContainer } = require("./GroceryContainer")

const Grocery = (props) => {
    const {
        navigation,

    } = props;

    const propContainer = {
        navigation,
        //...
    };
    return <GrocerContainer{...propContainer}/>
}

export default Grocery;