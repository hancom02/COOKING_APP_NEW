import RecipeAddContainer from "./RecipeAddContainer";

const RecipeAdd = (props) => {
    const {navigation} = props

    const propContainer = {
        navigation,
       
    };

    return <RecipeAddContainer{...propContainer} />
}


export default RecipeAdd;