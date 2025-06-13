import react from "react";
import '../assets/WeatherIcon.css';
function WeatherIcon(props){
    // const iconType = props.icon || "04d"; // Default icon if none provided
    let iconType = props.icon || "04d"; // Default icon if none provided
    let icon;
    switch(iconType){
        case "04d":
            icon = <i className="wi-cloudy"></i>;
            break;
        case '04n':
            icon = <i className="wi-day-sunny"></i>;
            break;
        default:
            icon = <span>Unknown</span>;
    }

    return(
        <span className={"weatherIcon "+props.className}>{icon}</span>
    )
}
export default WeatherIcon;