import RecipeAddMainView from "./views/RecipeAddMainView";

const RecipeAddContainer = (props) => {
    const {navigation} = props;

    const image = "";
    const username = "Ngoc Han";
    const cookBookDatas = {
        image: "",
        name: "noodle",

    }

    const propSearch = {
        navigation,
        
    };

    return <RecipeAddMainView{...propSearch}/>
}

export default RecipeAddContainer;