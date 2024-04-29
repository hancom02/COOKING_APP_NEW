import SearchContainer from "./SearchContainer";

const Search = (props) => {
    const {navigation} = props

    const propContainer = {
        navigation,
       
    };

    return <SearchContainer{...propContainer} />
}


export default Search;