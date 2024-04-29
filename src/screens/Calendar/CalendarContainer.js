import CalendarMainView from "./views/CalendarMainView";

const CalendarContainer = (props) => {
    const {navigation} = props;

    const propSearch = {
        navigation,
        
    };

    return <CalendarMainView{...propSearch}/>
}

export default CalendarContainer;