const { default: SearchMainView } = require("./views/SearchMainView")

const SearchContainer = (props) => {
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

    return <SearchMainView{...propSearch}/>
}

export default SearchContainer;