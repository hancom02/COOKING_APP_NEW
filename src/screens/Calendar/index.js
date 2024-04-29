import CalendarContainer from "./CalendarContainer";

const Calendar = (props) => {
    const {navigation} = props

    const propContainer = {
        navigation,
       
    };

    return <CalendarContainer{...propContainer} />
}


export default Calendar;