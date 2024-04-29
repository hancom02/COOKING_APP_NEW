import GroceryMainView from "./views/GroceryMainView";

const GrocerContainer = (props) => {
    const {
        navigation,

    } = props;

    const propGrocery = {
        navigation,
        //những prop cần truyền còn lại
    }

    return <GroceryMainView{...propGrocery}/>
}

export default GrocerContainer;